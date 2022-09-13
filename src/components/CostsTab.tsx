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

import costs from "../utils/costs";
import months from "../utils/months";
import DaySelect from "./DaySelect";
import {SetStateAction, useState} from "react";

const CostsTab = () => {
    const [monthValue, setMonthValue] = useState(`${months[new Date().getMonth()].name}`)
    const [monthMaxDays, setMonthMaxDays] = useState(months[new Date().getMonth()].days)
    const [monthMinDays, setMonthMinDays] = useState(0)

    const changeMonth = (event: { target: { value: SetStateAction<string> } }) => {
        setMonthValue(event.target.value)
        months.map((month: any) => {
            if (month.name === event.target.value) {
                setMonthMaxDays(month.days)
            }
        })
    }

    const changeMinDay = (event: { target: { value: SetStateAction<number> } }) => {
        setMonthMinDays(event.target.value)
    }

    const changeMaxDay = (event: { target: { value: SetStateAction<number> } }) => {
        setMonthMaxDays(event.target.value)
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
                                <option>{month.name}</option>
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
                        <DaySelect index={monthMinDays} monthValue={monthValue} value={monthMinDays} onChange={changeMinDay} />
                        <Text>по</Text>
                        <DaySelect index={monthMaxDays - 1} monthValue={monthValue} value={monthMaxDays} onChange={changeMaxDay} />
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
                    {costs.map((cost) => {
                        if (monthValue === months[cost.date.getMonth()].name) {
                            if (cost.date.getDate() >= monthMinDays && cost.date.getDate() <= monthMaxDays) {
                                console.log(costs)
                            }
                        }

                    })}
                    <Heading
                        textAlign='left'
                        fontSize='xl'
                        color='#63b3ed'
                        p={3}
                    >
                        1221
                    </Heading>
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
                </Table>
            </TableContainer>
        </Box>
    )
}

export default CostsTab