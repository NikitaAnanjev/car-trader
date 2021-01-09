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
    Divider
} from "@chakra-ui/react"
import TextTruncate from 'react-text-truncate';
import ReactPlayer from 'react-player'
export const EquipmentItem = ({title, text, header, url, img}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Box  onClick={onOpen} maxW="lg"  borderRadius="xs" overflow="hidden" m={5}  bg="gray.800" color="white">
            <Image src={`/udstyr/${img}`}/>
            <Box p="6">
                <Heading size="md" mb={3}>{title}</Heading>
                <Text size="md">{header}</Text>

                <TextTruncate
                    line={1}
                    element="Text"
                    truncateText="…"
                    text={text}
                    textTruncateChild={<Button color="gray.800" onClick={onOpen} mt={3}>Læs mere</Button>}
                />
            </Box>


            {/*{url}*/}
        </Box>

          <Modal isOpen={isOpen} onClose={onClose} w="100%"  size="full">
              <ModalOverlay />
              <ModalContent maxW='45%' p="5">
                  <ModalHeader>

                      <Heading size="md" my={5}>{header}</Heading>
                      <Divider/>
                      <Heading size="lg">{title}</Heading>


                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>

                      <ReactPlayer url={url} width="100%"/>


                      <Text mt={5}>{text}</Text>
                  </ModalBody>

                  <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                      </Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>

          </>
    );
};


