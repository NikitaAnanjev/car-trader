import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import 'react-alice-carousel/lib/alice-carousel.css';
import {ChakraProvider, extendTheme, Box, Image} from "@chakra-ui/react"
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {SearchPanel} from "@/components/SearchPanel";
import useSWR from "swr";
import {LoadingIconWrap} from "@/components/styles";

const fetcher = (url) => fetch(url).then((res) => res.json())

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

    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><Image maxW={{base: "80%", md: "100%"}} w="230px"
                                              src="/loaderPiralux.gif"/></LoadingIconWrap>

    const isFixed = true
    return (
        <ChakraProvider theme={customTheme} resetCSS>
            <NavBar>
                <SearchPanel data={data} isfixed={isFixed ? 1 : 0}/>
            </NavBar>
            <Box pt={{base: "75px", md: "92px"}}>
                <Component {...pageProps}/>
            </Box>
            <Footer/>
        </ChakraProvider>
    )
}

export default MyApp
