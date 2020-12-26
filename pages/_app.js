// import '../styles/globals.css'

import {ChakraProvider,extendTheme} from "@chakra-ui/react"

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
            <Component {...pageProps} />
        </ChakraProvider>
    )


}

export default MyApp
