import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    FormControl,
    Input,
    Textarea,
    Flex,
    Divider,
    Image,
    Heading,
    Text,
    HStack,
    Button,
    Select,
    ButtonGroup,
    useBreakpointValue,

} from "@chakra-ui/react"
import {DateInputWrap} from './styles'
import {MdRingVolume} from "react-icons/md";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import {CarImageContainer} from "@/components/Cars/SingleCarElement/styles";
import {useState} from "react";
import {TableCarDetails} from "@/components/TableCarDetails";

export const ContactForm = ({carDetails, carTitle, singlePage, buttonTitle, specificDetails, listitem}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const firstField = React.useRef()

    const isMobile = useBreakpointValue({base: true, sm: true, md: false})
    const [showForm, setShowForm] = useState(false)

    const timeToCall = [
        "En hver tid",
        "10:00 - 12:00",
        "12:00 - 14:00",
        "14:00 - 16:00",
        "17:00",
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
                (!listitem ? <Button
                            leftIcon={<MdRingVolume/>}
                            aria-label="Book this car"
                            colorScheme="green"
                            size={"md"}
                            w="100%"
                            borderRadius={0}
                            onClick={onOpen}>{'Book den bil'}</Button> :

                        <Button

                            aria-label="Book den bil"
                            colorScheme="green"
                            size={"md"}
                            w="100%"
                            h="100%"
                            borderRadius={0}
                            onClick={onOpen}><Flex transform="rotate(-90deg)"> <Box
                            mr={2}><MdRingVolume/></Box> {!isMobile && <Text>Book den bil</Text>}</Flex></Button>
                )


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
                    <DrawerContent bg="gray.800">

                        <DrawerCloseButton color="white"/>
                        <DrawerHeader bg="gray.900"
                                      color="gray.50">
                            <Heading>{showForm ? 'Bestil Opkald' : carTitle}</Heading>
                        </DrawerHeader>

                        <DrawerBody>
                            <Flex
                                direction='column'

                            >
                                {!showForm &&
                                <CarImageContainer maxW={{base: '100%'}}>
                                    <Image src={carDetails.pictures[0]}/>
                                </CarImageContainer>
                                }
                                {showForm &&

                                <Flex direction="column" w="100%" p={{base: 2, md: 5}} bg="gray.800">
                                    <Box color="white">
                                        <Heading mb={{base: 3, md: 5}} size="lg" color="gray.200">Lorem ipsum
                                            dolor.</Heading>
                                        <Text color="gray.300" mb={10} maxW={{base: "100%", md: "80%"}}>Lorem ipsum
                                            dolor sit amet,
                                            consectetur adipisicing
                                            elit. Ab accusamus ad architecto exercitationem id illum itaque
                                            necessitatibus obcaecati officia. Eius esse explicabo harum laborum maxime
                                            odio quia, quod tenetur voluptatem!</Text>
                                    </Box>

                                    <form className="contact-form" onSubmit={sendEmail} style={{width: '100%'}}>
                                        <HStack spacing="24px" mb={5}>
                                            <Box w="50%"
                                            >

                                                <Input
                                                    size="sm"
                                                    color="white"
                                                    type="text"
                                                    name="from_name"
                                                    ref={firstField}
                                                    id="from_name"
                                                    placeholder="Navn"
                                                />
                                            </Box>

                                            <Box w="50%" color="white">
                                                <FormControl>
                                                    <Input size="sm" type="email" name="email"
                                                           placeholder="email@mail.dk"/>
                                                </FormControl>
                                            </Box>
                                        </HStack>
                                        <Box color="white" mb={5}>
                                            <FormControl>

                                                <InputMask mask="+4\5 99 99 99 99" maskChar={null}>
                                                    {(inputProps) =>
                                                        <Input type="tel" {...inputProps}
                                                               name="user_phone_number"
                                                               placeholder="Telefon *"
                                                               required
                                                               size="sm"
                                                        />}
                                                </InputMask>

                                            </FormControl>
                                        </Box>
                                        <HStack spacing="24px" mb={5}>


                                            <DateInputWrap color="white" w="50%">
                                                <FormControl>
                                                    <Input size="sm" type="date" name="dateSelect"
                                                           placeholder={new Date()}/>
                                                </FormControl>
                                            </DateInputWrap>


                                            <Flex w="50%">
                                                <DateInputWrap color="white">
                                                    <FormControl id="timeToCall" color="white">
                                                        <Select color="white" placeholder="Tid" name="timeSelect"
                                                                size="sm">
                                                            {timeToCall.map((tid) =>
                                                                <option
                                                                    style={{backgroundColor: "#343f56"}}>{tid}</option>
                                                            )}
                                                        </Select>
                                                    </FormControl>

                                                </DateInputWrap>
                                            </Flex>

                                            {/*<Flex w={{base: "100%", md: "50%"}}>*/}
                                            {/*    <DateInputWrap color="white">*/}
                                            {/*        <RadioGroup defaultValue="1">*/}
                                            {/*            <Stack spacing={4} direction="row">*/}
                                            {/*                <Radio value="1">*/}

                                            {/*                    10 - 12*/}
                                            {/*                </Radio>*/}
                                            {/*                <Radio value="2">12 - 14</Radio>*/}
                                            {/*                <Radio value="3">14 - 17</Radio>*/}
                                            {/*            </Stack>*/}
                                            {/*        </RadioGroup>*/}

                                            {/*    </DateInputWrap>*/}
                                            {/*</Flex>*/}

                                        </HStack>

                                        <Input d='none' type="text" name="car_details" size="sm"
                                               defaultValue={carDetails.mileage + ',' + carDetails.year
                                               + ',' + carDetails.make}/>
                                        <Box color="white">
                                            <Textarea size="sm" id="message" name="message" placeholder="Description"/>
                                        </Box>

                                        <Box mt={5}>

                                            <Button w="100%" colorScheme="blue" type="submit">Send</Button>

                                        </Box>

                                    </form>
                                </Flex>}
                            </Flex>

                            <Divider/>


                            <Flex w="100%" py={5}>
                                <ButtonGroup variant="solid" spacing="6" w="100%">

                                    {!showForm &&
                                    <Button as="a" colorScheme="blue" w="50%" href="tel:+4560240897">Ring nu</Button>}
                                    <Button colorScheme={showForm ? 'red' : 'green'} w="50%"
                                            onClick={() => setShowForm(!showForm)}>{showForm ? 'Tilbage' : 'Bestid opkald'}</Button>
                                </ButtonGroup>
                            </Flex>
                            {!showForm &&
                            <TableCarDetails data={specificDetails}/>}
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

