import {CarouselItem} from './styles'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text
} from "@chakra-ui/react";
import {MdPlayCircleOutline, MdKeyboardReturn} from "react-icons/md";

const CarVideo = ({video, title, price}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                mr={{base: 0, lg:3}}   mb={{base: 3, lg:0}}
                leftIcon={<MdPlayCircleOutline/>}
                aria-label="Se videoklip"
                colorScheme="white"
                variant="outline"
                size={"md"}
                onClick={onOpen}>Se Video</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent bg="gray.900" color="gray.100">
                    <ModalHeader>
                     <Text as="h2">{title}</Text>
                    <Text>{price}</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CarouselItem>
                            <iframe style={{margin: '0', height: '100%', width: '100%'}}
                                    frameBorder="0" allowFullScreen allowTransparency="true" mozallowfullscreen
                                    webkitAllowFullScreen
                                    src={video}/>
                        </CarouselItem>

                    </ModalBody>

                    <ModalFooter w="100%" justifyContent="center">
                        <Button colorScheme="orange" w="300px" leftIcon={<MdKeyboardReturn/>}  mr={3} onClick={onClose}>
                            Tilbage
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CarVideo;
