import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';
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
    Button,
    FormHelperText,
    Input,
    Textarea,
    Flex,
    IconButton,
    Image,
    Heading
} from "@chakra-ui/react"

import {MdDirectionsCar} from "react-icons/md";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import {CarImageContainer} from "@/components/Cars/SingleCarElement/styles";

export const ContactForm = ({carDetails, carTitle}) => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const firstField = React.useRef()

    const sendEmail = (e) => {
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
            <Button leftIcon={<MdDirectionsCar/>}
                    rightIcon={<ArrowForwardIcon/>}
                    variant="link"
                    color="white"
                    aria-label="Book this car"
                    colorScheme="green" onClick={onOpen}> Bestil</Button>
            <Drawer
                isOpen={isOpen}
                size='full'
                placement="top"
                initialFocusRef={firstField}
                onClose={onClose}
                scrollBehavior="inside"
            >
                <DrawerOverlay>
                    <DrawerContent>

                        <DrawerCloseButton/>
                        <DrawerHeader borderBottomWidth="1px">
                            <Heading>{carTitle}</Heading>
                        </DrawerHeader>

                        <DrawerBody>
                            <Flex direction={{base: 'column', md: 'row'}} bg="gray.700">
                                <Flex w={{base: '100%', md: "350px"}} p={6} bg="gray.800">
                                    <form className="contact-form" onSubmit={sendEmail} style={{width: '100%'}}>
                                        <Stack spacing="24px">
                                            <Box>
                                                <FormLabel color="white" htmlFor="from_name">Name</FormLabel>
                                                <Input
                                                    color="white"
                                                    type="text"
                                                    name="from_name"
                                                    ref={firstField}
                                                    id="from_name"
                                                    placeholder="Please enter user name"
                                                />
                                            </Box>

                                            <Box color="white">
                                                <FormControl>
                                                    <FormLabel>Email address</FormLabel>
                                                    <Input type="email" name="email"/>
                                                    <FormHelperText>We'll never share your email.</FormHelperText>
                                                </FormControl>
                                            </Box>

                                            <Box color="white">
                                                <FormControl>
                                                    <FormLabel htmlFor="user_phone_number">Phone Number</FormLabel>

                                                    <InputMask mask="+4\5 99 99 99 99" maskChar={null}>
                                                        {(inputProps) => <Input type="tel" {...inputProps}
                                                                                name="user_phone_number"/>}
                                                    </InputMask>

                                                    <FormHelperText>Please insert your phone number</FormHelperText>
                                                </FormControl>
                                            </Box>


                                            <Input d='none' type="text" name="car_details"
                                                   value={carDetails.mileage + ',' + carDetails.year
                                                   + ',' + carDetails.make}/>
                                            <Box color="white">
                                                <FormLabel htmlFor="message">Description</FormLabel>
                                                <Textarea id="message" name="message"/>
                                            </Box>

                                            <Box>

                                                <Button w="100%" colorScheme="blue" type="submit">Submit</Button>

                                            </Box>
                                        </Stack>
                                    </form>
                                </Flex>
                                <CarImageContainer maxW={{base: '100%'}}>
                                    <Image src={carDetails.pictures[0]}/>
                                </CarImageContainer>
                            </Flex>


                            {/*<Flex p={6}>*/}
                            {/*    <Box color="white">*/}
                            {/*        <p> {carDetails.mileage}</p>*/}
                            {/*        <p> {carDetails.year}</p>*/}
                            {/*        <p> {carDetails.make}</p>*/}
                            {/*    </Box>*/}
                            {/*</Flex>*/}
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                        </DrawerFooter>

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

