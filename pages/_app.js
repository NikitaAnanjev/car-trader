import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-datepicker/dist/react-datepicker.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import {ChakraProvider, extendTheme, Box, Image} from "@chakra-ui/react"
import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import {SearchPanel} from "@/components/SearchPanel";
import useSWR, {SWRConfig} from "swr";
import {LoadingIconWrap} from "@/components/styles";
import ScrollUpButton from "react-scroll-up-button"
// import {encode} from "base-64";
// import axios from "axios";
// import { CacheProvider } from '@emotion/react'
// import createCache from '@emotion/cache'

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

// const username =  process.env.BIlBASEN_API_LOGIN
// const password =  process.env.BIlBASEN_API_PASS
// const url = process.env.BIlBASEN_API_URL
//
//
// export const instanceFrontApi = axios.create({
//     baseURL: url,
//     headers: {
//         common: {
//             Authorization: 'Basic ' + encode(username + ":" + password),
//         },
//     },
// })
//
// export const apiMethods = {
//     fetcher: (url) =>
//         instanceFrontApi.get(url).then((res) => res.data),
// }


function MyApp({Component, pageProps}) {

    const {data, error} = useSWR('/api/cars', fetcher)
    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><Image maxW={{base: "80%", md: "100%"}} w="230px"
                                              src="/loaderPiralux.gif"/></LoadingIconWrap>

    const isFixed = true
    return (
        // <CacheProvider value={(cache) }>
        // <SWRConfig
        //     value={{
        //         dedupingInterval: 3000,
        //         fetcher: (url) => apiMethods.fetcher(url),
        //     }}
        // >
        <ChakraProvider theme={customTheme} resetCSS>
            <NavBar>
                <SearchPanel data={data} isfixed={isFixed ? 1 : 0}/>
            </NavBar>
            <Box pt={{base: "75px", md: "60px"}}>
                <Component {...pageProps}/>
            </Box>
            <Footer/>
            <ScrollUpButton style={{width: 50,borderRadius: "100%"}} ToggledStyle={{borderRadius: "100%", padding: 10, background: 'red', outline: 'none'}} />
        </ChakraProvider>
        //  </SWRConfig>
        // // </CacheProvider>
    )
}

export default MyApp
