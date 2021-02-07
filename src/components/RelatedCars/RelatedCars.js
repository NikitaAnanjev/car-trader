import useSWR from "swr";
import {LoadingIconWrap} from "@/components/styles";
import {Box, CircularProgress, Divider, Flex, Heading, useBreakpointValue} from "@chakra-ui/react";
import slugify from "react-slugify";
import AliceCarousel from 'react-alice-carousel';
import dynamic from "next/dynamic";
import {FooterItem} from "@/components/Footer/styles";

const fetcher = (url) => fetch(url).then((res) => res.json())

const DynamicCars = dynamic(() => import('@/components/Cars/SingleCarElement/SingleCarElement'),
    {
        loading: () => <Flex minH="300px" w="100%" justifyContent="center" alignItems="center"><CircularProgress
            isIndeterminate color="red.300"/></Flex>
    })
const DynamicListCars = dynamic(() => import('@/components/Cars/SingleCarListElement/SingleCarListElement'),
    {
        loading: () => <Flex minH="150px" w="100%" justifyContent="center" alignItems="center"><CircularProgress
            isIndeterminate color="red.300"/></Flex>
    })


const responsive = {
    0: {items: 1},
    568: {items: 2},
    769: {items: 3},
    1024: {items: 3},
    1280: {items: 4},
};


const RelatedCars = ({make, carId}) => {

    const isMobile = useBreakpointValue({base: true, md: false})
    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><CircularProgress isIndeterminate color="red.300"/></LoadingIconWrap>
    const filtered = make ? data.filter((p) => slugify(p["Make"]) === make && p['VehicleSourceId'] !== carId && p['PriceType'] !== 'Leasing') : data

    const settings = {
        autoPlay: true,
        autoPlayStrategy: "none",
        autoPlayInterval: 2000,
        animationDuration: 1000,
        animationType: "slide",
        infinite: true,
        touchTracking: false,
        disableDotsControls: true,
        disableButtonsControls: true,
        mouseTracking: true,
    }

    return (
        <>
            {filtered &&
            <Box py={5}>
                <Heading color="gray.300"> Tjek andre <span style={{
                    textTransform: "capitalize",
                    color: "white"
                }}> {filtered.length} {make}</span> biler</Heading>
                <Divider maxW="7rem" my={5} borderColor="red.500"/>
            </Box>}
            {filtered && (!isMobile ?
                    <>
                        <AliceCarousel
                            {...settings}
                            items={filtered.map((car) => <DynamicCars key={car["Id"]} car={car} relatedItem={true}/>)}
                            responsive={responsive}
                        />
                    </>
                    :
                    <>
                        {filtered.map((car) => <DynamicListCars key={car["Id"]} car={car} relatedItem={true}/>)}
                    </>
                )
            }
        </>
    )
};

export default RelatedCars