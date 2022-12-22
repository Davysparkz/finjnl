/**
 *  @readonly 
 *  @enum {string}
 * */
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

/**
 *  @readonly 
 *  @enum {string}
 * */
export const weekdays = {
    MON: '01',
    TUE: '02',
    WED: '03',
    THU: '04',
    FRI: '05',
    SAT: '06',
    SUN: '07'
}

/**
 *  @constant 
 *  @type {number}
 * */
export const week_total = 7

/**
 *  @constant 
 *  @type {number}
 * */
export const month_total = 12

/**
 * @param {string} weekday - a value between the range '01'[MON] - '07'[SUN]
 * @returns `string` - the short names of weekdays 'MON' - 'SUN'
 */
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

/**
 * @param {string} month - a value between the range '01'[JAN] - '12'[DEC]
 * @returns `string` - the short names of months 'JAN' - 'DEC'
 */
export function getMonthName(month) {
    // todo: work on this to stop adding extra one month
    month = padMonthZero(adjustMonth(parseInt(month)))

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

/**
 * @param {number} week - a value to convert from 0[SUN]-6[SAT] to 1[MON]-7[SUN]
 * @returns `number` -  the transformed number in the range 1[MON]-7[SUN] or zero
 */
export function adjustWeek(week) {
    let adj = 0
    switch (week) {
        case 1: case 2: case 3: case 4: case 5: case 6: 
            adj = week; 
            break;
        case 0:   
            adj = 7
            break;
        default:
            break;
    }
    return adj
}



/**
 * @param {number} month - a value to convert from 0[JAN]-11[DEC] to 1[JAN]-12[DEC]
 * @returns `number` -  the transformed number in the range 1[JAN]-12[DEC] or zero
 */
export function adjustMonth(month) {
    let adj = 0
    switch (month) {
        case 0: 
            adj = 1; break;
        case 1: 
            adj = 2; break;
        case 2:
            adj = 3; break;
        case 3:
            adj = 4; break;
        case 4:
            adj = 5; break;
        case 5:
            adj = 6; break;
        case 6:
            adj = 7; break;
        case 7:
            adj = 8; break;
        case 8: 
            adj = 9; break;
        case 9:
            adj = 10; break;
        case 10:
            adj = 11; break;
        case 11: 
            adj = 12; break;
        default: break;
    }
    return adj


}

/**
 * @param {number} week - a value between the range 1[MON] - 7[SUN]
 * @returns `string` - zero-padded string equivalents of the `week`  '01' - '07' or an empty string
 */
export function padWeekZero(week) {
    let padded = ''
    if (typeof week === 'number') {
        if (week > 0 && week < 8) {
            let w = week % 8
            padded = `0${w}`
        }
    }
    return padded
}

/**
 * @param {number} month - a value between the range 1[JAN] - 12[DEC]
 * @returns `string` - zero-padded string equivalents of the `month`  '01' - '12' or an empty string
 */
export function padMonthZero(month) {
    let padded = ''
    if (typeof month === 'number') {
        let m = month % 13
        if (m > 0 && m < 10) {
            padded = `0${m}`
        } else {
            if (m > 9 && m < 13) {
                padded = `${m}`
            }
        }
    }
    return padded
}

/**
 * @param {string} num - a value between the range '01'[JAN] - '12'[DEC] (for months) and
 *   '1'[MON] - '7'[SUN] (for weeks)
 * @returns `number` - value between the range 1[JAN] - 12[DEC] (for months) and
 *   1[MON] - 7[SUN] (for weeks)
 */
export function unpadZero(num) {
    let value = 0
    switch (num) {
        case "01": value = 1; break;
        case '02': value = 2; break;
        case '03': value = 3; break;
        case '04': value = 4; break;
        case '05': value = 5; break;
        case '06': value = 6; break;
        case '07': value = 7; break;
        case '08': value = 8; break;
        case '09': value = 9; break;
        case '10': value = 10; break;
        case '11': value = 11; break;
        case '12': value = 12; break;
        default: break;
    }
    return value
}

/**
 * @param {string} month - a value between the range '01'[JAN] - '12'[DEC]
  * @param {boolean} isLeapYear - a value indicating whether the `month` belongs to a leap year
 * @returns `number` - the total number of days in a said `month`
 */
export function getNumDaysForMonth(month, isLeapYear) {
    // 30 days has sep, apr, jun and nov.
    // all the rest has 31 except feb alone
    // which has 28 days clear and 29 days
    // in each leap year.
    month = padMonthZero(adjustMonth(parseInt(month)))
    //console.log('getNumDaysForMonth() :: month=', getMonthName(month))

    
    let days = 0
    switch(month) {
        case months.JAN: case months.MAR:
        case months.MAY: case months.JUL: case months.AUG:
        case months.OCT: case months.DEC:
            days = 31
            break
        case months.SEP: case months.APR: 
        case months.JUN: case months.NOV: 
            days = 30
            break
        case months.FEB: if (isLeapYear) { return 29 } else { return 28 }
        default: break
    }
    return days
}

/**
 * @param {string} month - a value between the range '01'[JAN] - '12'[DEC]
  * @param {boolean} isLeapYear - a value indicating whether the `month` belongs to a leap year
  * @param {string} startWeekday - a value between the range '01'[MON] - '07'[SUN]
 * @returns `number` - the total number of weeks in a said `month`
 */
export function getNumWeeksForMonth(month, startWeekday, isLeapYear=false) {
    startWeekday = padWeekZero(adjustWeek(parseInt(startWeekday)))

    //console.log('getNumWeeksForMonth() :: startWeekday=', getWeekdayName(startWeekday))

    let days_count = getNumDaysForMonth(month, isLeapYear)
    
    let weeks_count = 0

    if (days_count === 31) {
        switch (startWeekday) {
            case weekdays.MON:
            case weekdays.TUE: 
            case weekdays.WED:
            case weekdays.THU:
            case weekdays.FRI:
                weeks_count = 5;
                break;
            case weekdays.SAT: 
            case weekdays.SUN:
                weeks_count = 6;
                break;
            default: break;
        }
    } else if (days_count === 30) {
        switch (startWeekday) {
            case weekdays.MON:
            case weekdays.TUE:
            case weekdays.WED:
            case weekdays.THU:
            case weekdays.FRI:
            case weekdays.SAT:
                weeks_count = 5
                break;
            case weekdays.SUN:
                weeks_count = 6
                break;
            default: break;
        }
    } else if (days_count === 28) {
        switch(startWeekday) {
            case weekdays.MON:
                weeks_count = 4
                break;
            case weekdays.TUE:
            case weekdays.WED:
            case weekdays.THU:
            case weekdays.FRI:
            case weekdays.SAT:
            case weekdays.SUN:
                weeks_count = 5
                break;
            default: break;
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
                    weeks_count = 5
                    break;
                case weekdays.SUN:
                    weeks_count = 6
                    break;
                default: break;
            }
        }
    }

    return weeks_count

}

/**
 * @param {string} prev_month - a string in the range '01'[JAN] - '12'[DEC]
 * @returns a `number[]` containing the end-of-weekdays for the previous month
 */
export function getEndWeekDaysForPrevMonth(prev_month) {
    let end_week_days = [] 


    return end_week_days
}

/**
 * @param {string} next_month - a string in the range '01'[JAN] - '12'[DEC]
 * @returns a `number[]` containing the start-of-weekdays for the next month
 */
export function getStartWeekDaysForNextMonth(next_month) {
    let start_week_days = [] 


    return start_week_days
}

export function getDaySuffix(value) {

}