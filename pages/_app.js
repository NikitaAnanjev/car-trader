import '../styles/globals.css'
import 'react-awesome-slider/dist/styles.css';
import {ChakraProvider,extendTheme} from "@chakra-ui/react"
import {NavBar} from "@/components/NavBar";

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

const customTheme = extendTheme({ colors })




function MyApp({Component, pageProps}) {




    return    (
        <ChakraProvider  theme={customTheme}>
            <NavBar/>
            <Component {...pageProps} />
        </ChakraProvider>
    )


}

export default MyApp
