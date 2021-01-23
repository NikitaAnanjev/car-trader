import {useRouter} from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import {
    CarImageContainer,
    SingleCarItem,
    SinglePageContainer,
    CarContent,
    EquipmentList
} from "@/components/Cars/SingleCarElement/styles";
import {CircularProgress, Heading, Box, List, ListItem, ListIcon, Flex} from "@chakra-ui/react"
import {LoadingIconWrap} from "@/components/styles"
import {CarImage} from "@/components/Cars/SingleCarElement/CarImage";
import {
    MdInfo
} from "react-icons/md";

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
    if (!data) return <LoadingIconWrap><CircularProgress isIndeterminate color="red.600"/></LoadingIconWrap>

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
        video: car['Video'],
        price: car['Price'],
        vehicleSourceId: car['VehicleSourceId'],
        equipmentList: car['EquipmentList'],
    }

    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year
    return (
        <SingleCarItem >

            <Link href="/"> BACK to homepage</Link>
            <SinglePageContainer direction="column">
                <Flex w="100%">
                    <Heading>TITLE: {carTitle} </Heading>
                </Flex>

                <Flex  direction={{base: "column", lg: "row"}}>
                <CarImageContainer maxW={{base:"100%",md:"50%"}}>
                    <CarImage images={carDetails.pictures} video={carDetails.video}/>
                </CarImageContainer>


                <CarContent p={10}  maxW={{base:"100%",md:"50%"}}>
                    <p> ID: {carDetails.price} DKK </p>
                    <p> MILEAGE: {carDetails.mileage} </p>
                    <p> Mark: {carDetails.make} </p>
                    <p> Model: {carDetails.model} </p>
                    <p> Variant: {carDetails.variant} </p>
                    <p> Motor: {carDetails.motor} </p>
                    <p> Fuel: {carDetails.fuel} </p>
                </CarContent>

                </Flex>
            </SinglePageContainer>

            <Box w="100%" my={10}>
                <EquipmentList>
                    <List spacing={2} w="100%" d="flex" flexDirection="column" flexWrap="wrap" maxH="500px">
                        {carDetails.equipmentList.map((item) =>
                            <ListItem mr={10}>
                                <ListIcon as={MdInfo} color="green.500"/>
                                {item}
                            </ListItem>
                        )}
                    </List>
                </EquipmentList>
            </Box>

        </SingleCarItem>
    )
}