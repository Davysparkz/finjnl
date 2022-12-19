import DayjsWrapper from "../utils/DayjsWrapper";
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)

describe("DayjsWrapper - Current Date", () => {
    test('`getCurrentDate()` - to return the current `Dayjs()` object date', () => {
        expect(DayjsWrapper.getCurrentDate().format('YYYY-MM-DD'))
        .toBe(dayjs().format('YYYY-MM-DD'))
    })
    test('`getCurrentDateYearValue` - to return the current year value', () => {
        expect(DayjsWrapper.getCurrentDateYearValue())
        .toBe(dayjs().year())
    })
    test('`getCurrentDateMonthValue` - to return the current month value', () => {
        expect(DayjsWrapper.getCurrentDateMonthValue())
        .toBe(dayjs().month())
    })
    test('`getCurrentDateStartWeekDayValue` - to return the current month start-week-day value', () => {
        expect(DayjsWrapper.getCurrentDateStartWeekDayValue())
        .toBe(dayjs().startOf('month').day())
    })
    test('`getCurrentDateEndWeekDayValue` - to return the current month start-week-day value', () => {
        expect(DayjsWrapper.getCurrentDateEndWeekDayValue())
        .toBe(dayjs().endOf('month').day())
    })
})

describe("DayjsWrapper - Previous Date", () => {
    test('`getPreviousYearDate()` - to return previous 1-year `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousYearDate().format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(1, 'year').format('YYYY-MM-DD'))
    })
    test('`getPreviousYearDate(5)` - to return previous 5-year `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousYearDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(5, 'year').format('YYYY-MM-DD'))
    })
    test('`getPreviousMonthDate()` - to return previous 1-month `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousMonthDate().format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(1, 'month').format('YYYY-MM-DD'))
    })
    test('`getPreviousMonthDate(5)` - to return previous 5-month `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousMonthDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(5, 'month').format('YYYY-MM-DD'))
    })
    test('`getPreviousDayDate()` - to return previous 1-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousDayDate().format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(1, 'day').format('YYYY-MM-DD'))
    })
    test('`getPreviousDayDate(5)` - to return previous 5-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousDayDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(5, 'day').format('YYYY-MM-DD'))
    })
    test('`getPreviousMonthStartWeekDayDate()` - to return previous 1-month start-week-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousMonthStartWeekDayDate().format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'))
    })
    test('`getPreviousMonthStartWeekDayDate(5)` - to return previous 5-month start-week-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousMonthStartWeekDayDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(5, 'month').startOf('month').format('YYYY-MM-DD'))
    })
    test('`getPreviousMonthEndWeekDayDate()` - to return previous 1-month end-week-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getPreviousMonthEndWeekDayDate().format('YYYY-MM-DD'))
        .toBe(dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD'))
    })
    test('`getPreviousDateYearValue` - to return the previous 1-year value', () => {
        expect(DayjsWrapper.getPreviousDateYearValue())
        .toBe(dayjs().subtract(1, 'year').year())
    })
    test('`getPreviousDateYearValue(5)` - to return the previous 5-year value', () => {
        expect(DayjsWrapper.getPreviousDateYearValue(5))
        .toBe(dayjs().subtract(5, 'year').year())
    })
    test('`getPreviousMonthDateValue` - to return the previous 1-month value', () => {
        expect(DayjsWrapper.getPreviousMonthDateValue())
        .toBe(dayjs().subtract(1, 'month').month())
    })
    test('`getPreviousMonthDateValue(5)` - to return the previous 5-month value', () => {
        expect(DayjsWrapper.getPreviousMonthDateValue(5))
        .toBe(dayjs().subtract(5, 'month').month())
    })
    test('`getPreviousMonthStartWeekDayValue` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousMonthStartWeekDayValue())
        .toBe(dayjs().subtract(1, 'month').startOf('month').day())
    })
    test('`getPreviousMonthStartWeekDayValue(5)` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousMonthStartWeekDayValue(5))
        .toBe(dayjs().subtract(5, 'month').startOf('month').day())
    })
    test('`getPreviousMonthEndWeekDayValue` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousMonthEndWeekDayValue())
        .toBe(dayjs().subtract(1, 'month').endOf('month').day())
    })
    test('`getPreviousMonthEndWeekDayValue(5)` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousMonthEndWeekDayValue(5))
        .toBe(dayjs().subtract(5, 'month').endOf('month').day())
    })
})

