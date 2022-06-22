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
import { BsFillPersonFill } from "react-icons/bs";

export default function Register(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()

    return (
        <>
            {props.type == 2 &&
                <Box _hover={{ cursor: 'pointer', opacity: '0.6' }} transition={'0.6s'} m={'-5px 4px 0 15px'} onClick={onOpen}>
                    <BsFillPersonFill size={'35px'} />
                </Box>
            }

            {props.type != 2 && <Center opacity={props.display} position={'absolute'} onClick={onOpen} transition={'0.6s'} right={'20px'} top={'27px'} _hover={{ cursor: 'pointer', opacity: '0.6' }}>
                <Text className="lato" p={'5px'}>
                    Cadastre-se
                </Text>
                <BsFillPersonFill size={'35px'} />
            </Center>
            }

            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Cadastre-se agora!
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    placeholder='Insira um e-mail válido.'
                                />
                            </Box>

                            <Box>
                                <FormLabel>Senha</FormLabel>
                                <Input
                                    placeholder='Insira uma senha segura.'
                                />
                            </Box>

                            <Box>
                                <Input
                                    placeholder='Repita a senha'
                                />
                            </Box>

                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button colorScheme='blue'>Enviar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}