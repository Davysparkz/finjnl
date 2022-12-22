import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)

/** `DayjsWrapper` provides static methods to make working with `dayjs()` easier. */
export default class DayjsWrapper {
    static currentDate = dayjs()

    static month_map = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec',
    }

    static day_map = {
        0: 'Mon',
        1: 'Tue',
        2: 'Wed',
        3: 'Thu',
        4: 'Fri',
        5: 'Sat',
        6: 'Sun'
    }
    /**
     * 
     * @returns a ```Dayjs()``` object with the current date in time
     */
    static getCurrentDate() { 
        return this.currentDate
    }
    /**
     * @param {number} num a value to move back in years - default is 1 year
     * @returns a ```Dayjs()``` object with the previous date in time
     */
    static getPreviousYearDate(num=1) {
        return this.currentDate.subtract(num, 'year')
    }
    /**
     * @param {number} num a value to move forward in years - default is 1 year
     * @returns a ```Dayjs()``` object with the next date in time
     */
    static getNextYearDate(num=1) {
        return this.currentDate.add(num, 'year')
    }
    /**
     * @param {number} num a value to move back in months - default is 1 month
     * @returns a ```Dayjs()``` object with the previous date in time
     */
    static getPreviousMonthDate(num=1) {
        return this.currentDate.subtract(num, 'month')
    }
    /**
     * @param {number} num a value to move forward in months - default is 1 month
     * @returns a ```Dayjs()``` object with the next date in time
     */
    static getNextMonthDate(num=1) {
        return this.currentDate.add(num, 'month')
    }
    /**
     * @param {number} num a value to move forward in days - default is 1 day
     * @returns a ```Dayjs()``` object with the previous date in time
     */
    static getPreviousDayDate(num=1) {
        return this.currentDate.subtract(num, 'day')
    }
    /**
     * @param {number} num a value to move forward in days - default is 1 day
     * @returns a ```Dayjs()``` object with the next date in time
     */
    static getNextDayDate(num=1) {
        return this.currentDate.add(num, 'day')
    }
    /**
     * @param {number} num a value to move back in months 
     * @returns a ```Dayjs()``` object with the previous date (with the start-week-day of the month) in time
     */
    static getPreviousMonthStartWeekDayDate(num) {
        return this.getPreviousMonthDate(num).startOf('month')
    }
    /**
     * @param {number} num a value to move forward in months 
     * @returns a ```Dayjs()``` object with the next date (with the start-week-day of the month) in time
     */
    static getNextMonthStartWeekDayDate(num) {
        return this.getNextMonthDate(num).startOf('month')
    }
    /**
     * @param {number} num a value to move back in months 
     * @returns a ```Dayjs()``` object with the previous date (with the end-week-day of the month) in time
     */
    static getPreviousMonthEndWeekDayDate(num) {
        return this.getPreviousMonthDate(num).endOf('month')
    }
    /**
     * @param {number} num a value to move back in months 
     * @returns a ```Dayjs()``` object with the previous date (with the start-week-day of the month) in time
     */
    static getNextMonthEndWeekDayDate(num) {
        return this.getNextMonthDate(num).endOf('month')
    }
    /**
     * 
     * @returns a ```number``` which represents the current year in the calendar e.g. 2022
     */
    static getCurrentDateYearValue() {
        return this.getCurrentDate().year()
    }
    /**
     * if the current year is 2022 and ```num``` is 5 then the return value is 2017
     * @param {number} num a value which a distance backwards from the current year
     * @returns a ```number``` which represents the previous year in the calendar e.g. 2022
     */
    static getPreviousDateYearValue(num) {
        return this.getPreviousYearDate(num).year()
    }
    /**
     * if the current year is 2022 and ```num``` is 5 then the return value is 2027
     * @param {number} num a value which a distance forwards from the current year
     * @returns a ```number``` which represents the previous year in the calendar e.g. 2022
     */
    static getNextDateYearValue(num) {
        return this.getNextYearDate(num).year()
    }
    /**
     * 
     * @returns a ```number``` which represents the current month in the calendar year e.g. 0[JAN]-11[DEC]
     */
    static getCurrentDateMonthValue() {
        return this.getCurrentDate().month()
    }
    /**
     * if the current month is [11]DEC and ```num``` is 5 then the return value is [6]JUL
     * @param {number} num a value months distance backwards from the current year
     * @returns a ```number``` which represents the previous month in the calendar year e.g. 0[JAN]-11[DEC]
     */
    static getPreviousMonthDateValue(num) {
        return this.getPreviousMonthDate(num).month()
    }
    /**
     * if the current month is [11]DEC and ```num``` is 5 then the return value is [4]MAY
     * @param {number} num a value months distance forwards from the current year
     * @returns a ```number``` which represents the next month in the calendar year e.g. 0[JAN]-11[DEC]
     */
    static getNextMonthDateValue(num) {
        return this.getNextMonthDate(num).month()
    }
    /**
     * 
     * @returns a ```number``` which represents the current month's start-week-day in the calendar year e.g. 0[SUN]-6[SAT]
     */
    static getCurrentDateStartWeekDayValue() {
        return this.getCurrentDate().startOf('month').day()
    }
    /**
     * @param {number} num a value months distance backwards from the current year
     * @returns a ```number``` which represents the previous month's start-week-day in the calendar year e.g. 0[SUN]-6[SAT]
     */
    static getPreviousMonthStartWeekDayValue(num) {
        return this.getPreviousMonthStartWeekDayDate(num).day()
    }
    /**
     * @param {number} num a value months distance forwards from the current year
     * @returns a ```number``` which represents the next month's start-week-day in the calendar year e.g. 0[SUN]-6[SAT]
     */
    static getNextMonthStartWeekDayValue(num) {
        return this.getNextMonthStartWeekDayDate(num).day()
    }
    /**
     * 
     * @returns a ```number``` which represents the current month's end-week-day in the calendar year e.g. 0[SUN]-6[SAT]
     */
    static getCurrentDateEndWeekDayValue() {
        return this.getCurrentDate().endOf('month').day()
    }
    /**
     * @param {number} num a value months distance backwards from the current year
     * @returns a ```number``` which represents the previous month's end-week-day in the calendar year e.g. 0[SUN]-6[SAT]
     */
    static getPreviousMonthEndWeekDayValue(num) {
        return this.getPreviousMonthEndWeekDayDate(num).day()
    }
    /**
     * @param {number} num a value months distance forwards from the current year
     * @returns a ```number``` which represents the next month's end-week-day in the calendar year e.g. 0[SUN]-6[SAT]
     */
    static getNextMonthEndWeekDayValue(num) {
        return this.getNextMonthEndWeekDayDate(num).day()
    }

    /**
     * @param {number} year a value representing the year
     * @param {number} month a value representing the month
     * @param {number} day a value representing the day
     * @returns a ```boolean``` indicating whether it is before today's date
     */
    static isSpentDay(year, month, day) {
        return dayjs(`${year}-${month}-${day}`).isBefore(this.getCurrentDate())
    }

    /**
     * @param {number} year a value representing the year
     * @param {number} month a value representing the month
     * @param {number} day a value representing the day
     * @returns a ```boolean``` indicating whether it is today's date
     */
    static isToday(year, month, day) {
        return dayjs(`${year}-${month}-${day}`).isToday()
    }

    /**
     * @param {number} year a value representing the year
     * @returns a ```boolean``` indicating whether it is a leap
     */
    static isLeapYear(year) {
        if (
            ((year % 4) === 0) && ((year % 100) !== 0)
        ) {
            return true
        } else if (     
            ((year % 400) === 0) 
        ) {
            return true
        }
        return false
    }

    static getCurrentDayDateValue() {
        return this.getCurrentDate().day()
    }

    static getPreviousDayDateValue(num) {
        return this.getPreviousDayDate(num).day()
    }

    static getNextDayDateValue(num) {
        return this.getNextDayDate(num).day()
    }

    static getStartWeekDaysForNextMonth(num) {
        let start_week_days = [] 
        
     //   let nm = this.getNextMonthDate(num).startOf('month')
    
        return start_week_days
    }
}
