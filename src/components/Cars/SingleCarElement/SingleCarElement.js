import {CarLink, CardContainer, EuroNormBadge} from './styles'
import slugify from 'react-slugify';
import NumberFormat from 'react-number-format';
import {Box, Badge, Image, Flex, Text, Heading, Divider} from "@chakra-ui/react"
import {ContactForm} from "@/components/ContactForm";

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
        fullPrice: car['CashPrice'],
        purchasePrice: car['PurchasePrice'],
        gear: car['GearType'],
        euroNorm: car['EuroNorm']
    }

    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year
    const slug = slugify(carTitle)
    const slugMake = slugify(carDetails.make)
    const leasingPrice = carDetails.leasingPrice &&
        <NumberFormat value={carDetails.leasingPrice} displayType={'text'} thousandSeparator={true} prefix={'DKK'}/>
    const fullPrice = <NumberFormat value={carDetails.fullPrice} displayType={'text'} thousandSeparator={true}
                                    prefix={'DKK '}/>
    const mileage = <NumberFormat value={carDetails.mileage} displayType={'text'} thousandSeparator={true}/>

    const property = {
        imageUrl: carDetails.pictures[0],
        imageAlt: slug,
        title: carTitle,
    }


    return (
        <>
            <CardContainer maxW="lg" borderRadius="sm" overflow="hidden" mb={10} cursor="pointer" bg="gray.700">

                <CarLink href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>
                    <Image src={property.imageUrl} alt={property.imageAlt}/>
                </CarLink>

                {carDetails.euroNorm &&
                <EuroNormBadge><span>{carDetails.euroNorm}</span> <p>EuroNorm</p></EuroNormBadge>}


                <Box p="6">

                    <Box
                        mb={3}
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        <Heading size="lg" color="gray.200">{property.title}</Heading>
                    </Box>
                    <Box d="flex" alignItems="baseline">
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
                    </Box>

                    <Divider my={5}/>

                    <Flex direction="row" justifyContent="space-between" alignItems="center">


                        <Flex direction="row" p={3} px={5} mt={2} maxW={{base: "60%", md: "80%"}}
                              justifyContent="center" alignItems="center" borderRadius="8px"
                              style={{background: 'linear-gradient(309deg, #e9212d 0%, #ec1e2b 35%, #fa313d 50%, #f52734 68%, #e32531 68%)'}}>

                            {fullPrice &&
                            <Box>
                                <Heading color="white" size={'lg'}>{fullPrice}</Heading>
                            </Box>
                            }
                            {leasingPrice && <Flex direction="row">
                                <Heading d='flex' color="white" size={'lg'}> {leasingPrice}</Heading>
                                <Box ml={2} as="span" color="gray.100" fontSize="sm" d="flex">
                                    / mdr
                                </Box>
                            </Flex>
                            }


                        </Flex>
                        <Flex>
                            <ContactForm carDetails={carDetails} carTitle={carTitle}/>
                        </Flex>


                    </Flex>

                </Box>


            </CardContainer>

        </>
    );
};



