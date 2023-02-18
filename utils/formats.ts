import Numeral from "numeral";
import moment from 'moment';
import 'moment/locale/es';

export const getDateLabel = (date: string | Date) => {
    const momentDate = moment(date);
    return `${momentDate.format("d")} de ${momentDate.format("MMMM, YYYY")}`;
}

export const getFormattedPoints = (points: number, format = "0,0") => {
    return Numeral(points).format(format);
}
