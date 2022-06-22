import { Button, Center, Textarea, Text, Box } from "@chakra-ui/react";

export default function CommentBox() {
    return (
        <Box w={'100%'} textAlign={'center'}>
            <Textarea placeholder="Escreva um comentário aqui." _active={{ boxShadow: 'none' }} border={'1px solid black'}/>
            <Button borderRadius={"28px"} border={"2px solid #000000"} color={"#000000"} p={"4px  42px"} m={"15px auto 0 auto"}>
                <Text textAlign={"center"} className={"lato-bold"} fontSize={"14px"}>
                    Enviar
                </Text>
            </Button>
        </Box>
    )
}