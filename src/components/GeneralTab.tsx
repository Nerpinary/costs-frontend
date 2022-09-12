import {Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue} from "@chakra-ui/react";
import CostsTab from "./CostsTab";

const GeneralTab = () => {
    return (
        <Box
            w='100%'
            display='flex'
            flexDir='column'
            alignItems='flex-end'
        >
            <Tabs
                align='end'
                variant='enclosed'
                w='100%'
                borderColor={useColorModeValue('dark', 'light')}
            >
                <TabList>
                    <Tab>Расходы</Tab>
                    <Tab>Доходы</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <CostsTab />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default GeneralTab