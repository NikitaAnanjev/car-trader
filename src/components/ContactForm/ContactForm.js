
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
        emailjs.sendForm('service_6y44txc', 'template_3mrc3ml', e.target, 'user_6gxi4XejgEsVRHpYzh70z')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
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
                                    <FormLabel htmlFor="from_name">Name</FormLabel>
                                    <Input
                                        name="from_name"
                                        ref={firstField}
                                        id="from_name"
                                        placeholder="Please enter user name"
                                    />
                                </Box>

                                <Box>
                                    <FormControl >
                                        <FormLabel>Email address</FormLabel>
                                        <Input type="email" name="email"/>
                                        <FormHelperText>We'll never share your email.</FormHelperText>
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormControl  >
                                        <FormLabel>Phone Number</FormLabel>
                                        <Input type="tel" id="phone_number" name="phone_number" />
                                        <FormHelperText>We'll never share your email.</FormHelperText>
                                    </FormControl>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor="message">Description</FormLabel>
                                    <Textarea id="message" name="message" />
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

