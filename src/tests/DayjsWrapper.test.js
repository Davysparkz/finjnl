import DayjsWrapper from "../utils/DayjsWrapper";
import dayjs from 'dayjs'

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
    test('`getPreviousDateMonthValue` - to return the previous 1-month value', () => {
        expect(DayjsWrapper.getPreviousDateMonthValue())
        .toBe(dayjs().subtract(1, 'month').month())
    })
    test('`getPreviousDateMonthValue(5)` - to return the previous 5-month value', () => {
        expect(DayjsWrapper.getPreviousDateMonthValue(5))
        .toBe(dayjs().subtract(5, 'month').month())
    })
    test('`getPreviousDateStartWeekDayValue` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousDateStartWeekDayValue())
        .toBe(dayjs().subtract(1, 'month').startOf('month').day())
    })
    test('`getPreviousDateStartWeekDayValue(5)` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousDateStartWeekDayValue(5))
        .toBe(dayjs().subtract(5, 'month').startOf('month').day())
    })
    test('`getPreviousDateEndWeekDayValue` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousDateEndWeekDayValue())
        .toBe(dayjs().subtract(1, 'month').endOf('month').day())
    })
    test('`getPreviousDateEndWeekDayValue(5)` - to return the previous 1-month start-week-day value', () => {
        expect(DayjsWrapper.getPreviousDateEndWeekDayValue(5))
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
    test('`getNextDateMonthValue` - to return the next 1-month value', () => {
        expect(DayjsWrapper.getNextDateMonthValue())
        .toBe(dayjs().add(1, 'month').month())
    })
    test('`getNextDateMonthValue(5)` - to return the next 5-month value', () => {
        expect(DayjsWrapper.getNextDateMonthValue(5))
        .toBe(dayjs().add(5, 'month').month())
    })
    test('`getNextDateStartWeekDayValue` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextDateStartWeekDayValue())
        .toBe(dayjs().add(1, 'month').startOf('month').day())
    })
    test('`getNextDateStartWeekDayValue(5)` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextDateStartWeekDayValue(5))
        .toBe(dayjs().add(5, 'month').startOf('month').day())
    })
    test('`getNextDateEndWeekDayValue` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextDateEndWeekDayValue())
        .toBe(dayjs().add(1, 'month').endOf('month').day())
    })
    test('`getNextDateEndWeekDayValue(5)` - to return the next 1-month start-week-day value', () => {
        expect(DayjsWrapper.getNextDateEndWeekDayValue(5))
        .toBe(dayjs().add(5, 'month').endOf('month').day())
    })
})