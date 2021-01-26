import {
    Box, Image, Heading, Divider, ListIcon,
    List, ListItem, Flex, Text, Spacer
} from "@chakra-ui/react"


const thisYear = new Date().getFullYear()
export const BottomLine = () => {
    return (
        <Flex w="100" bg="gray.700" minH='60px' color="gray.300" justifyContent="space-between" alignItems="center" px="30px">
            <Flex><Text>© PiraluxAuto  {thisYear}</Text></Flex>
            <Spacer/>
            <Flex><Text>Privacy & Policy</Text></Flex>
        </Flex>
    );
};
