import {CarListElementContainer, CarListElementWrapper, ContentWrapper, ImgWrapper, EuroNormBadge} from './styles'
import {
    Box, Divider,
    Flex, Heading,
    Image, Text, useBreakpointValue
} from "@chakra-ui/react"
import slugify from "react-slugify";
import {carPrice} from "@/helper/carPrice";
import NumberFormat from "react-number-format";
import {CardContainer, CarLink, ImgCarouselConteiner} from "@/components/Cars/SingleCarElement/styles";


const SingleCarListElement = ({car}) => {


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
        <CarListElementContainer mb={5}>
            {/*<CarLink href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>*/}
            <CarListElementWrapper bg="gray.800">

                <Flex>

                    <ImgWrapper>
                        {changeImageSize && <Image src={changeImageSize} alt={property.imageAlt}/>}
                        {carDetails.euroNorm &&
                        <EuroNormBadge><span>{carDetails.euroNorm}</span> <p>EuroNorm</p></EuroNormBadge>}
                    </ImgWrapper>
                </Flex>
                <ContentWrapper direction="column" p={3} w="100%">

                    <Box w="100%">
                        <Heading size={{base: "sm",sm: 'lg'}} color="gray.200"
                        >{property.title}</Heading>
                        <Divider my={{base: 3, md: 5}}/>
                    </Box>


                    <Flex justifyContent="space-between" alignItems="flex-start"
                          direction={{base: "row", md: "column"}}>
                        <Flex direction="row" p={isMobile ? 1 : 2} px={1}
                              borderRadius="8px"
                              style={{background: 'linear-gradient(309deg, #e9212d 0%, #ec1e2b 35%, #fa313d 50%, #f52734 68%, #e32531 68%)'}}>
                            {fullPrice &&
                            <Box>
                                <Heading color="white" size={{base: "sm", md: "md"}}>{fullPrice}</Heading>
                            </Box>
                            }
                        </Flex>
                        {leasingPrice &&

                        <Flex direction="column" mt={{base: 0, md: 3}}>
                            {!isMobile && <Text fontSize="12px" color="white"> Leasing</Text>}
                            <Flex direction="row" borderRadius="8px" border="1px solid white" py={1} px={2}>
                                <Heading d='flex' color="white" size={{base: "sm", md: "md"}}>
                                    {leasingPrice}
                                </Heading>
                                <Box ml={2} as="span" color="gray.100" fontSize={{base: "xs", md: "sm"}} d="flex">
                                    / mdr
                                </Box>
                            </Flex>
                        </Flex>
                        }
                    </Flex>

                </ContentWrapper>


            </CarListElementWrapper>
            {/*</CarLink>*/}
        </CarListElementContainer>
    );
};

export default SingleCarListElement;
