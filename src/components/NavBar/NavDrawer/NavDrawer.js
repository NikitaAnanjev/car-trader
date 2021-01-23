import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex, Text, Box,
    List, ListItem, ListIcon
} from "@chakra-ui/react"
import {useDisclosure} from "@chakra-ui/react"
import {useRouter} from "next/router";
import {MenuItemChakra} from "@/components/NavBar/NavDrawer/styles";
import Link from "next/link";


// const MenuItems = ({ href,children}) =>  (
//         <MenuItemChakra isActive={Boolean(router.pathname === href)}><Link href={href ? href : '#'} >   {children} </Link></MenuItemChakra>
//     )



export const NavDrawer = () => {
    const router = useRouter()

    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()



    return (
        <>
            <Box display={{base: "block", md: "none"}} ref={btnRef} onClick={onOpen}>
                <svg
                    fill="white"
                    width="25px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </Box>

            <Drawer
                isOpen={isOpen}
                size="md"
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerOverlay>
                    <DrawerContent
                        bg="gray.900"
                        maxW="350px"
                    >
                        <DrawerCloseButton  color='gray.200'/>
                        <DrawerHeader color='gray.200' bg="gray.800">Menu</DrawerHeader>

                        <DrawerBody color="white" p="0">
                            <List>
                                <ListItem>     <MenuItemChakra active={Boolean(router.pathname === '/') } onClick={onClose}><Link href='/' >  Home </Link></MenuItemChakra></ListItem>
                                <ListItem>     <MenuItemChakra active={Boolean(router.pathname === '/udstyr')} onClick={onClose}><Link href='/udstyr' >  Udstyr </Link></MenuItemChakra></ListItem>
                                <ListItem>     <MenuItemChakra active={Boolean(router.pathname === '/omos')} onClick={onClose}><Link href='/omos' >  OmOs </Link></MenuItemChakra></ListItem>

                            </List>
                        </DrawerBody>

                        <DrawerFooter>

                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>
    );
};
