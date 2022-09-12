import {
    Box, Container,
    Heading, Select,
    Stat, StatHelpText,
    StatLabel, StatNumber,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td, Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";

import months from "../utils/months";
import {SetStateAction, useState} from "react";
import {days30} from "../utils/days";
import DaySelect from "./DaySelect";

const CostsTab = () => {
    const [monthValue, setMonthValue] = useState(`${months[new Date().getMonth()]}`)

    const changeMonth = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMonthValue(event.target.value)
    }

    return (
        <Box
            w='100%'
            display='flex'
            flexDir='column'
            gap={5}
        >
            <Box
                m={0}
                width='100%'
                display='flex'
                flexDir='row'
                justifyContent='space-between'
                gap={5}
            >
                <Container
                    display='flex'
                    flexDir='column'
                    alignItems='flex-start'
                >
                    <Select
                        size='md'
                        w='2xs'
                        placeholder={monthValue}
                        onChange={changeMonth}
                    >
                        {months.map((month) => {
                            return(
                                <option>{month}</option>
                            )
                        })}
                    </Select>
                    <Container
                        display='flex'
                        flexDir='row'
                        gap={2}
                        justifyContent='flex-start'
                        alignItems='center'
                        p={0}
                        mt={2}
                    >
                        <Text>с</Text>
                        <DaySelect array={days30} default={days30[0]} />
                        <Text>по</Text>
                        <DaySelect array={days30} default={days30[29]} />
                    </Container>
                </Container>
                <Container
                    w='100%'
                    display='flex'
                    flexDir='column'
                    alignItems='flex-end'
                    maxW='none'
                >
                    <Stat
                        display='flex'
                        textAlign='right'
                        gap={3}
                        flex='none'
                    >
                        <StatLabel>Траты за месяц</StatLabel>
                        <StatNumber>₽0.00</StatNumber>
                    </Stat>

                </Container>
            </Box>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Расходы</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Категория</Th>
                            <Th>Название</Th>
                            <Th isNumeric>Сумма</Th>
                        </Tr>
                    </Thead>
                    <Heading
                        textAlign='left'
                        fontSize='xl'
                        color='#63b3ed'
                        p={3}
                    >1 Сентября</Heading>
                    <Tbody>
                        <Tr>
                            <Td>Развлечения</Td>
                            <Td>Кафе</Td>
                            <Td isNumeric>1500 ₽</Td>
                        </Tr>
                        <Tr>
                            <Td>Еда</Td>
                            <Td>Пирожок</Td>
                            <Td isNumeric>50 ₽</Td>
                        </Tr>
                    </Tbody>
                    <Heading
                        textAlign='left'
                        fontSize='xl'
                        color='#63b3ed'
                        p={3}
                    >5 Сентября</Heading>
                    <Tbody>
                        <Tr>
                            <Td>Медицина</Td>
                            <Td>Пересадка мозга</Td>
                            <Td isNumeric>35 000 ₽</Td>
                        </Tr>
                    </Tbody>
                    {/*<Tfoot>*/}
                    {/*    <Tr>*/}
                    {/*        <Th>Категория</Th>*/}
                    {/*        <Th>Название</Th>*/}
                    {/*        <Th isNumeric>Сумма р.</Th>*/}
                    {/*    </Tr>*/}
                    {/*</Tfoot>*/}
                </Table>
            </TableContainer>
        </Box>
    )
}

export default CostsTab