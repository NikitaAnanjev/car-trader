import {useState} from "react";
import useSWR from 'swr'
import slugify from "react-slugify";
import Head from 'next/head'
import {encode} from "base-64";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
//local libs
import {SearchPanel} from '@/components/SearchPanel'
import {getAsString} from "@/helper/getAsString";
import {CircularProgress, Heading, Flex, Box, Divider, IconButton,Fade} from "@chakra-ui/react"
import {LoadingIconWrap} from "@/components/styles"
import {PageLayout} from "@/components/Cars/styles";
import {TopBanner} from "@/components/TopBanner";
import {MdViewList, MdViewModule} from "react-icons/md";


const DynamicAllCars = dynamic(() => import('@/components/Cars/Cars'),
    {
        loading: () => <Flex minH="300px" w="100%" justifyContent="center" alignItems="center"><CircularProgress
            isIndeterminate color="red.300"/></Flex>
    })

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Home({cars}) {
    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><CircularProgress isIndeterminate color="red.300"/></LoadingIconWrap>
    const {query} = useRouter()

    const [view, setView] = useState(localStorage.getItem('carListView') && localStorage.getItem('carListView') || 'grid')

    const onClickView = (value) => {
        localStorage.setItem('carListView', value);
        setView(value)
    }

    return (

        <PageLayout >
            <Head><title>Piralux Auto</title></Head>

            <TopBanner>
                <Flex w={{sm: "90%", md: '80%', lg: "90%"}} maxW="1400px" direction="column" py={10}>
                    <Heading as="h1" fontWeight="900" maxW={{sm: "100%", md: '80%', lg: "70%"}}
                             textAlign={{base: "center", md: "left"}} mb={10}
                             fontSize={{base: "2rem", sm: "3rem", md: '3.5rem', lg: '5rem'}}
                             p='3rem 3rem 0 3rem'
                             color="white"
                             textShadow=" 0px 15px 17px rgb(0 0 0 / 60%)"
                    > VI IMPORTERER TYSKE BILER I HØJ STANDARD</Heading>
                    <SearchPanel data={data}/>
                </Flex>
            </TopBanner>


            <Box maxW="1400px" px="10px" w={{base: "100%", md: "95%", lg: "90%"}} m="auto">

                <Flex direction="row" w="100%" px={{base: "15px", sm: "10px", md: "0"}} justifyContent="space-between"
                      alignItems="center">
                    <Flex pt={10} direction="column">
                        <Heading color="gray.200"
                                 textTransform="capitalize">{query.make ? `${query.make} biller` : "Alle vores biller"}</Heading>
                        <Divider maxW='10rem' my={3} borderColor="red.500"/>
                    </Flex>

                    <Flex color="white">
                        <IconButton
                            mr={3}
                            variant={view === 'grid' ? "solid" : "outline"}
                            colorScheme="red"
                            aria-label="List view"
                            size="sm"
                            icon={<MdViewModule fontSize="1.5rem"/>}
                            onClick={() => onClickView('grid')}
                        />
                        <IconButton
                            variant={view === 'list' ? "solid" : "outline"}
                            colorScheme="red"
                            aria-label="List view"
                            onClick={() => onClickView('list')}
                            size="sm" icon={<MdViewList fontSize="1.5rem"/>}/>
                    </Flex>
                </Flex>
                <DynamicAllCars data={cars ? cars : data} view={view}/>
            </Box>
        </PageLayout>

    )
}

export const getServerSideProps = async (ctx) => {
    const make = getAsString(ctx.query.make);
    const username = process.env.BIlBASEN_API_LOGIN
    const password = process.env.BIlBASEN_API_PASS
    const url = process.env.BIlBASEN_API_URL
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encode(username + ":" + password),
            'Content-Type': 'application/json'
        }),

    });

    const json = await response.json();

    const filtered = make ? json.Vehicles.filter((p) => slugify(p["Make"]) === make) :
        json.Vehicles
    const [cars] = await Promise.all([
        filtered ? filtered : json.Vehicles,
    ])
    return {props: {cars}};
};