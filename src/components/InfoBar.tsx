import {Box, useColorModeValue} from "@chakra-ui/react";
import UserInfo from "./UserInfo";

const InfoBar = () => {
    return (
        <Box
            display='flex'
            flexDir='column'
            maxW='sm'
            borderRadius='lg'
            borderColor={useColorModeValue('dark', 'light')}
            p={3}
        >
            <UserInfo />
        </Box>
    )
}

export default InfoBar