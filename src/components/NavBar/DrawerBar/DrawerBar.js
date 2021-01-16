import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex, Text

} from "@chakra-ui/react"
import {ContactInfo} from './ContactInfo'

import {useDisclosure} from "@chakra-ui/react"

export const DrawerBar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button border="1px" colorScheme="red" ref={btnRef} onClick={onOpen}>
                Kontakt
            </Button>
            <Drawer
                isOpen={isOpen}
                size="xl"
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>Kontakt Os</DrawerHeader>

                        <DrawerBody>

                            <Flex direction={{sm: "column", md: "row"}} justifyContent="space-between">
                                <Flex w={{sm: "100%", md: "50%"}}>

                                    <ContactInfo/>

                                </Flex>
                                <Flex w={{sm: "100%", md: "40%"}} bg="gray.100" p="10px">
                                    <Text>
                                        <ul style={{listStyle: "none"}}>
                                            <li>CVR: <b>36534826</b></li>
                                            <li>Bank: <b>Sparekassen Kronjylland</b></li>
                                            <li>Reg. <b>9323</b></li>
                                            <li>Konto. <b>0012116403</b></li>
                                            <li>IBAN: <b>DK 1393 2300 1211 6403</b></li>
                                            <li>Swiftadresse: <b>KRONDK22</b> </li>
                                        </ul>


                                    </Text>

                                </Flex>

                            </Flex>

                            <Flex w="100%" mt={10}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.6583380382326!2d9.879128916123674!3d56.971784804785365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46493474fbc0a865%3A0xdd210feba39ec1f6!2sPiralux%20Auto%20ApS!5e0!3m2!1sru!2scz!4v1609194523015!5m2!1sru!2scz"
                                    width="100%" height="450"
                                    frameBorder="0"
                                    style={{border: 0}}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"/>
                            </Flex>
                            {/*<Input placeholder="Type here..." />*/}
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Close
                            </Button>

                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
