import {
    Text,
    Image,
    Box,
    Center,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    InputGroup,
    FormLabel,
    Select,
    Input,
    InputLeftAddon,
    InputRightAddon,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GiDaggerRose } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";
import Logo from "../../img/Logo.png";


export default function Menu(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            {props.type == 2 &&
                <Box _hover={{ cursor: 'pointer', opacity: '0.6' }} transition={'0.6s'} m={'-5px 15px 0 4px'} onClick={onOpen}>
                    <FiMenu size={'35px'} />
                </Box>
            }

            {props.type != 2 && <Center opacity={props.display} position={'absolute'} ref={btnRef} onClick={onOpen} transition={'0.6s'} left={'15px'} top={'27px'} _hover={{ cursor: 'pointer', opacity: '0.6' }}>
                <FiMenu size={'35px'} />
            </Center>
            }
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Box display={'flex'} marginTop={'15px'} _hover={{ opacity: "0.6", cursor: 'pointer' }}>
                            <ImHome size={'35px'} />
                            <Text className="lato-bold" fontSize={'22px'} marginLeft={'25px'}>Inicio</Text>
                        </Box>
                        <Box display={'flex'} marginTop={'15px'} _hover={{ opacity: "0.6", cursor: 'pointer' }}>
                            <FaCoffee size={'35px'} />
                            <Text className="lato-bold" fontSize={'22px'} marginLeft={'25px'}>Conteúdos</Text>
                        </Box>
                        <Box display={'flex'} marginTop={'15px'} _hover={{ opacity: "0.6", cursor: 'pointer' }}>
                            <BsPeopleFill size={'35px'} />
                            <Text className="lato-bold" fontSize={'22px'} marginLeft={'25px'}>Clientes</Text>
                        </Box>
                        <Box display={'flex'} marginTop={'15px'} _hover={{ opacity: "0.6", cursor: 'pointer' }}>
                            <MdOutlineLocalGroceryStore size={'35px'} />
                            <Text className="lato-bold" fontSize={'22px'} marginLeft={'25px'}>Store</Text>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Image src={Logo} />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}