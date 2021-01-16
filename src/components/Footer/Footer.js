import {FooterContainer, FooterItem} from './styles'

import {
    Box,  Image,  Text, Heading, Divider, ListIcon,
    List, ListItem
} from "@chakra-ui/react"

import {
    MdPermPhoneMsg,
    MdLocationOn,
    MdEmail,
    MdAccountBalance,
    MdCardMembership,
    MdCardTravel,
    MdInfo
} from "react-icons/md";


export const Footer = () => {
    return (
        <FooterContainer direction={{ sm: "column", md: "row"}} >

            <FooterItem basis={{ sm: "100%", md: "50%", lg: "25%"}}>
                <Image src="/piralux-logo.png"/>
                <Divider/>
                <Box p={5}>
                    <Text>Piralux Automobiler har specialiseret sig indenfor import, salg og leasing af biler i
                        luksusklassen fra Tyskland.</Text>
                </Box>
            </FooterItem>

            <FooterItem  basis={{ sm: "100%", md: "50%", lg: "25%"}}>
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
            <FooterItem  basis={{ sm: "100%", md: "50%", lg: "25%"}}>
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
            <FooterItem  basis={{ sm: "100%", md: "50%", lg: "25%"}}><Image w="80%" src="/trustpilot.JPG"/></FooterItem>
        </FooterContainer>
    );
};
