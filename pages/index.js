import Head from 'next/head'
import {Cars} from '@/components/Cars'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

    const {data, error} = useSWR('/api/cars', fetcher)


    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <Head/>
            <Cars data={data}/>
        </div>
    )
}
