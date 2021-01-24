import useSWR from "swr";
import {CircularProgress} from "@chakra-ui/react";

// const fetcher = (url) => fetch(url).then((res) => res.json())

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}


export const carPrice = (vehicleSourceId) => {
    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <p>No price was found</p>
    if (!data) return <CircularProgress isIndeterminate color="red.300"/>
    const filtered = vehicleSourceId && data.filter((p) => p["VehicleSourceId"] === vehicleSourceId)
    const getPrice =  filtered.filter((p) => p["PriceType"] ===  "Leasing")
    if (getPrice.length > 0) {
        return getPrice[0]['Price']
    } else {
        return null
    }
}

