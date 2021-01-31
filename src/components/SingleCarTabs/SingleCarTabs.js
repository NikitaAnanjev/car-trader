import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Flex,
    ListItem,
    ListIcon,
    List,
    Text,
    Button
} from "@chakra-ui/react"
import {MdInfo} from "react-icons/md";

import TextTruncate from 'react-text-truncate';
import {TableCarDetails} from "@/components/TableCarDetails";

export const SingleCarTabs = ({carDetails,data,mobile}) => {
    const [show, setShow] = React.useState(false)


    return (
        <Tabs w="100%" isFitted variant="enclosed" bg="gray.800" borderRadius="8px" colorScheme="white" isLazy>
            <TabList mb="1em">
                {mobile && <Tab borderRadius="8px 0 8x 0">Specifikacioner</Tab>}
                <Tab borderRadius="8px 0 8x 0">Beskrivelse</Tab>
                <Tab borderRadius="8px 0 8x 0">Udstyr</Tab>
            </TabList>
            <TabPanels>

                {mobile && <TabPanel>
                    <Box w="100%" bg="gray.600">
                        <TableCarDetails data={data}></TableCarDetails>
                    </Box>

                </TabPanel> }

                <TabPanel>
                    <Box>
                        {!show ? <TextTruncate
                                line={5}
                                element="p"
                                truncateText="…"
                                text={carDetails.comment}
                                style={{whiteSpace: "pre-line"}}
                            /> :
                            <Text maxW={{base: "100%"}} m="auto" whiteSpace="pre-line"> {carDetails.comment}</Text>}

                    </Box>
                    <Flex justifyContent="center">

                        <Button colorScheme="gray" mt={3} variant="outline" onClick={() => setShow(!show)}>{!show ? 'Show More' : 'Show less'}</Button>
                    </Flex>
                </TabPanel>
                <TabPanel>
                    <Box w="100%">
                        <Flex>
                            <List spacing={2} w="100%" flexDirection="column" flexWrap="wrap">
                                {carDetails.equipmentList.map((item, index) =>
                                    <ListItem w={{base: "48%", lg: "31%"}}
                                              fontSize={{base: "10px", md: "12px"}} mr="2%"
                                              key={index} float="left">
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

