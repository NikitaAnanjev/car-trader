
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
    FormHelperText,
    Input,
    Textarea,
    Flex,
    IconButton,
    Image,
    Heading,
    Text,
    HStack,
    Button,
    Select,
    ButtonGroup,
    Spacer, useBreakpointValue
} from "@chakra-ui/react"
import {DateInputWrap} from './styles'
import {MdRingVolume} from "react-icons/md";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import {CarImageContainer} from "@/components/Cars/SingleCarElement/styles";
import {useState} from "react";


export const ContactForm = ({carDetails, carTitle, singlePage, buttonTitle}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const firstField = React.useRef()

    const isMobile = useBreakpointValue({base: true,sm: true, md: false})
    const [showForm, setShowForm] = useState(false)

    const timeToCall = [
        "En hver tid",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",

    ]




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

            {singlePage ? <Button
                    leftIcon={<MdRingVolume/>}
                    aria-label="Book this car"
                    colorScheme="white"
                    variant="outline"
                    size={"md"}
                    onClick={onOpen}>{buttonTitle ? buttonTitle : 'Bestil opkald'}</Button>
                :
                <Button
                    leftIcon={<MdRingVolume/>}
                    aria-label="Book this car"
                    colorScheme="green"
                    size={"md"}
                    w="100%"
                    borderRadius={0}
                    onClick={onOpen}>{ 'Book den bil' }</Button>
            }
            <Drawer
                isOpen={isOpen}
                size='lg'
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
                scrollBehavior="inside"
            >
                <DrawerOverlay>
                    <DrawerContent bg={showForm ? 'gray.800' : "gray.200"} >

                        <DrawerCloseButton/>
                        <DrawerHeader borderBottomWidth="1px" color={showForm && 'gray.50'}>
                            <Heading>{carTitle}</Heading>
                        </DrawerHeader>

                        <DrawerBody>
                            <Flex
                                direction='column'
                                bg="gray.700">
                                {!showForm &&
                                <CarImageContainer  maxW={{base: '100%'}}>
                                    <Image src={carDetails.pictures[0]}/>
                                </CarImageContainer>
                                }
                                {showForm &&  <Flex w="100%" p={5} bg="gray.800">
                                    <form className="contact-form" onSubmit={sendEmail} style={{width: '100%'}}>
                                        <HStack spacing="24px">
                                            <Box
                                            >
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
                                                    {/*<FormLabel>Email address</FormLabel>*/}
                                                    <Input type="email" name="email"/>
                                                    {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
                                                </FormControl>
                                            </Box>
                                        </HStack>
                                            <Box color="white">
                                                <FormControl>

                                                    <InputMask mask="+4\5 99 99 99 99" maskChar={null}>
                                                        {(inputProps) => <Input type="tel" {...inputProps}
                                                                                name="user_phone_number"
                                                                                placeholder="Telefon #"
                                                        />}
                                                    </InputMask>

                                                </FormControl>
                                            </Box>

                                            <Flex direction={{base: "column",md: "row"}}>
                                                {/*<DateInputWrap color="white">*/}
                                                {/*    <FormControl>*/}
                                                {/*        <Input type="date" name="dateSelect" />*/}
                                                {/*    </FormControl>*/}
                                                {/*</DateInputWrap>*/}
                                                <Flex w={{base: "100%",md: "50%"}}>
                                                    <DateInputWrap color="white">
                                                    <FormControl id="timeToCall" color="white" >
                                                        <FormLabel>Country</FormLabel>
                                                        <Select placeholder="Tid" name="timeSelect">
                                                            {timeToCall.map((tid)=>
                                                                <option>{tid}</option>
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                    <Text mt={3} fontSize="12px" color="white">Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit. Deserunt, nesciunt.</Text>
                                                    </DateInputWrap>
                                                </Flex>

                                            </Flex>


                                            <Input d='none' type="text" name="car_details"
                                                   defaultValue={carDetails.mileage + ',' + carDetails.year
                                                   + ',' + carDetails.make}/>
                                            <Box color="white">
                                                <Textarea id="message" name="message" placeholder="Description"/>
                                            </Box>

                                            <Box >

                                                <Button w="100%" colorScheme="blue" type="submit">Send</Button>

                                            </Box>

                                    </form>
                                </Flex> }
                            </Flex>

                                <Flex w="100%" my={5}  p={5}>
                                    <ButtonGroup variant="solid" spacing="6" w="100%">
                                        <Button colorScheme="blue" w="50%">Ring nu</Button>
                                        <Button colorScheme="green" isDisabled={showForm} w="50%" onClick={()=> setShowForm(!showForm)}>Bestid opkald</Button>
                                    </ButtonGroup>
                                </Flex>




                            {/*<Flex p={6}>*/}
                            {/*    <Box color="white">*/}
                            {/*        <p> {carDetails.mileage}</p>*/}
                            {/*        <p> {carDetails.year}</p>*/}
                            {/*        <p> {carDetails.make}</p>*/}
                            {/*    </Box>*/}
                            {/*</Flex>*/}
                        </DrawerBody>

                        <DrawerFooter  borderTopWidth="1px">
                            <Button w="100%" variant="outline" colorScheme="red" mr={3} onClick={onClose}>
                                Tilbage
                            </Button>
                        </DrawerFooter>

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

