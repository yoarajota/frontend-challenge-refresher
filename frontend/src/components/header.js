import { AddIcon } from "@chakra-ui/icons";
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
import { useEffect, useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Logo from "../img/Logo.png";
import Breadcumb from "./breadcrumb";
import Menu from "./drawers/menu";
import Register from "./drawers/register";



export default function Header(props) {
    const [display, setDisplay] = useState("block");
    const [shrink, setShrink] = useState(false);
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()
    const btnRef = useRef()

    useEffect(() => {
        if (props.opacity != 1) {
            setDisplay(0);
            setShrink(true);
        } else {
            setDisplay(1);
            setShrink(false);
        }
    }, [props]);

    return (
        <>
            <Box backgroundColor={`rgba(255, 221, 0, ${props.opacity})`} borderBottom={"1px solid rgba(0, 0, 0, 0.3)"} h={props.media ? "90px" : (shrink ? "70px" : "130px")} p={"12px 0"} textAlign={'center'} justifyContent={'center'} verticalAlign={"middle"} position={"fixed"} w={'100%'} transition={'0.6s'} zIndex={'5'}>
                <Image minH={'28px'} maxH={'35px'} height={"8vw"} m={"auto"} src={Logo} />
                <Breadcumb display={display} />

                {!props.media && <Center display={shrink ? "none" : "flex"}>
                        <Menu type={2}/>
                        <Register type={2}/>
                </Center>
                }

                {props.media && <Register display={display} />
                }

                {props.media && <Menu display={display}></Menu>
                }

            </Box> 
        </>
    )
}