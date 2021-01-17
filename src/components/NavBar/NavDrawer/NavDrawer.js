import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex, Text, Box

} from "@chakra-ui/react"
import {useDisclosure} from "@chakra-ui/react"
export const NavDrawer = () => {


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
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>Menu</DrawerHeader>

                        <DrawerBody>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                            </ul>
                        </DrawerBody>

                        <DrawerFooter>

                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </>
    );
};