describe("DayjsWrapper - Next Date", () => {
    test('`getNextYearDate()` - to return next 1-year `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextYearDate().format('YYYY-MM-DD'))
        .toBe(dayjs().add(1, 'year').format('YYYY-MM-DD'))
    })
    test('`getNextYearDate(5)` - to return next 5-year `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextYearDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().add(5, 'year').format('YYYY-MM-DD'))
    })
    test('`getNextMonthDate()` - to return next 1-month `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextMonthDate().format('YYYY-MM-DD'))
        .toBe(dayjs().add(1, 'month').format('YYYY-MM-DD'))
    })
    test('`getNextMonthDate(5)` - to return next 5-month `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextMonthDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().add(5, 'month').format('YYYY-MM-DD'))
    })
    test('`getNextDayDate()` - to return next 1-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextDayDate().format('YYYY-MM-DD'))
        .toBe(dayjs().add(1, 'day').format('YYYY-MM-DD'))
    })
    test('`getNextDayDate(5)` - to return next 5-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextDayDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().add(5, 'day').format('YYYY-MM-DD'))
    })
    test('`getNextMonthStartWeekDayDate()` - to return next 1-month start-week-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextMonthStartWeekDayDate().format('YYYY-MM-DD'))
        .toBe(dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'))
    })
    test('`getNextMonthStartWeekDayDate(5)` - to return next 5-month start-week-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextMonthStartWeekDayDate(5).format('YYYY-MM-DD'))
        .toBe(dayjs().add(5, 'month').startOf('month').format('YYYY-MM-DD'))
    })
    test('`getNextMonthEndWeekDayDate()` - to return next 1-month end-week-day `Dayjs()` object date', () => {
        expect(DayjsWrapper.getNextMonthEndWeekDayDate().format('YYYY-MM-DD'))
        .toBe(dayjs().add(1, 'month').endOf('month').format('YYYY-MM-DD'))
    })
    test('`getNextDateYearValue` - to return the next 1-year value', () => {
        expect(DayjsWrapper.getNextDateYearValue())
        .toBe(dayjs().add(1, 'year').year())
    })
    test('`getNextDateYearValue(5)` - to return the next 5-year value', () => {
        expect(DayjsWrapper.getNextDateYearValue(5))
        .toBe(dayjs().add(5, 'year').year())
    })
    test('`getNextMonthDateValue` - to return the next 1-month value', () => {
        expect(DayjsWrapper.getNextMonthDateValue())
        .toBe(dayjs().add(1, 'month').month())
    })
    test('`getNextMonthDateValue(5)` - to return the next 5-month value', () => {
        expect(DayjsWrapper.getNextMonthDateValue(5))
        .toBe(dayjs().add(5, 'month').month())
    })
    test('`getNextMonthStartWeekDayValue` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextMonthStartWeekDayValue())
        .toBe(dayjs().add(1, 'month').startOf('month').day())
    })
    test('`getNextMonthStartWeekDayValue(5)` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextMonthStartWeekDayValue(5))
        .toBe(dayjs().add(5, 'month').startOf('month').day())
    })
    test('`getNextMonthEndWeekDayValue` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextMonthEndWeekDayValue())
        .toBe(dayjs().add(1, 'month').endOf('month').day())
    })
    test('`getNextMonthEndWeekDayValue(5)` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextMonthEndWeekDayValue(5))
        .toBe(dayjs().add(5, 'month').endOf('month').day())
    })
})

describe('DayjsWrapper - Day Test', () => {

    test('`isSpentDay(2022, 12, 13)` - to return true if it is a past date', () => {
        expect(DayjsWrapper.isSpentDay(2022, 12, 13))
        .toBe(dayjs(`2022-12-13`).isBefore(dayjs()))
    })

    test('`isSpentDay(2022, 12, 13)` - to not return true if it is a future date', () => {
        expect(DayjsWrapper.isSpentDay(2022, 12, 13))
        .not
        .toBe(dayjs(`2022-12-13`).isAfter(dayjs()))
    })

    test('`isSpentDay(2022, 12, 9)` - to return true if it is a past date', () => {
        expect(DayjsWrapper.isSpentDay(2022, 12, 9))
        .toBe(dayjs(`2022-12-9`).isBefore(dayjs()))
    })

    test('`isSpentDay(TodaysDate)` - to return false if it is today\'s date', () => {
        let today = dayjs().format('YYYY-MM-DD')
        let parts = today.split('-')
        let year = parts[0]
        let month = parts[1]
        let day = parts[2]
        expect(DayjsWrapper.isSpentDay(year, month, day))
        .toBe(dayjs(today).isBefore(dayjs()))
    })

    test('`isToday(TodaysDate)` - to return true if it is today\'s date', () => {
        let today = dayjs().format('YYYY-MM-DD')
        let parts = today.split('-')
        let year = parts[0]
        let month = parts[1]
        let day = parts[2]
        expect(DayjsWrapper.isToday(year, month, day))
        .toBe(dayjs(today).isToday())
    })    

    test('`isToday(2022-12-14)` - to return true if it is today\'s date', () => {
        expect(DayjsWrapper.isToday(2022, 12, 14))
        .toBe(dayjs('2022-12-14').isToday())
    })    

    test('isLeapYear(1700)` - to return false as it is not a leap year', () => {
        expect(DayjsWrapper.isLeapYear(1700))
        .toBeFalsy()
    })

    test('isLeapYear(1800)` - to return false as it is not a leap year', () => {
        expect(DayjsWrapper.isLeapYear(1800))
        .toBeFalsy()
    })

    test('isLeapYear(2000)` - to return true as it is a leap year', () => {
        expect(DayjsWrapper.isLeapYear(2000))
        .toBeTruthy()
    })

    test('isLeapYear(2022)` - to return false as it is not a leap year', () => {
        expect(DayjsWrapper.isLeapYear(2022))
        .toBeFalsy()
    })
})