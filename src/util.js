export const months = {
    JAN: '01',
    FEB: '02',
    MAR: '03',
    APR: '04',
    MAY: '05',
    JUN: '06',
    JUL: '07',
    AUG: '08',
    SEP: '09',
    OCT: '10',
    NOV: '11',
    DEC: '12'
}

export const weekdays = {
    MON: '01',
    TUE: '02',
    WED: '03',
    THU: '04',
    FRI: '05',
    SAT: '06',
    SUN: '07'
}

export const week_total = 7
export const month_total = 12

export function getWeekdayName(weekday) {
		switch (weekday) {
				case '01': return 'MON'
				case '02': return 'TUE'
				case '03': return 'WED'
				case '04': return 'THU'
				case '05': return 'FRI'
				case '06': return 'SAT'
				case '07': return 'SUN'
                default: return ''
		}
}

export function getMonthName(month) {
		switch (month) {
				case '01': return 'JAN'
				case '02': return 'FEB'
				case '03': return 'MAR'
				case '04': return 'APR'
				case '05': return 'MAY'
				case '06': return 'JUN'
				case '07': return 'JUL' 
				case '08': return 'AUG'
				case '09': return 'SEP' 
				case '10': return 'OCT'
				case '11': return 'NOV'
				case '12': return 'DEC'
                default: return ''
		}
}

export function padZero(weekday) {
    switch (weekday) {
        case 1: return "01"
        case 2: return '02'
        case 3: return '03'
        case 4: return '04'
        case 5: return '05'
        case 6: return '06'
        case 7: return '07'
        default: return ''
    }
}

export function unpadZero(weekday) {
    switch (weekday) {
        case "01": return 1
        case '02': return 2
        case '03': return 3
        case '04': return 4
        case '05': return 5
        case '06': return 6
        case '07': return 7
        default: return 0
    }
}

export function getNumDaysForMonth(month, isLeapYear) {
    // 30 days has sep, apr, jun and nov.
    // all the rest has 31 except feb alone
    // which has 28 days clear and 29 days
    // in each leap year.
    switch(month) {
        case months.JAN: case months.MAR:
        case months.MAY: case months.JUL: case months.AUG:
        case months.OCT: case months.DEC:
            return 31
        case months.SEP: case months.APR: 
        case months.JUN: case months.NOV: 
            return 30
        case months.FEB: if (isLeapYear) { return 29 } else { return 28 }
        default: return 0

    }
}

export function getNumWeeksForMonth(month, startWeekday, isLeapYear=false) {
    let days_count = getNumDaysForMonth(month, isLeapYear)
    
    if (days_count === 31) {
        switch (startWeekday) {
            case weekdays.MON:
            case weekdays.TUE: 
            case weekdays.WED:
            case weekdays.THU:
            case weekdays.FRI:
                return 5
            case weekdays.SAT: 
            case weekdays.SUN:
                return 6
            default: return 0
        }
    } else if (days_count === 30) {
        switch (startWeekday) {
            case weekdays.MON:
            case weekdays.TUE:
            case weekdays.WED:
            case weekdays.THU:
            case weekdays.FRI:
            case weekdays.SAT:
                return 5
            case weekdays.SUN:
                return 6
            default: return 0
        }
    } else if (days_count === 28) {
        switch(startWeekday) {
            case weekdays.MON:
                return 4
            case weekdays.TUE:
            case weekdays.WED:
            case weekdays.THU:
            case weekdays.FRI:
            case weekdays.SAT:
            case weekdays.SUN:
                return 5
            default: return 0
         }
    } else {
        if (days_count === 29) {
            switch(startWeekday) {
                case weekdays.MON:
                case weekdays.TUE:
                case weekdays.WED:
                case weekdays.THU:
                case weekdays.FRI:
                case weekdays.SAT:
                    return 5
                case weekdays.SUN:
                    return 6
                default: return 0
            }
        }
    }

    return 0

}

