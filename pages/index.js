import Head from 'next/head'
import {SearchPanel} from '@/components/SearchPanel'
import {getAsString} from "@/helper/getAsString";
import slugify from "react-slugify";
import {CircularProgress, Heading, Flex, Box, Divider, IconButton} from "@chakra-ui/react"
import {LoadingIconWrap} from "@/components/styles"
import useSWR from 'swr'
import {encode} from "base-64";
import {CarList, PageLayout} from "@/components/Cars/styles";
import {TopBanner} from "@/components/TopBanner";
import dynamic from "next/dynamic";
import {FooterItem} from "@/components/Footer/styles";
import {useRouter} from "next/router";
import {MdViewList, MdViewModule} from "react-icons/md";
import {useEffect, useState} from "react";


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

    const [view, setView] = useState(  true)
    // const [view, setView] = useState( localStorage.getItem('carListView') ? localStorage.getItem('carListView') : true)



    const onClickView = (value) => {
        // localStorage.setItem('carListView', Boolean(value));
        setView(value)
    }

    return (
        <PageLayout>
            <Head><title> Piralux Auto</title></Head>

            <TopBanner>
                <Flex w={{sm: "90%", md: '80%', lg: "90%"}} maxW="1400px" direction="column">
                    <Heading maxW={{sm: "100%", md: '80%', lg: "70%"}} textAlign={{base: "center", md: "left"}} mb={10}
                             fontSize={{base: "2rem", sm: "3rem", md: '3.5rem', lg: '5rem'}}
                             p={{base: 3, sm: 2, md: 0}}
                             color="white"
                             textShadow=" 0px 15px 17px rgb(0 0 0 / 60%)
"
                    > VI IMPORTERER TYSKE BILER I HØJ STANDARD</Heading>
                    <SearchPanel data={data}>

                    </SearchPanel>
                </Flex>
            </TopBanner>


            <Box maxW="1400px" w={{ base:"99%",sm:"98%",md:"95%",lg:"90%" }} m="auto">

                <Flex direction="row" w="100%" justifyContent="space-between" alignItems="center">
                    <Flex pt={10} direction="column">
                        <Heading color="gray.200"
                                 textTransform="capitalize">{query.make ? `${query.make} biller` : "Alle vores biller"}</Heading>
                        <Divider maxW='10rem' my={3} borderColor="red.500"/>
                    </Flex>

                    <Flex color="white">

                        <IconButton
                            mr={3}
                            variant={view ? "solid" : "outline"}
                            colorScheme="red"
                            aria-label="List view"
                            size="sm"
                            icon={<MdViewModule fontSize="1.5rem"/>}
                            onClick={() => onClickView(true)}
                        />
                        <IconButton

                            variant={!view ? "solid" : "outline"}
                            colorScheme="red"
                            aria-label="List view"
                            onClick={() => onClickView(false)}
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
    // const year = getAsString(ctx.query.year);
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
        // year  ? json.Vehicles.filter((p) => slugify(p["Year"]) === year):
        json.Vehicles
    const [cars] = await Promise.all([
        filtered ? filtered : json.Vehicles,
    ])
    return {props: {cars}};
};