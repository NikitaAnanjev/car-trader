import {Box, Flex, Heading, IconButton, Text,Link} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";

export const ContactInfo = () => {
    return (
        <>  <Box>
            <Heading>Piralux Auto ApS</Heading>
            <Text size="xxl">Vi importerer Tyske biler i høj standard, så Du kan være sikker
                på, at det faktisk er ren Luksus når Du sætter dig bag rattet</Text>

            <Flex direction='row' alignItems="center" mt={10}>
                <IconButton as={Link}
                    href="tel:+4560240897"
                    colorScheme="green"
                    aria-label="RingOs"
                    size="lg"
                    icon={<PhoneIcon/>}
                    mr={3}
                />
                <Heading size="lg"> +45 60 24 08 97</Heading>
            </Flex>
            <Flex direction='row' alignItems="center" mt={5}>
                <IconButton
                    size="lg"
                    colorScheme="red"
                    aria-label="Send email"
                    icon={<EmailIcon/>}
                    mr={3}
                />
                <Heading size="lg"> info@piraluxauto.dk</Heading>
            </Flex>

        </Box>


        </>
    );
};

