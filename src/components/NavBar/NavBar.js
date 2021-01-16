import {useState} from 'react'
import {Box, Flex, Image, Spacer} from "@chakra-ui/react"
import {NavBarLogo, NavBarContainer, SearchNavBar} from './styles'
import Link from 'next/link'
import {DrawerBar} from "@/components/NavBar/DrawerBar/DrawerBar";
import {useScrollPosition} from '@n8tb1t/use-scroll-position'
import {useRouter} from "next/router";

const MenuItems = ({children, href}) => (
    <Box mt={{base: 4, md: 0}} mr={6}>
        <Link display="block" href={href ? href : '#'}>
            {children}
        </Link>
    </Box>
);

export const NavBar = ({children}) => {

    const [isSticky, setSticky] = useState(false);


    useScrollPosition(({prevPos, currPos}) => {

        if (currPos.y < -410) {
            setSticky(true)
        } else {

            setSticky(false)
        }

    })
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    const router = useRouter()



    return (
        <>
            <NavBarContainer p={4} position={isSticky && 'fixed'} wrap={{sm: 'wrap', md: "no-wrap"}}>

                <Flex mr={5}>
                    <NavBarLogo>
                        <Link href="/">
                            <Image src="/piralux-logo.png" alt="piralux-auto-aalborg-bilcenter" width="100%"/>
                        </Link>
                    </NavBarLogo>
                </Flex>
                <Box display={{base: "flex", md: "none"}} onClick={handleToggle}>
                    <svg
                        fill="white"
                        width="30px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </Box>

                <Spacer/>
                {router.pathname === '/' && isSticky && <SearchNavBar>{children}</SearchNavBar>}
                <Spacer/>
                <Flex direction="row" w='30%'>
                    <Flex
                        justifyContent="flex-end"
                        display={{sm: "none", md: "flex"}}
                        width={{sm: "full", md: "auto"}}
                        alignItems="center"
                        flexGrow={1}
                    >

                        <MenuItems href="/udstyr">UDSTYR</MenuItems>
                        <MenuItems href="/omos">OmOs</MenuItems>
                    </Flex>

                    <Flex
                        position={{sm: show ? "absolute" : ""}}
                        display={{sm: show ? "block" : "none", md: "flex"}}
                        mt={{base: 4, md: 0}}
                        alignItems="center"

                    >

                        <DrawerBar/>
                    </Flex>

                </Flex>

            </NavBarContainer>

        </>
    );
};

