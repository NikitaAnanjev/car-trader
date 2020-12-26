import { useRouter } from 'next/router'
import useSWR from 'swr'

import {CarList} from "../../src/components/Cars/styles";
import {SingleCarElement} from "../../src/components/Cars/SingleCarElement";

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function SingleCarPage() {


    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.make && `/api/make/${query.make}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>



    return (
        <CarList>

            {/*{JSON.stringify(data, null, 2)}*/}
            {data.map((car) =>
                <SingleCarElement key={car["Id"]} car={car}/>
            )}
        </CarList>
    )
}