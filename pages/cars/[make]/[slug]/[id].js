import {useRouter} from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import {
    CarImageContainer,
    SingleCarItem,
    SinglePageContainer,
    CarContent,
} from "@/components/Cars/SingleCarElement/styles";
import {useBreakpointValue, Heading, Box, Flex, Text, Image, Divider} from "@chakra-ui/react"
import {LoadingIconWrap} from "@/components/styles"
import {CarImage} from "@/components/Cars/SingleCarElement/CarImage";
import {SingleCarTabs} from "@/components/SingleCarTabs";
import {CarPrice} from "@/components/CarPrice";
import NumberFormat from "react-number-format";
import {TableCarDetails} from "@/components/TableCarDetails";
import {RelatedCars} from "@/components/RelatedCars";
import slugify from "react-slugify";

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function SingleCarPage() {

    const mobile = useBreakpointValue({base: true, md: false})
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
        gear: car['GearType'],
        bodyType: car['BodyType'],
        gasTank: car['GasTankMax'],
        kmPerLiter: car['KmPerLiter'],
    }
    const fullPrice = <NumberFormat value={carDetails.fullPrice} displayType={'text'} thousandSeparator={true}
                                    prefix={'DKK '}/>
    const distance = <NumberFormat value={carDetails.mileage} displayType={'text'} thousandSeparator={true}
    />


    const gearType = carDetails.gear === 'A' ? 'Automat' : 'Mekanisk'
    console.log(car)

    const specificDetails = {
        entities: {
            1: {id: "1", title: "Bilmærke", value: carDetails.make},
            2: {id: "2", title: "Modelår", value: carDetails.year},
            3: {id: "3", title: "Motorstørrelse", value: carDetails.motor},
            4: {id: "4", title: "Model", value: carDetails.model},
            5: {id: "5", title: "Km", value: distance},
            6: {id: "6", title: "Gearkasse", value: gearType},
            7: {id: "7", title: "Brændstof", value: carDetails.fuel},
            8: {id: "8", title: "Karosseri type", value: carDetails.bodyType},
            9: {id: "9", title: "Tank", value: carDetails.gasTank + ' L'},
            10: {id: "10", title: "KM/L", value: carDetails.kmPerLiter + ' Km'},
        }
        // <p> ID: {carDetails.price} DKK </p>
        // <p> MILEAGE: {carDetails.mileage} </p>
        // <p> Mark: {carDetails.make} </p>
        // <p> Model: {carDetails.model} </p>
        // <p> Variant: {carDetails.variant} </p>
        // <p> Motor: {carDetails.motor} </p>
        // <p> Fuel: {carDetails.fuel} </p>
    }


    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year
    return (
        <Box w="100%" bg="gray.900" py={10}>


            <Flex m="auto" maxW={{base: "100%", lg: "1400px"}}
                  wrap="wrap"
                  direction={{base: "column", md: "row"}}
                  px={{base: "1rem", md: "1rem"}}>


                <SingleCarItem color="white" w={{base: "100%", sm: "65%!important",lg: "75%"}} pr={{base: "0", lg: "1rem"}}>

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


                    {mobile &&

                    <Flex borderRadius="0 8px 8px 0" overflow="hidden" mb={5} direction="row"
                          justifyContent="space-between">
                        <Flex>
                            <CarContent
                                p={5}
                                alignItems="center"
                                bg=" linear-gradient(309deg, rgb(233, 33, 45) 0%, rgb(236, 30, 43) 35%, rgb(250, 49, 61) 50%, rgb(245, 39, 52) 68%, rgb(227, 37, 49) 68%)"
                            >
                                <Text as='h4' fontSize={{base: "1.6rem"}}
                                      color="white">{fullPrice} </Text>
                            </CarContent>
                        </Flex>
                        <Flex>
                            <CarContent p={5} bg="green.500">
                                <Text as='h4' fontSize={{base: "1.6rem"}}
                                      color="white"><CarPrice
                                    carId={data['VehicleSourceId']}/></Text>
                                <Text color="white"> Leasing måneder Prise </Text>

                            </CarContent>
                        </Flex>
                    </Flex>
                    }

                    <Flex borderRadius="0 8px 8px 0" overflow="hidden" mb={5}>
                        <SingleCarTabs carDetails={carDetails}/>
                    </Flex>

                </SingleCarItem>

                <Flex w={{base: "100%", md: "35%!important",lg: "25%"}} borderRadius="8px" direction="column">
                    {!mobile &&
                    <>
                        <Flex p={2}>
                            <CarContent p={5}
                                        bg=" linear-gradient(309deg, rgb(233, 33, 45) 0%, rgb(236, 30, 43) 35%, rgb(250, 49, 61) 50%, rgb(245, 39, 52) 68%, rgb(227, 37, 49) 68%)"
                            >
                                <Text as='h4' fontSize={{base: "2rem", md: "2rem", lg: "3rem"}}
                                      color="white">{fullPrice} </Text>
                            </CarContent>
                        </Flex>
                        <Flex p={2}>
                            <CarContent p={5} bg="green.500">
                                <Text color="white"> Leasing måneder Prise </Text>
                                <Text as='h4' fontSize={{base: "1.6rem", md: "2rem", lg: "2.8rem"}}
                                      color="white"><CarPrice
                                    carId={data['VehicleSourceId']}/></Text>

                            </CarContent>
                        </Flex>
                    </>
                    }

                    <Flex p={2}>
                        <CarContent bg="gray.200">
                            <TableCarDetails data={specificDetails}/>
                        </CarContent>
                    </Flex>
                </Flex>

                    <RelatedCars make={slugify(carDetails.make)} />
            </Flex>
        </Box>
    )
}