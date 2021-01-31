import slugify from 'react-slugify';
import NumberFormat from 'react-number-format';
import {Box, Badge, Image, Flex, Text, Heading, Divider, Button, useBreakpointValue} from "@chakra-ui/react"
import {CarLink, CardContainer, EuroNormBadge, SignCarBtn} from './styles'
import {ContactForm} from "@/components/ContactForm";
import {carPrice} from "@/helper/carPrice";
import {MdDirectionsCar,MdPlaylistAddCheck,MdLocalGasStation} from "react-icons/md";

const SingleCarElement = ({car, size, relatedItem}) => {


    const isMobile = useBreakpointValue({base: true,sm: true, md: false})
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

    const property = {
        imageUrl: carDetails.pictures[0],
        imageAlt: slug,
        title: carTitle,
    }

    const changeImageSize = property.imageUrl.replace('l1600', 'l480')

    return (
        <>
            <CardContainer maxW={size ? size : (relatedItem ? { base: "md" ,sm:"xs"} :  "sm")} overflow="hidden" borderRadius="md" mb={10}
                           bg="gray.700">
                <CarLink   href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>
                 <Image cursor="pointer" _hover={{'opacity' : '0.9'}} _active={{'opacity' : '0.8'}} src={changeImageSize} alt={property.imageAlt} />
                </CarLink>
                {carDetails.euroNorm &&
                <EuroNormBadge><span>{carDetails.euroNorm}</span> <p>EuroNorm</p></EuroNormBadge>}

                <Flex w="100%">
                    <ContactForm carDetails={carDetails} carTitle={carTitle} />
                </Flex>
                <Box p={ {base: "2" ,md:"6"}}>
                    <Box
                        my={3}
                        fontWeight="semibold"
                        lineHeight="tight"
                        isTruncated
                    >
                        <Heading size={relatedItem ? "md" : 'lg'} color="gray.200"
                        >{property.title}</Heading>
                    </Box>

                    <Flex  justifyContent="space-between" alignItems="flex-end" >
                        <Flex direction="row" p={2} px={1} maxW={{base: "100%",md: "60%", lg: "80%"}}
                              w="100%"

                              justifyContent="center" alignItems="center" borderRadius="8px"
                              style={{background: 'linear-gradient(309deg, #e9212d 0%, #ec1e2b 35%, #fa313d 50%, #f52734 68%, #e32531 68%)'}}>
                            {fullPrice &&
                            <Box>
                                <Heading color="white" size={relatedItem ? "sm" :  {base: "sm" ,md:"md"}}>{fullPrice}</Heading>
                            </Box>
                            }
                        </Flex>
                        {leasingPrice &&

                        <Flex direction="column" w="100%" maxW="40%" ml="5%" >
                            {!relatedItem && <Text fontSize="13px" color="white"> Leasing</Text>}
                            <Flex direction="row" borderRadius="8px" border="1px solid white" py={1} px={2}>
                                <Heading d='flex' color="white" size={relatedItem ? "sm" : {base: "sm" ,md:"md"}}>
                                    {leasingPrice}
                                </Heading>
                                <Box ml={2} as="span" color="gray.100" fontSize={{base: "xs", md: "sm"}} d="flex">
                                    / mdr
                                </Box>
                            </Flex>
                        </Flex>
                        }
                    </Flex>

                    <Divider my={{base: 3 ,md:5}}/>


                    <Box d="flex" alignItems="baseline" justifyContent="space-between">
                        <Flex>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize={{base: "xs" ,md:"sm"}}
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