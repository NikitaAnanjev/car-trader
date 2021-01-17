
import emailjs from 'emailjs-com';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    FormHelperText,
    Input,
    Select,
    Textarea
} from "@chakra-ui/react"

import { MdDirectionsCar } from "react-icons/md";
export const ContactForm = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    const sendEmail =(e) => {
        e.preventDefault();
        emailjs.sendForm('service_6y44txc', 'service_6y44txc', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <Button leftIcon={<MdDirectionsCar />} colorScheme="teal" onClick={onOpen}>
               Get this Car
            </Button>
            <Drawer
                isOpen={isOpen}
                size='full'
                placement="top"
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay>
                    <DrawerContent>

                        <form className="contact-form" onSubmit={sendEmail}>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">
                            Create a new account
                        </DrawerHeader>

                        <DrawerBody>

                            <Stack spacing="24px">
                                <Box>
                                    <FormLabel htmlFor="username">Name</FormLabel>
                                    <Input
                                        ref={firstField}
                                        id="username"
                                        placeholder="Please enter user name"
                                    />
                                </Box>

                                <Box>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input type="email" />
                                        <FormHelperText>We'll never share your email.</FormHelperText>
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor="owner">Select Owner</FormLabel>
                                    <Select id="owner" defaultValue="segun">
                                        <option value="segun">Segun Adebayo</option>
                                        <option value="kola">Kola Tioluwani</option>
                                    </Select>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor="desc">Description</FormLabel>
                                    <Textarea id="desc" />
                                </Box>
                            </Stack>

                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="blue" type="submit">Submit</Button>
                        </DrawerFooter>
                    </form>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

