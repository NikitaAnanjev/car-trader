import {useRouter} from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import {
    CarImageContainer,
    SingleCarItem,
    SinglePageContainer,
    CarContent,
} from "@/components/Cars/SingleCarElement/styles";
import {CircularProgress, Heading, Box, Flex, Text, Image, Divider} from "@chakra-ui/react"
import {LoadingIconWrap} from "@/components/styles"
import {CarImage} from "@/components/Cars/SingleCarElement/CarImage";
import {SingleCarTabs} from "@/components/SingleCarTabs";
import {CarPrice} from "@/components/CarPrice";
import NumberFormat from "react-number-format";


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
    if (!data) return <LoadingIconWrap><Image maxW={{base: "80%", md: "100%"}} w="230px"
                                              src="/loaderPiralux.gif"/></LoadingIconWrap>

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
        comment: car['Comment'],
        priceType: car['PriceType'],

        fullPrice: car['CashPrice'],
    }
    const fullPrice = <NumberFormat value={carDetails.fullPrice} displayType={'text'} thousandSeparator={true}
                                    prefix={'DKK '}/>

    const specificDetails = {}


    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year
    return (
        <Box w="100%" bg="gray.900" py={10}>


            <Flex m="auto" maxW={{base: "100%", lg: "1400px"}}
                  wrap="wrap"
                  direction={{base: "column", md: "row"}}
                  px={{base: "1rem", md: "0"}}>


                <SingleCarItem color="white" w={{base: "100%", lg: "75%"}} pr={{base: "0", lg: "2rem"}}>

                    {/*<Link href="/"> BACK to homepage</Link>*/}

                    <Heading color="white">{carTitle} </Heading>

                    <Divider maxW="3rem" mt={3} mb={5} borderColor="red.500"/>

                    <Flex bg="gray.800" borderRadius="8px" overflow="hidden" mb={5}>


                        <SinglePageContainer direction="column">


                            <Flex direction={{base: "column", lg: "row"}}>
                                <CarImageContainer>
                                    <CarImage images={carDetails.pictures} video={carDetails.video}/>
                                </CarImageContainer>


                            </Flex>
                        </SinglePageContainer>
                    </Flex>

                    <Flex borderRadius="8px" overflow="hidden" mb={5}>

                        <SingleCarTabs carDetails={carDetails}/>

                    </Flex>

                </SingleCarItem>

                <Flex w={{base: "100", lg: "25%"}} borderRadius="8px" direction="column" >

                    <Flex p={2}>
                        <CarContent p={10} bg=" linear-gradient(309deg, rgb(233, 33, 45) 0%, rgb(236, 30, 43) 35%, rgb(250, 49, 61) 50%, rgb(245, 39, 52) 68%, rgb(227, 37, 49) 68%)" justifyContent="center" alignItems="center">
                        <Text as='h4' fontSize={{base:"2rem", md: "2rem",lg: "3rem"}} color="white">{fullPrice} </Text>
                        </CarContent>
                    </Flex>
                    <Flex p={2}>
                        <CarContent p={10} bg="green.500">
                            <Text color="white"> Leasing måneder Prise   </Text>
                            <Text  as='h4' fontSize={{base:"1.6rem",md: "2rem", lg: "2.8rem"}} color="white"><CarPrice carId={data['VehicleSourceId']}/></Text>

                        </CarContent>
                    </Flex>

                    <Flex p={2}>

                        <CarContent p={10} bg="red.200">
                            {/*<Text color="white"> Leasing Price :{carPrice(data['VehicleSourceId'])}/>*/}

                            <p> ID: {carDetails.price} DKK </p>
                            <p> MILEAGE: {carDetails.mileage} </p>
                            <p> Mark: {carDetails.make} </p>
                            <p> Model: {carDetails.model} </p>
                            <p> Variant: {carDetails.variant} </p>
                            <p> Motor: {carDetails.motor} </p>
                            <p> Fuel: {carDetails.fuel} </p>
                        </CarContent>
                    </Flex>
                </Flex>


            </Flex>
        </Box>
    )
}