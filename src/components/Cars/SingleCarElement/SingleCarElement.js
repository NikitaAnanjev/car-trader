import {SingleCarItem, SingleCarItemInner} from './styles'
import {CarImage} from "./CarImage";
import Link from 'next/link'
import slugify from 'react-slugify';

export const SingleCarElement = ({car}) => {
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
    const slug = slugify(carTitle)
    const slugMake = slugify(carDetails.make)

    return (
        <SingleCarItem>
            <CarImage images={carDetails.pictures}/>
            <SingleCarItemInner>

                <h2> TITLE: {carTitle} </h2>
                <p> ID: {carDetails.id} </p>
                <p> MILEAGE: {carDetails.mileage} </p>
                <p> Year: {carDetails.make} </p>
                <p> Year: {carDetails.model} </p>
                <p> Year: {carDetails.variant} </p>
                <p> Year: {carDetails.motor} </p>
                <p> Year: {carDetails.fueltype} </p>
            </SingleCarItemInner>
            <Link href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>
                Read More
            </Link>
        </SingleCarItem>
    );
};



