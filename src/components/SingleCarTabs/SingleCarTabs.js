import {Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex, ListItem, ListIcon, List, Text} from "@chakra-ui/react"
import {MdInfo} from "react-icons/md";

export const SingleCarTabs = ({carDetails}) => {
    return (
        <Tabs isFitted variant="enclosed" bg="gray.800">
            <TabList mb="1em">
                <Tab>Beskrivelse</Tab>
                <Tab>Udstyr</Tab>
            </TabList>
            <TabPanels>
                <TabPanel >
                    <Text  maxW={{base: "100%",md: "70%"}} m="auto"> {carDetails.comment}</Text>
                </TabPanel>
                <TabPanel>
                    <Box w="100%" my={10}>
                        <Flex>
                            <List spacing={2} w="100%"  flexDirection="column" flexWrap="wrap"
                                  // maxH={{sm: "1000px", md: "900px", lg: "700px"}}

                            >
                                {carDetails.equipmentList.map((item, index) =>
                                    <ListItem  w={{base: "100%",sm: "48%", md: "48%", lg: "31%"}} mr="2%" key={index} float="left">
                                        <ListIcon as={MdInfo} color="green.500"/>
                                        {item}
                                    </ListItem>
                                )}
                            </List>
                        </Flex>
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

