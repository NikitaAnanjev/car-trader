import Head from 'next/head'
import {Cars} from '../src/components/Cars'
import axios from "axios";


export default function Home({data}) {


console.log('data',data.Vehicles)
    return (
        <div>
            <Head/>


            <Cars data={data.Vehicles}/>


            hej
        </div>

    )
}




export const getServerSideProps  = async () => {
    const username =  process.env.BIlBASEN_API_LOGIN
    const password =  process.env.BIlBASEN_API_PASS
    const url = process.env.BIlBASEN_API_URL

    const response = await axios.get(url, {
        auth: {
            username: username,
            password: password
        }

    })
        // .then((r) => {
        //     const cars = r.data.reduce((acc, value) => {
        //         acc[id] = value
        //         return acc
        //     }, {})
        // })

    const {data} = await response;

    return {
        props: {
            data,
        },
    };
};
