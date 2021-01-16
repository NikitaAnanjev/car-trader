import {useState} from "react";
import Head from 'next/head'
import {Cars} from '@/components/Cars'
import {SearchPanel} from '@/components/SearchPanel'
import {getAsString} from "../helper/getAsString";
import slugify from "react-slugify";
import {CircularProgress, Button, Heading} from "@chakra-ui/react"
import {LoadingIconWrap} from "@/components/styles"
import useSWR from 'swr'
import {encode} from "base-64";
import {PageLayout} from "@/components/Cars/styles";
import {TopBanner} from "@/components/TopBanner";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home(props) {
    const {cars, priceTypeProps, priceTypeOnClick, showAllCars, allcars} = props


    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><CircularProgress isIndeterminate color="red.300"/></LoadingIconWrap>


    return (
        <PageLayout>
            <Head/>
            <TopBanner>
                <Heading maxW={{sm: "100%", md: '60%', lg: "50%"}} p={3} textAlign='center' mb={10} fontSize='3rem'
                         color="white"> VI IMPORTERER TYSKE BILER I HØJ STANDARD</Heading>
                <SearchPanel data={data}>
                    <Button
                        colorScheme='green'
                        minW='120px'
                        mr={3}
                        onClick={showAllCars}
                    >All</Button>
                    <Button
                        colorScheme={priceTypeProps ? 'red' : 'green'}
                        minW='120px'
                        mr={3}
                        onClick={priceTypeOnClick}
                    >{priceTypeProps ? 'Retail' : 'Leasing'} </Button>
                </SearchPanel>
            </TopBanner>
            <Cars data={cars ? cars : data}
                  allcars={allcars}
                  priceType={priceTypeProps}
            />
            {/*<Cars data={cars ? cars : data} />*/}
        </PageLayout>
    )
}

// export const getStaticProps = async (ctx) => {
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