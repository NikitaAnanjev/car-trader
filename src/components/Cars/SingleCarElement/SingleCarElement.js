import slugify from 'react-slugify';
import NumberFormat from 'react-number-format';
import {
    Box,
    Image,
    Flex,
    Text,
    Heading,
    Divider,
    useBreakpointValue,
    CircularProgress
} from "@chakra-ui/react"
import {CarLink, CardContainer, EuroNormBadge, ImgCarouselConteiner} from './styles'
import {ContactForm} from "@/components/ContactForm";
import {carPrice} from "@/helper/carPrice";
import {MdDirectionsCar, MdPlaylistAddCheck, MdLocalGasStation} from "react-icons/md";
import dynamic from "next/dynamic";


const DynamicCarImage = dynamic(() => import("@/components/Cars/SingleCarElement/CarImage/CarImage"),
    {
        loading: () => <Flex minH="300px" w="100%" justifyContent="center" alignItems="center"><CircularProgress
            isIndeterminate color="red.300"/></Flex>
    })


const SingleCarElement = ({car, size, relatedItem}) => {


    const isMobile = useBreakpointValue({base: true, sm: true, md: false})
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
        fullPrice: car['CashPrice'],
        purchasePrice: car['PurchasePrice'],
        gear: car['GearType'],
        euroNorm: car['EuroNorm'],
        vehicleSourceId: car['VehicleSourceId'],
        priceType: car['PriceType']
    }


    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year
    const slug = slugify(carTitle)
    const slugMake = slugify(carDetails.make)
    const oppositePrice = carPrice(carDetails.vehicleSourceId)
    const leasingPrice = oppositePrice &&
        <NumberFormat value={oppositePrice} displayType={'text'} thousandSeparator={true} prefix={'DKK '}/>
    const fullPrice = <NumberFormat value={carDetails.fullPrice} displayType={'text'} thousandSeparator={true}
                                    prefix={'DKK '}/>
    const mileage = <NumberFormat value={carDetails.mileage} displayType={'text'} thousandSeparator={true}/>

    const distance = <NumberFormat value={carDetails.mileage} displayType={'text'} thousandSeparator={true}/>


    const gearType = carDetails.gear === 'A' ? 'Automat' : 'Mekanisk'

    const property = {
        imageUrl: carDetails.pictures[0],
        imageAlt: slug,
        title: carTitle,
    }


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
    }

    const changeImageSize = property.imageUrl.replace('l1600', 'l480')

    return (
        <>
            <CardContainer maxW={size ? size : (relatedItem ? {base: "md", sm: "xs", md: "xs"} : {base: "100%", sm: "100%",md:"48%", lg: "31.5%"} )}
                           overflow="hidden" borderRadius="md" mb={10}

                           bg="gray.700">
                <CarLink href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>
                    <ImgCarouselConteiner>

                        {changeImageSize && <Image src={changeImageSize} alt={property.imageAlt} />}
                        {/*{carDetails.pictures && <DynamicCarImage singleElement images={imageSizes()}/>}*/}
                        {carDetails.euroNorm &&
                        <EuroNormBadge><span>{carDetails.euroNorm}</span> <p>EuroNorm</p></EuroNormBadge>}
                    </ImgCarouselConteiner>
                </CarLink>

                <Flex w="100%">
                    <ContactForm carDetails={carDetails} carTitle={carTitle} specificDetails={specificDetails}/>
                </Flex>
                <Box p={{base: "2", md: "3"}}>
                    <Box
                        my={3}
                        fontWeight="semibold"
                        lineHeight="tight"
                        isTruncated
                    >
                        <Heading size={relatedItem ? "md" : 'lg'} color="gray.200"
                        >{property.title}</Heading>
                    </Box>

                    <Flex justifyContent="space-between" alignItems="flex-end">
                        <Flex direction="row" p={2} px={1} maxW={{base: "100%", md: "60%", lg: "80%"}}
                              w="100%"

                              justifyContent="center" alignItems="center" borderRadius="8px"
                              style={{background: 'linear-gradient(309deg, #e9212d 0%, #ec1e2b 35%, #fa313d 50%, #f52734 68%, #e32531 68%)'}}>
                            {fullPrice &&
                            <Box>
                                <Heading color="white"
                                         size={relatedItem ? "sm" : {base: "sm", md: "md"}}>{fullPrice}</Heading>
                            </Box>
                            }
                        </Flex>
                        {leasingPrice &&

                        <Flex direction="column" w="100%"  ml="5%">
                            {!relatedItem && <Text fontSize="12px" color="white"> Leasing</Text>}
                            <Flex direction="row" borderRadius="8px" border="1px solid white" py={1} px={2}>
                                <Heading d='flex' color="white" size={relatedItem ? "xs" : {base: "sm", md: "md"}}>
                                    {leasingPrice}
                                </Heading>
                                <Box ml={2} as="span" color="gray.100" fontSize={{base: "xs", md: "sm"}} d="flex">
                                    / mdr
                                </Box>
                            </Flex>
                        </Flex>
                        }
                    </Flex>

                    <Divider my={{base: 3, md: 5}}/>


                    <Box d="flex" alignItems="baseline" justifyContent="space-between">
                        <Flex>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize={{base: "xs", md: "sm"}}
                                textTransform="uppercase"
                                ml="2"
                            >
                                {carDetails.fuel} &bull; {carDetails.motor} motor &bull; {mileage} km
                            </Box>
                        </Flex>
                    </Box>
                </Box>

            </CardContainer>
        </>
    );
};


export default SingleCarElement