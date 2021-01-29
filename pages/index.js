import Head from 'next/head'
import {SearchPanel} from '@/components/SearchPanel'
import {getAsString} from "@/helper/getAsString";
import slugify from "react-slugify";
import {CircularProgress, Heading,Flex,Box} from "@chakra-ui/react"
import {LoadingIconWrap} from "@/components/styles"
import useSWR from 'swr'
import {encode} from "base-64";
import {PageLayout} from "@/components/Cars/styles";
import {TopBanner} from "@/components/TopBanner";
import dynamic from "next/dynamic";

const DynamicAllCars = dynamic(() => import('@/components/Cars/Cars'),
    {loading: () => <Flex minH="300px" w="100%" justifyContent="center" alignItems="center"><CircularProgress isIndeterminate color="red.300"/></Flex>})

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Home({cars}) {
    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><CircularProgress isIndeterminate color="red.300"/></LoadingIconWrap>


    return (
        <PageLayout>
            <Head/>
            <TopBanner>
                <Heading maxW={{sm: "100%", md: '70%', lg: "60%"}} textAlign={{base: "center", md: "left"}} mb={10}
                         fontSize={{base: "2rem", sm: "3rem", md: '3.5rem', lg: '5rem'}}
                         p={{base: 3, sm: 2, md: 0}}
                         color="white"> VI IMPORTERER TYSKE BILER I HØJ STANDARD</Heading>
                <SearchPanel data={data}>

                </SearchPanel>
            </TopBanner>
            <Box maxW="1400px" m="auto">
                <DynamicAllCars data={cars ? cars : data}/>
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