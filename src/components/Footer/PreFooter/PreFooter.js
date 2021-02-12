import {
    Box, Image, Heading, Divider, ListIcon,
    Flex, Text,Button
} from "@chakra-ui/react"
import {PreFooterContainer} from './styles'
import {MdCall} from "react-icons/md";
import {FooterItem} from "@/components/Footer/styles";

export const PreFooter = () => {
    return (
        <PreFooterContainer>
            <Flex w="100%" maxW="960px" p="3rem" justifyContent="space-between" wrap="wrap">



                <Flex>
                    <Image  borderRadius="8px"  boxShadow="dark-lg" maxW={{base: "60%", md: "100%"}} h="auto" src="/trustpilot.JPG"/>

                </Flex>

                <Flex direction="column">
                    <Heading textAling="center"> Lorem ipsum dolor.</Heading>
                    <Divider maxW="3rem" my={3} borderColor="red.100"/>
                    <Text textAling="center" color="white" maxW="400px">Carum incidunt iste labore laboriosam minus odit
                        optio quibusdam?</Text>

                    <Button  boxShadow="dark-lg" mt={10} leftIcon={<MdCall />}>Bestil Opkald</Button>

                </Flex>
            </Flex>
        </PreFooterContainer>
    );
};
