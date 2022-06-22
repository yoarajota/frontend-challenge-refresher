import {
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Tooltip,
} from '@chakra-ui/react'

export default function RelatedPostContent(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Box>
                <Tooltip label="Clique e saiba mais!">
                    <Button onClick={onOpen} fontSize={"15px"} _hover={{ backgroundColor: "transparent", fontSize: '16px' }}>
                        <Text textAlign={'center'} className={"lato"}>
                            {props.data.post_title}
                        </Text>
                    </Button>
                </Tooltip>
            </Box>


            <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={'15px'}>{props.data.post_title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody maxHeight={'400px'} overflow={'hidden'}>
                        <Box dangerouslySetInnerHTML={{ __html: props.data.post_content }}></Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button _hover={{ backgroundColor: "transparent", fontSize: '16px' }}>
                            <Text className={"lato"} fontSize={'20px'}>
                                Veja mais!
                            </Text>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}