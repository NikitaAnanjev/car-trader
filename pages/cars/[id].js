import { useRouter } from 'next/router'
import useSWR from 'swr'
import {SingleCarItem, SingleCarItemInner} from "../../src/components/Cars/SingleCarElement/styles";
import {CarImage} from "../../src/components/Cars/SingleCarElement/CarImage";

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
        () => query.id && `/api/cars/${query.id}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    const car = data

    const carDetails = {
        id: car['Id'],
        mileage: car['Mileage'],
        year: car['Year'],
        make: car['Make'],
        model: car['Model'],
        variant: car['Variant'],
        motor: car['Motor'],
        fueltype: car['Propellant'],
        pictures: car['Pictures']
    }

    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year



    return (
        <SingleCarItem>
            {console.log(data)}
            <SingleCarItemInner href={`cars/${carTitle}`}>
            {/*<SingleCarItemInner href={`cars/${carDetails.id}`}>*/}
                <CarImage images={carDetails.pictures}/>


                <h2> TITLE: {carTitle} </h2>
                <p> ID: {carDetails.id} </p>
                <p> MILEAGE: {carDetails.mileage} </p>
                <p> Year: {carDetails.make} </p>
                <p> Year: {carDetails.model} </p>
                <p> Year: {carDetails.variant} </p>
                <p> Year: {carDetails.motor} </p>
                <p> Year: {carDetails.fueltype} </p>
            </SingleCarItemInner>



        </SingleCarItem>
    )
}