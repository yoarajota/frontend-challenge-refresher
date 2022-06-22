import { Box, Center, Heading, useTimeout } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function Contents(props) {
    const [content, setContent] = useState();

    useEffect(() => {
        if (props.post) {
            setContent(props.data[0]);
        } else {
            setContent({
                post_content: "<div style='text-align: center; width: 100%; margin-top: 30px;'> Carregando... <div/>"
            })
        }
    }, [props.post]);

    return (
        <Box w={'100%'} position={'relative'} top={props.media ? '75px' : '100px'} zIndex={'0'} overflow={'hidden'}>
            {props.post &&
            <>
                <Heading size={'md'} textAlign={'center'} m={'30px 0 5px 0'}>
                    {content.post_title}        
                </Heading>
                <Box dangerouslySetInnerHTML={{ __html: content.post_content }} justifyContent={'center'} color={'#555555'} m={'0 auto 20px auto'} w='50%' minWidth={"310px"} />
            </>
            }
        </Box>
    )
}