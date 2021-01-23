import {
    Box,
    Image,
    Text,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Divider,
    Flex
} from "@chakra-ui/react"
import TextTruncate from 'react-text-truncate';
import ReactPlayer from 'react-player'
import {FooterItem} from "@/components/Footer/styles";

export const EquipmentItem = ({title, text, header, url, img}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Box onClick={onOpen} maxW="lg" borderRadius="xs" overflow="hidden" m={5} bg="gray.700" color="white">
                <Image src={`/udstyr/${img}`}/>
                <Box p="6">
                    <Heading size="md" mb={3} color="gray.100">{title}</Heading>

                    <Divider maxW="3rem" my={3} borderColor="red.500"/>
                    <Text size="md" color="gray.200">{header}</Text>

                    <TextTruncate
                        line={1}
                        element="Text"
                        truncateText="…"
                        text={text}
                    />

                </Box>

                <Box bg="gray.800" _hover={{bg: "gray.800"}} _focuse={{bg: "gray.600"}}>
                    <Flex h="3rem" justifyContent="center" alignItems="center" onClick={onOpen}
                    >
                        <Text>Læs mere</Text>

                    </Flex>
                </Box>
            </Box>

            <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} w="100%" size="full">
                <ModalOverlay/>
                <ModalContent maxW={{base: "100%", sm: "80%", md: "70%"}} p={{base: 0, sm: 2, md: 5}}>
                    <ModalHeader>

                        <Heading size="md" my={5}>{header}</Heading>
                        <Divider/>
                        <Heading size="lg">{title}</Heading>


                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>

                        <ReactPlayer url={url} width="100%"/>


                        <Text mt={5}>{text}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button w={{base: "100%", sm: "250px"}} colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
};


