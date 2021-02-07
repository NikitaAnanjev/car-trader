import {Equipments} from "../src/pages/Equipments";
import {SubPageBanner} from "@/components/SubPageBanner";
import {Divider, Flex, Heading, Text} from "@chakra-ui/react";

const Udstyr = () => {
    return (
        <>
            <SubPageBanner>
                <Flex bg="#edf2f785" wrap="wrap" p={10}>
                    <Flex direction="column" mr={10}>
                        <Heading color="red.500">UDSTYR</Heading>
                        <Divider maxW="3rem" my={3} borderColor="red.500"/>
                    </Flex>
                    <Text fontWeight="700" maxW={{base: "100%", md: "60%"}} color="gray.800"> Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. </Text>
                </Flex>
            </SubPageBanner>
            <Equipments/>
        </>
    );
};

export default Udstyr;
