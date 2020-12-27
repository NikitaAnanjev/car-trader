import {useRouter} from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import {
    CarImageContainer,
    SingleCarItem,
    SinglePageContainer,
    CarContent
} from "@/components/Cars/SingleCarElement/styles";
import {CarImage} from "@/components/Cars/SingleCarElement/CarImage";

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function SingleCarPage() {


    const {query} = useRouter()

    const {data, error} = useSWR(
        () => query.id && `/api/cars/${query.make}/${query.slug}/${query.id}`,
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
        fuel: car['Propellant'],
        pictures: car['Pictures'],
        price: car['Price']
    }

    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year


    return (
        <SingleCarItem>
            <Link href="/"> BACK to homepage</Link>


            <SinglePageContainer>
                <CarImageContainer>
                    <CarImage images={carDetails.pictures}/>

                </CarImageContainer>

                <CarContent>
                    <h2> TITLE: {carTitle} </h2>
                    <p> ID: {carDetails.price} DKK </p>
                    <p> MILEAGE: {carDetails.mileage} </p>
                    <p> Mark: {carDetails.make} </p>
                    <p> Model: {carDetails.model} </p>
                    <p> Variant: {carDetails.variant} </p>
                    <p> Motor: {carDetails.motor} </p>
                    <p> Fuel: {carDetails.fuel} </p>
                </CarContent>
            </SinglePageContainer>


        </SingleCarItem>
    )
}