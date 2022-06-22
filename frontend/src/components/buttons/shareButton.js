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
    Image,
    Center
} from '@chakra-ui/react'

import { FaBluetooth, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Logo from '../../img/Logo.png'


export default function ShareButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Center>
                <Button onClick={onOpen} borderRadius={"28px"} border={"2px solid #000000"} color={"#000000"} p={"7px  22px"} m={"15px 0"}>
                    <Text textAlign={"center"} className={"lato-bold"} fontSize={"18px"}>
                        Compartilhe!
                    </Text>
                </Button>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Compartilhe em</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display={'flex'} justifyContent={"space-around"}>
                            <FaTwitter size={"35px"} />
                            <FaFacebook size={"35px"} />
                            <FaWhatsapp size={"35px"} />
                        </Box>
                    </ModalBody>

                    <ModalFooter justifyContent={"center"}>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}