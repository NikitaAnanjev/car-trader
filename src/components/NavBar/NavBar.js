import {useState,useCallback} from 'react'
import {Box, Flex, Image, Spacer} from "@chakra-ui/react"
import {NavBarLogo, NavBarContainer, SearchNavBar, MenuItem, ActiveIndicator, activeStroke, NavBarWrap} from './styles'

import {css} from '@emotion/react'
import Link from 'next/link'
import {DrawerBar} from "@/components/NavBar/DrawerBar/DrawerBar";
import {useScrollPosition} from '@n8tb1t/use-scroll-position'
import {useRouter} from "next/router";
import {useBreakpointValue} from "@chakra-ui/react"
import {NavDrawer} from "@/components/NavBar/NavDrawer";
import {SearchBar} from "@/components/SearchBar";


const MenuItems = ({children, href, router}) => (
    <MenuItem mt={{base: 4, md: 0}} mr={6}>
        <Link display="block" href={href ? href : '#'}>
            {children}
        </Link>
        <ActiveIndicator
            css={router.pathname === href && css` 
          
            animation: ${activeStroke} 1s ease;`}/>
    </MenuItem>
);

export const NavBar = ({children}) => {
    const [isSticky, setSticky] = useState(false);
    const isMobile = useBreakpointValue({base: true, sm: true, md: false})
    const isTablet = useBreakpointValue({base: true, md: true, lg: false})

    const [barOpen, setBarOpen] = useState(Boolean(!isMobile))

    const barOpenHandler = useCallback( () => {
        setBarOpen(!barOpen)
    },[barOpen])

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
            <NavBarContainer justifyContent="center" py={3}  position='fixed' wrap='no-wrap' minH="60px">
                {/*<NavBarContainer p={4} position={isSticky && 'fixed'} wrap={router.pathname === '/' && isSticky && 'no-wrap'}>*/}
                <NavBarWrap px={3}>
                    <Flex justifyContent="center" alignItems="center">
                        <NavDrawer/>

                        <Flex d={barOpen && isMobile ? 'none' : 'flex'} ml={{base:5, md:0}} w={{base: "130px", sm: "150px", lg:"200px"}}>
                            <NavBarLogo>
                                <Link href="/">
                                    <Image src="/piralux-logo.png" alt="piralux-auto-aalborg-bilcenter" width="100%"/>
                                </Link>
                            </NavBarLogo>
                        </Flex>
                    </Flex>


                    {!isMobile &&
                    <>
                        <Flex direction="row" maxW='100%' grow={1} ml={10}>
                             <SearchBar marginRight="25px" barOpen={true}/>
                            {/*{!isTablet && <SearchBar marginRight="20px" barOpen={true}/>}*/}
                            <Flex
                                justifyContent="flex-end"
                                width={{base: "100%", md: "auto"}}
                                alignItems="center"
                                flexGrow={1}
                            >
                                <MenuItems router={router} href="/">Forside</MenuItems>
                                <MenuItems router={router} href="/udstyr">UDSTYR</MenuItems>
                                <MenuItems router={router} href="/omos">OmOs</MenuItems>
                            </Flex>
                            <Flex>

                                <DrawerBar/>
                            </Flex>
                        </Flex>
                    </>
                    }


                    {isMobile && <Flex grow={1} ml={6} justifyContent="flex-end">
                        <SearchBar marginRight={5} barOpen={barOpen} barOpenHandler={barOpenHandler}/>
                        <DrawerBar/>
                    </Flex>}

                </NavBarWrap>
                {isTablet && router.pathname === '/' && isSticky &&
                <Flex justifyContent="flex-end" px={3} pt={3} w="100%">
                    <Flex justifyContent="flex-end" grow={1}>

                      <SearchNavBar maxW="100%">{children}</SearchNavBar>


                        {/*{!barOpen && <SearchNavBar maxW="100%" mr={5}>{children}</SearchNavBar>}*/}
                        {/*<SearchBar maxWidth="50%" barOpen={barOpen} barOpenHandler={barOpenHandler}/>*/}

                    </Flex>

                </Flex>
                }
            </NavBarContainer>
        </>


    );
};

