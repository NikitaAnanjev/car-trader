import { Box, Image, Badge,Flex  } from "@chakra-ui/react"
export const CustomCardSlide = ({meta, image,header}) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={image} alt={header} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {meta} beds &bull;
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {header}
                </Box>

                <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                    </Box>
                </Box>


            </Box>
        </Box>
    );
};
