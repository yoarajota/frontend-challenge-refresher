import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RelatedPostContent from "./relatedPostContent";


export default function RelatedContents(data) {
    const [content, setContent] = useState();

    useEffect(() => {
        if (data.post) {
            if (data.data.length > 2) {
                setContent(data.data.splice(0, 1));
            }
        } else {
            setContent({
                post_content: "<div style='text-align: center'> Carregando... <div/>"
            })
        }
    }, [data.post]);

    return (
        <Box textAlign={'center'}>
            <Box justifyContent={"space-around"} textAlign={'center'}>
                {data.data && data.data.map((item, index) => {
                    return (<RelatedPostContent data={item} key={index} />)
                })}
            </Box>
        </Box>
    )
}