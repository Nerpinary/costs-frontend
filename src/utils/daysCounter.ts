import {days28, days30, days31} from "./days";

const daysCounter = (array: number[] | any[], monthValue: string) => {
    if (monthValue === 'Январь' ||
        monthValue === 'Март' ||
        monthValue === 'Май' ||
        monthValue === 'Июль' ||
        monthValue === 'Август' ||
        monthValue === 'Октябрь' ||
        monthValue === 'Декабрь'
    ) {
        for (let i = 0; i < days31.length; i++) {
            array[i] = days31[i]
        }
    } else if (monthValue === 'Февраль') {
        for (let i = 0; i < days28.length; i++) {
            array[i] = days28[i]
        }
    } else {
        for (let i = 0; i < days30.length; i++) {
            array[i] = days30[i]
        }
    }
}

export default daysCounter