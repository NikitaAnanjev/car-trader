import {ContentSection} from '@/components/ContentSection'
import {Flex, Spacer, Heading, Text, Image, Divider, Box} from "@chakra-ui/react"

export const About = ({reverse, light, smallTitle, title, text, image}) => {
    return (
        <>
            <ContentSection reverse={reverse} light={Boolean(light)}>

                <Flex direction="column" w={{sm: "100%", md: '50%'}} mb={{sm: 20, md: 0}}>
                    <Box ml={{sm: '0', md: reverse && "20%"}} maxW={{sm: '100%', md: "80%"}}>
                        <Text as="i" color="white">{smallTitle}</Text>
                        <Heading as='h2' size="lg" fontWeight='normal' color="white">{title}</Heading>
                        <Divider maxW="3rem" my={3} borderColor="red.500"/>
                        <Text color="gray.100">{text}</Text>
                    </Box>
                </Flex>

                <Spacer my={3}/>

                <Flex direction="column" w={{sm: "100%", md: '50%'}}>
                    <Image src={image} alt={title} w={'100%'}/>
                </Flex>

            </ContentSection>
        </>
    );
};

