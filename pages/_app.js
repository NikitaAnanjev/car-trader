import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Button, ChakraProvider, CircularProgress, extendTheme} from "@chakra-ui/react"
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {SearchPanel} from "@/components/SearchPanel";
import useSWR from "swr";
import {LoadingIconWrap} from "@/components/styles";
import {useState} from "react";
const fetcher = (url) => fetch(url).then((res) => res.json())

import { useRouter } from 'next/router'
// import { extendTheme } from "@chakra-ui/core"

// 2. Extend the theme to include custom colors, fonts, etc.
const colors = {
    colors: {
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
}

const customTheme = extendTheme({colors})


function MyApp({Component, pageProps}) {

    const [state,setState] = useState(null)
    const [allcars,setAllCars] = useState(true)

    const priceTypeOnClick = () => {
        setState(!state)
    }
    const showAllCars = () => {
        setAllCars(true)
        setState(null)
    }
    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><CircularProgress isIndeterminate color="red.300" /></LoadingIconWrap>


    return (
        <ChakraProvider theme={customTheme} resetCSS>
            <NavBar>
                <SearchPanel data={data} isfixed>
                    <Button

                        size="sm"
                        colorScheme='teal'
                        minW='120px'
                        mr={3}
                        onClick={showAllCars}
                    >All</Button>
                    <Button
                        size="sm"
                        colorScheme={state ? 'red' : 'green'}
                        minW='120px'
                        mr={3}
                        onClick={priceTypeOnClick}
                    >{state ? 'Retail' : 'Leasing'} </Button>
                </SearchPanel>
            </NavBar>
            <Component {...pageProps} priceTypeProps={state} showAllCars={showAllCars} allcars={allcars} priceTypeOnClick={priceTypeOnClick}/>
            <Footer/>
        </ChakraProvider>
    )


}

export default MyApp
