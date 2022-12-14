import Logo from "./Logo";
import {
    Container,
    Box,
    Heading,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {

    return (
        <Box
            position="fixed"
            top={0}
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                flexWrap="wrap"
                textAlign="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar