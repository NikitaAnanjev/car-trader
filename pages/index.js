import Head from 'next/head'
import {Cars} from '@/components/Cars'
import {NavBar} from '@/components/NavBar'
import {SearchPanel} from '@/components/SearchPanel'
import {getAsString} from "../helper/getAsString";
import slugify from "react-slugify";

import useSWR from 'swr'
import {encode} from "base-64";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home({cars}) {




    const {data, error} = useSWR('/api/cars', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


    return (
        <div>
            <Head/>
            <SearchPanel data={ data}/>
            <Cars data={cars ? cars : data}/>
        </div>
    )
}



export const getServerSideProps = async (ctx) => {
    const make = getAsString(ctx.query.make);
    // const year = getAsString(ctx.query.year);


    const username =  process.env.BIlBASEN_API_LOGIN
    const password =  process.env.BIlBASEN_API_PASS
    const url = process.env.BIlBASEN_API_URL

    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encode(username + ":" + password),
            'Content-Type': 'application/json'
        }),

    });

    const json = await response.json();

    const filtered =
                         make  ? json.Vehicles.filter((p) => slugify(p["Make"]) === make ) :
                         // year  ? json.Vehicles.filter((p) => slugify(p["Year"]) === year):
                             json.Vehicles




    const [cars] = await Promise.all([
        filtered ? filtered : json.Vehicles,

    ])


    return { props: {cars } };
};