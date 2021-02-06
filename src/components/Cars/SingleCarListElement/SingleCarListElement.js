import {CarListElementContainer, CarListElementWrapper, ContentWrapper, ImgWrapper, EuroNormBadge} from './styles'
import {
    Box, Divider,
    Flex, Heading,
    Image, Text, useBreakpointValue
} from "@chakra-ui/react"
import slugify from "react-slugify";
import {carPrice} from "@/helper/carPrice";
import NumberFormat from "react-number-format";
import {CarLink } from "@/components/Cars/SingleCarElement/styles";
import {ContactForm} from "@/components/ContactForm";


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

    const gearType = carDetails.gear === 'A' ? 'Automat' : 'Mekanisk'

    const property = {
        imageUrl: carDetails.pictures[0],
        imageAlt: slug,
        title: carTitle,
    }

    const specificDetails = {
        entities: {
            2: {id: "2", title: "Modelår", value: carDetails.year},
            3: {id: "3", title: "Motors", value: carDetails.motor},
            4: {id: "4", title: "Model", value: carDetails.model},
            5: {id: "5", title: "Km", value: mileage},
            6: {id: "6", title: "Gearkasse", value: gearType},
            7: {id: "7", title: "Brændstof", value: carDetails.fuel},
        }
    }

    const changeImageSize = property.imageUrl.replace('l1600', 'l480')

    return (
        <CarListElementContainer mb={5} borderRadius="8px" overflow="hidden">
            <CarListElementWrapper bg="gray.800">
                <Flex w={{base: '70%', sm: '80%', md: '70%', lg: "90%"}} maxW="350px">
                    <CarLink href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>
                        <ImgWrapper>
                            {changeImageSize && <Image src={changeImageSize} alt={property.imageAlt}/>}
                            {!isMobile && carDetails.euroNorm &&
                            <EuroNormBadge><span>{carDetails.euroNorm}</span> <p>EuroNorm</p></EuroNormBadge>}
                        </ImgWrapper>
                    </CarLink>
                </Flex>

                <ContentWrapper direction="column" p={{base:"0.4rem",sm:"0.4rem",md:"1rem"}} w="100%">

                    <Flex w="100%">
                        <Heading fontSize={{base: "1rem", sm: '1.4rem', md: "1.6rem"}} mr={5} fontWeight="200"
                                 color="gray.200"
                        >{property.title}</Heading>

                        {!isMobile &&
                        <Flex alignItems="flex-start">
                            <Flex direction="row" p={1}
                                  mr={5}
                                  borderRadius="8px"
                                  style={{background: 'linear-gradient(309deg, #e9212d 0%, #ec1e2b 35%, #fa313d 50%, #f52734 68%, #e32531 68%)'}}>
                                {fullPrice &&
                                <Box>
                                    <Heading color="white" fontSize={{
                                        base: "0.75rem",
                                        sm: '1.2rem',
                                        md: "1.5rem"
                                    }}>{fullPrice}</Heading>
                                </Box>
                                }
                            </Flex>
                            {leasingPrice &&
                            <Flex direction="column">
                                <Flex direction="row" borderRadius="8px" border="1px solid white" py={1} px={2}>
                                    <Heading d='flex' color="white"
                                             fontSize={{base: "0.75rem", sm: '1.2rem', md: "1.5rem"}}>
                                        {leasingPrice}
                                    </Heading>
                                    <Box ml={2} as="span" color="gray.100"
                                         fontSize={{base: "0.5rem", sm: '0.75rem', md: "1rem"}} d="flex">
                                        mdr
                                    </Box>
                                </Flex>
                            </Flex>
                            }
                        </Flex>
                        }


                    </Flex>
                    <Divider my={{base: 2, sm: 3, md: 3, lg: 5}}/>

                    {!isMobile &&
                    <Flex maxH={{md: "100px", lg: "120px"}} maxW={{md: "100%", lg: "80%"}} wrap="wrap"
                          direction="column">
                        {Object.values(specificDetails.entities).map((info) =>

                            <Flex key={info.id} maxH={{md: "30px", lg: "50px"}} direction="row"
                                  border="0.5px solid #171923">
                                <Flex justifyContent="center" alignItems="center" bg="gray.700" w="80px">
                                    <Text fontSize="xs" color="gray.200">{info.title}</Text>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" p={2}>
                                    <Text fontWeight="500" color="gray.100">{info.value}</Text>
                                </Flex>
                            </Flex>
                        )}
                    </Flex>
                    }

                    {isMobile &&
                        <>
                    <Flex alignItems="flex-start"
                          direction={{base: "row", md: "column"}}>
                        <Flex direction="row" p={isMobile ? 1 : 2} px={1}
                              mr={5}
                              borderRadius="8px"
                              style={{background: 'linear-gradient(309deg, #e9212d 0%, #ec1e2b 35%, #fa313d 50%, #f52734 68%, #e32531 68%)'}}>
                            {fullPrice &&
                            <Box>
                                <Heading color="white"
                                         fontSize={{
                                             base: "0.75rem",
                                             sm: '1rem'

                                         }}>{fullPrice}</Heading>
                            </Box>
                            }
                        </Flex>
                        {leasingPrice &&

                        <Flex direction="column" mt={{base: 0, md: 3}}>
                            {!isMobile && <Text fontSize="12px" color="white"> Leasing</Text>}
                            <Flex direction="row" borderRadius="8px" border="1px solid white" py={1} px={2}>
                                <Heading d='flex' color="white"
                                         fontSize={{base: "0.75rem", sm: '0.8rem', md: "1.5rem"}}>
                                    {leasingPrice}
                                </Heading>
                                <Box ml={2} as="span" color="gray.100"
                                     fontSize={{base: "0.5rem", sm: '0.6rem', md: "1rem"}} d="flex">
                                    mdr
                                </Box>
                            </Flex>
                        </Flex>
                        }


                    </Flex>

                        <Flex>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize={{base: "xs", md: "sm"}}
                                textTransform="uppercase"
                                mt="2"
                            >
                                {carDetails.fuel} &bull; {carDetails.motor} motor &bull; {mileage} km
                            </Box>

                        </Flex>
                    </>
                    }


                </ContentWrapper>
                <Flex w={{base: "40px", sm: "40px", md: "5%"}} justifyContent="center">
                    <ContactForm carDetails={carDetails} carTitle={carTitle} specificDetails={specificDetails}
                                 listitem={true}/>
                </Flex>

            </CarListElementWrapper>

        </CarListElementContainer>
    );
};

export default SingleCarListElement;
