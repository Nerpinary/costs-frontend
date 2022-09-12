import * as React from "react"
import {
    ChakraProvider,
    Box,
    theme, Container,
} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import InfoBar from "./components/InfoBar";
import GeneralTab from "./components/GeneralTab";

export const App = () => (
  <ChakraProvider theme={theme}>
      <Navbar />
        <Box textAlign="center"
             fontSize="lg"
             w='100%'
             display='flex'
             flexDir='column'
             alignItems='center'
        >
            <Box
                mt={20}
                display='flex'
                flexDir='row'
                justifyContent='space-between'
                w='8xl'
                gap={5}
            >
                <InfoBar />
                <GeneralTab />
            </Box>
        </Box>
  </ChakraProvider>
)
