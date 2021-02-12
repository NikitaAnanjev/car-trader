import {FooterContainer, FooterItem, Overflow} from './styles'

import {
    Box, Image, Text, Heading, Divider, ListIcon,
    List, ListItem, Flex
} from "@chakra-ui/react"
import {
    MdPermPhoneMsg,
    MdLocationOn,
    MdEmail,
    MdAccountBalance,
    MdCardMembership,
    MdCardTravel,
    MdInfo,

} from "react-icons/md";

import {BottomLine} from "@/components/Footer/BottomLine";
import {WorkingHours} from "@/components/WorkingHours";
import {PreFooter} from "@/components/Footer/PreFooter";

export const Footer = () => {


    return (
        <>


            <FooterContainer w="100%" direction={{sm: "column", md: "row"}} p={{sm: "3rem 0", md: '4rem'}}>
                <Overflow/>


                <FooterItem basis={{sm: "100%", md: "50%", lg: "25%"}}>
                    <Image mt="-35px" src="/piralux-logo.png" alt="piralux-auto-logo" w="100%"/>
                    <Divider/>
                    <Box py={5} maxW="90%">
                        <Text>Piralux Automobiler har specialiseret sig indenfor import, salg og leasing af biler i
                            luksusklassen fra Tyskland.</Text>
                    </Box>


                </FooterItem>


                <FooterItem basis={{sm: "100%", md: "50%", lg: "25%"}}>
                    <Heading as='h3' size="md" fontWeight='normal'> KONTAKT</Heading>
                    <Divider maxW="3rem" my={3} borderColor="red.500"/>
                    <List spacing={3}>

                        <ListItem>
                            <ListIcon as={MdLocationOn} color="red.500"/>
                            Piralux Automobiler A/S Ferslevvej 1 9230 Svenstrup
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdPermPhoneMsg} color="red.500"/>
                            +45 60 24 08 97
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdEmail} color="red.500"/>
                            info@piraluxauto.dk
                        </ListItem>
                    </List>
                </FooterItem>


                <FooterItem basis={{sm: "100%", md: "50%", lg: "25%"}}>
                    <Heading as='h3' size="md" fontWeight='normal'> ØKONOMISK INFORMATION</Heading>
                    <Divider maxW="3rem" my={3} borderColor="red.500"/>
                    <List spacing={3}>

                        <ListItem>
                            <ListIcon as={MdCardTravel} color="red.500"/>
                            CVR: 36534826
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdAccountBalance} color="red.500"/>
                            Bank: Sparekassen Kronjylland
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCardMembership} color="red.500"/>
                            <span>Reg. 9323</span>
                            <span>Konto. 0012116403</span>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdInfo} color="red.500"/>
                            <span>IBAN: DK1393230012116403 </span>
                            <br/>
                            <span>Swiftadresse: KRONDK22</span>
                        </ListItem>
                    </List></FooterItem>

                <FooterItem basis={{sm: "100%", md: "50%", lg: "25%"}}>
                    <Heading as='h3' size="md" fontWeight='normal'>ÅBNINGSTIDER</Heading>
                    <Divider maxW="3rem" my={3} borderColor="red.500"/>
                    <WorkingHours/>
                </FooterItem>
                <Divider/>
                <BottomLine/>
            </FooterContainer>

            <PreFooter/>

        </>
    );
};
