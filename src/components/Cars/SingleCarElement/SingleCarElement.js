import {CarLink} from './styles'
import {CarImage} from "./CarImage";
import Link from 'next/link'
import slugify from 'react-slugify';
import NumberFormat from 'react-number-format';
import {Box, Badge, Image, Flex,Text} from "@chakra-ui/react"


export const SingleCarElement = ({car}) => {
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
        leasingPrice: car['LeasingPrice'],
        fullPrice: car['PurchasePrice'],
        gear: car['GearType']
    }

    // console.log('data', car)


    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year
    const slug = slugify(carTitle)
    const slugMake = slugify(carDetails.make)
    const leasingPrice = carDetails.leasingPrice &&
        <NumberFormat value={carDetails.leasingPrice} displayType={'text'} thousandSeparator={true} prefix={'DKK '}/>
    const fullPrice = <NumberFormat value={carDetails.fullPrice} displayType={'text'} thousandSeparator={true}
                                    prefix={'DKK '}/>
     const mileage = <NumberFormat value={carDetails.mileage} displayType={'text'} thousandSeparator={true}/>

    const property = {
        imageUrl: carDetails.pictures[0],
        imageAlt: slug,
        beds: 3,
        baths: 2,
        title: carTitle,
        formattedPrice: leasingPrice,
        reviewCount: 34,
        rating: 4,
    }


    return (

        <CarLink href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>


        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb={10} cursor="pointer">
            <Image src={property.imageUrl} alt={property.imageAlt}/>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {carDetails.fuel}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {carDetails.motor} motor &bull; {mileage} km
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                </Box>

                <Flex direction="row" justify="space-between">
                        <Text> Price:</Text>
                    {fullPrice && <Box>
                        {fullPrice}

                    </Box>
                    }
                    {property.formattedPrice && <Box>
                        {property.formattedPrice}
                        <Box as="span" color="gray.600" fontSize="sm">
                            / mdr
                        </Box>
                    </Box>
                    }
                </Flex>

            </Box>
        </Box>
        </CarLink>
        //
        // <SingleCarItem>
        //     <CarImage images={carDetails.pictures}/>
        //     <SingleCarItemInner>
        //
        //
        //         <h2> TITLE: {carTitle} </h2>
        //         {leasingPrice && <p> Leasing Price: {leasingPrice} / moneder </p> }
        //         <p> Full Price: {fullPrice}  </p>
        //         <p> MILEAGE: {carDetails.mileage} KM </p>
        //         <p> Mark: {carDetails.make} </p>
        //         <p> Model: {carDetails.model} </p>
        //         <p> Variant: {carDetails.variant} </p>
        //         <p> Motor: {carDetails.motor} </p>
        //         <p> Fuel: {carDetails.fuel} </p>
        //     </SingleCarItemInner>

        // </SingleCarItem>
    );
};



