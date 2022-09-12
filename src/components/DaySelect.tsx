import {Select} from "@chakra-ui/react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

const DaySelect = (prop: { array: number[]; default: number }) => {
    return (
        <Select
            width='5xs'
            placeholder={`${prop.default}`}
        >
            {prop.array.map((item: number) => {
                return (
                    <option>{item}</option>
                )
            })}
        </Select>
    )
}

export default DaySelect