import {Equipments} from "../src/pages/Equipments";
import {SubPageBanner} from "@/components/SubPageBanner";
import {Divider, Flex, Heading, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

const Udstyr = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }} style={{width: "100%"}}>
            <SubPageBanner>
                <Flex bg="#d01116eb" wrap="wrap" p={10}>
                    <Flex direction="column" mr={10}>
                        <Heading color="white"> UDSTYR</Heading>
                        <Divider maxW="3rem" my={3} borderColor="red.100"/>
                    </Flex>
                    <Text fontWeight="700" maxW={{base: "100%", md: "60%"}} color="gray.100"> Lorem ipsum dolor sit
                        amet, consectetur
                        adipisicing elit. </Text>
                </Flex>
            </SubPageBanner>
            <Equipments/>
        </motion.div>
    );
};

export default Udstyr;
