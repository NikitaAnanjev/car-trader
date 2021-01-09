import {CarLink,CardContainer,EuroNormBadge} from './styles'
import slugify from 'react-slugify';
import NumberFormat from 'react-number-format';
import {Box, Badge, Image, Flex,Text,Heading,Divider} from "@chakra-ui/react"

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

    console.log(car)
    const carTitle = carDetails.make + ' ' + carDetails.model + ' ' + carDetails.year
    const slug = slugify(carTitle)
    const slugMake = slugify(carDetails.make)
    const leasingPrice = carDetails.leasingPrice &&
        <NumberFormat value={carDetails.leasingPrice} displayType={'text'} thousandSeparator={true} prefix={'DKK '}/>
    const fullPrice = <NumberFormat value={carDetails.fullPrice } displayType={'text'} thousandSeparator={true}
                                    prefix={'DKK '}/>
     const mileage = <NumberFormat value={carDetails.mileage} displayType={'text'} thousandSeparator={true}/>

    const property = {
        imageUrl: carDetails.pictures[0],
        imageAlt: slug,
        title: carTitle,
    }

    // const { data, loading, error } = useRemoteData()


    return (
        <CarLink href="/cars/[make]/[slug]/[id]" as={`/cars/${slugMake}/${slug}/${carDetails.id}`}>
        <CardContainer maxW="lg"  borderRadius="xs" overflow="hidden" mb={10} cursor="pointer" bg="gray.700">
            <Image src={property.imageUrl} alt={property.imageAlt}/>
            {carDetails.euroNorm &&   <EuroNormBadge><span>{carDetails.euroNorm}</span> <p>EuroNorm</p></EuroNormBadge> }
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

                <Divider my={5} />

                <Flex direction="row" p={3} mt={2} bg='green.500' maxW={'50%'}>

                    {fullPrice &&
                    <Box>
                       <Heading color="white" size={'lg'}>{fullPrice}</Heading>
                    </Box>
                    }
                    {leasingPrice && <Flex direction="row" >
                       <Heading d='flex' color="white" size={'lg'}> {leasingPrice}</Heading>
                        <Box ml={2} as="span" color="gray.100" fontSize="sm" d="flex">
                             / mdr
                        </Box>
                    </Flex>
                    }
                </Flex>

            </Box>
        </CardContainer>
        </CarLink>

    );
};



