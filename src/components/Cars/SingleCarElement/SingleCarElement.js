import slugify from 'react-slugify';
import NumberFormat from 'react-number-format';
import {Box, Badge, Image, Flex, Text, Heading, Divider} from "@chakra-ui/react"
import {CarLink, CardContainer, EuroNormBadge} from './styles'
import {ContactForm} from "@/components/ContactForm";
import {carPrice} from "@/helper/carPrice";

const SingleCarElement = ({car}) => {
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
            <CardContainer maxW="sm" borderRadius="sm" overflow="hidden" mb={10} cursor="pointer" bg="gray.700">
                <CarLink href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>
                    <Image src={changeImageSize} alt={property.imageAlt}/>
                </CarLink>
                {carDetails.euroNorm &&
                <EuroNormBadge><span>{carDetails.euroNorm}</span> <p>EuroNorm</p></EuroNormBadge>}
                <Box p="6">

                    <Box
                        mb={3}
                        fontWeight="semibold"
                        lineHeight="tight"
                        isTruncated
                    >
                        <Heading size="lg" color="gray.200">{property.title}</Heading>
                    </Box>
                    <Box d="flex" alignItems="baseline" justifyContent="space-between">
                        <Flex>
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                {carDetails.fuel}
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="sm"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {carDetails.motor} motor &bull; {mileage} km
                            </Box>
                        </Flex>
                        <Flex>
                            <ContactForm carDetails={carDetails} carTitle={carTitle}/>
                        </Flex>
                    </Box>
                    <Divider my={5}/>
                    <Flex direction="row" justifyContent="space-between" alignItems="center">
                        <Flex direction="row" p={2} px={1} maxW={{base: "60%", md: "80%"}}
                              justifyContent="center" alignItems="center" borderRadius="8px"
                              style={{background: 'linear-gradient(309deg, #e9212d 0%, #ec1e2b 35%, #fa313d 50%, #f52734 68%, #e32531 68%)'}}>
                            {fullPrice &&
                            <Box>
                                <Heading color="white" size={'lg'}>{fullPrice}</Heading>
                            </Box>
                            }
                        </Flex>
                        {leasingPrice && <Flex direction="column">
                            <Text fontSize="13px" color="white"> Leasing</Text>
                            <Flex direction="row" borderRadius="8px" border="1px solid white" p={1} px={1}>
                                <Heading d='flex' color="white" size={'md'}>
                                    {leasingPrice}
                                </Heading>
                                <Box ml={2} as="span" color="gray.100" fontSize="sm" d="flex">
                                    / mdr
                                </Box>
                            </Flex>

                        </Flex>
                        }
                    </Flex>
                </Box>
            </CardContainer>
        </>
    );
};


export default SingleCarElement