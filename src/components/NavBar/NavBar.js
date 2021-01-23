import {useState} from 'react'
import {Box, Flex, Image} from "@chakra-ui/react"
import {NavBarLogo, NavBarContainer, SearchNavBar} from './styles'
import Link from 'next/link'
import {DrawerBar} from "@/components/NavBar/DrawerBar/DrawerBar";
import {useScrollPosition} from '@n8tb1t/use-scroll-position'
import {useRouter} from "next/router";
import {useBreakpointValue} from "@chakra-ui/react"
import {NavDrawer} from "@/components/NavBar/NavDrawer";

const MenuItems = ({children, href}) => (
    <Box mt={{base: 4, md: 0}} mr={6}>
        <Link display="block" href={href ? href : '#'}>
            {children}
        </Link>
    </Box>
);

export const NavBar = ({children}) => {

    const [isSticky, setSticky] = useState(false);
    const isMobile = useBreakpointValue({base: true,sm: true, md: false})

    useScrollPosition(({prevPos, currPos}) => {
        if (currPos.y < -410) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    })
    const router = useRouter()


    return (
        <>
            <NavBarContainer p={4} position={isSticky && 'fixed'} wrap={router.pathname === '/' && isSticky && 'no-wrap'}>

                <NavDrawer/>
                <Flex  width={{base: "50%", md: "200px"}}>
                    <NavBarLogo >
                        <Link href="/">
                            <Image src="/piralux-logo.png" alt="piralux-auto-aalborg-bilcenter" width="100%"/>
                        </Link>
                    </NavBarLogo>
                </Flex>

                {!isMobile && router.pathname === '/' && isSticky && <SearchNavBar bg="gray.400">{children}</SearchNavBar>}
                {!isMobile &&
                <Flex direction="row" maxW='30%'>
                    <Flex
                        justifyContent="flex-end"

                        width={{base: "100%", md: "auto"}}
                        alignItems="center"
                        flexGrow={1}
                    >

                        <MenuItems href="/udstyr">UDSTYR</MenuItems>
                        <MenuItems href="/omos">OmOs</MenuItems>
                    </Flex>

                    <Flex>
                        <DrawerBar/>
                    </Flex>
                </Flex>
                }
                {isMobile &&
                <Flex>
                    <DrawerBar/>
                </Flex>}

                {/*{  router.pathname === '/' && isSticky && <SearchNavBar bg="gray.400">{children}</SearchNavBar>}*/}
            </NavBarContainer>
        </>
    );
};

