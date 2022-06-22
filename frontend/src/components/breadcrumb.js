import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

export default function Breadcumb(display) {

    return (
        <Box opacity={display.display} transition={'0.6s'}>
            <Breadcrumb className={"lato-bold"}
                fontSize={"14px"}
                spacing='8px'
                m={"15px"}
                separator={<ChevronRightIcon color='black' />}
                color='black'
                letterSpacing={"-0.3px"}>
                <BreadcrumbItem >
                    <BreadcrumbLink href='#'
                        _hover={{
                            textDecoration: "none",
                            opacity: "0.7"
                        }}>HOME</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'
                        _hover={{
                            textDecoration: "none",
                            opacity: "0.7"
                        }}>PAGES</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'
                        _hover={{
                            textDecoration: "none",
                            opacity: "0.7"
                        }}>TRENDPAGE</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}