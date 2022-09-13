import {Select} from "@chakra-ui/react";
import {days28, days30, days31} from "../utils/days";
import daysCounter from "../utils/daysCounter";

const DaySelect = (prop: { index: number; monthValue: string; onChange: any; value: number }) => {
    let array: any[] = []

    daysCounter(array, prop.monthValue)

    return (
        <Select
            width='5xs'
            placeholder={`${array[prop.index]}`}
            onChange={prop.onChange}
            value={prop.value}
        >
            {array.map((item: number) => {
                return (
                    <option>{item}</option>
                )
            })}
        </Select>
    )
}

export default DaySelect