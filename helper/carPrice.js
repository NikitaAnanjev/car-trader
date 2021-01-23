import useSWR from "swr";
import {CircularProgress} from "@chakra-ui/react";

const fetcher = (url) => fetch(url).then((res) => res.json())


export const carPrice = (vehicleSourceId,props) => {
// export const carPrice = (vehicleSourceId, priceType) => {


    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <p>No price was found</p>
    if (!data) return <CircularProgress isIndeterminate color="red.300"/>


    const filtered = vehicleSourceId && data.filter((p) => p["VehicleSourceId"] === vehicleSourceId)
    // const getPrice = priceType && filtered.filter((p) => p["PriceType"] === (priceType === 'Leasing' ? "RetailPrice" : "Leasing"))

    // console.log('filtered',filtered)
    // const getPrice = priceType && filtered.filter((p) => p["PriceType"] === (priceType === 'Leasing' ? "RetailPrice" : "Leasing"))
    const getPrice =  filtered.filter((p) => p["PriceType"] ===  "Leasing")
    // const getPrice = oppositePriceType && filtered.filter((p) => p["PriceType"] === oppositePriceType)

    if (getPrice.length > 0) {

        return getPrice[0]['Price']
    } else {
        return null
    }

}

