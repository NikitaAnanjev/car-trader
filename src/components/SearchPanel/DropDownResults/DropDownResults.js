import {
    Box,
    Flex,
    Text,
    Image,
    Heading
} from "@chakra-ui/react"
import Link from "next/link";
import slugify from "react-slugify";

export const DropDownResults = ({finalResult, onClickLink}) => {
    const slugLink = (value) => {
        return slugify(value)
    }
    return (
        <Flex position="absolute" borderRadius="0 0 8px 8px" overflow="hidden" top="40px" bg="gray.800"
              w="100%" direction="column"
              onClick={onClickLink}
        >
            {finalResult.map((car) =>

                <Link href="/cars/[make]/[slug]/[id]"
                      as={`/cars/${slugLink(car['Make'])}/${slugLink(car['Make'] + ' ' + car['Model'] + ' ' + car['Year'])}/${car['Id']}`}>
                    <Flex _hover={{background: "gray.700", cursor: "pointer"}}  _active={{background: "red.700", cursor: "pointer"}} borderBottom="1px solid #25394c"
                          justifyContent="space-between" p={3}>
                        <Text fontWeight="300" size="xs" color="white" mr={2}>{car['Make'] + ' ' + car['Model']}</Text>
                        <Text>{car['Year']}</Text>
                    </Flex>
                </Link>
            )}

        </Flex>
    );
};
