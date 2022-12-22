import * as util from "../utils/util";

describe("util - padWeekZero", () => {
    test('`padWeekZero(1)` - to return a numbered-weekday with zero padded', () => {
        expect(util.padWeekZero(1))
        .toBe('01')
    })

    test('`padWeekZero(7)` - to return a numbered-weekday with zero padded', () => {
        expect(util.padWeekZero(7))
        .toBe('07')
    })

    test('`padWeekZero(0)` - to return an empty string', () => {
        expect(util.padWeekZero(0))
        .toBe('')
    })

    test('`padWeekZero(8)` - to return an empty string', () => {
        expect(util.padWeekZero(8))
        .toBe('')
    })
})

describe("util - padMonthZero", () => {
    test('`padMonthZero(1)` - to return a numbered-month with zero padded', () => {
        expect(util.padMonthZero(1))
        .toBe('01')
    })

    test('`padMonthZero(10)` - to return a numbered-month without zero padding', () => {
        expect(util.padMonthZero(10))
        .toBe('10')
    })

    test('`padMonthZero(11)` - to return a numbered-month without zero padding', () => {
        expect(util.padMonthZero(11))
        .toBe('11')
    })

    test('`padMonthZero(12)` - to return a numbered-month without zero padding', () => {
        expect(util.padMonthZero(12))
        .toBe('12')
    })

    test('`padMonthZero(0)` - to return an empty string', () => {
        expect(util.padMonthZero(0))
        .toBe('')
    })

    test('`padMonthZero(13)` - to return an empty string', () => {
        expect(util.padMonthZero(13))
        .toBe('')
    })
})

describe("util - adjustWeek", () => {
    test('`adjustWeek(1)` - to return a numbered-weekday without adjustment', () => {
        expect(util.adjustWeek(1))
        .toBe(1)
    })

    test('`adjustWeek(6)` - to return a numbered-weekday without adjustment', () => {
        expect(util.adjustWeek(6))
        .toBe(6)
    })

    test('`adjustWeek(0)` - to return a numbered-weekday with adjustment', () => {
        expect(util.adjustWeek(0))
        .toBe(7)
    })

    test('`adjustWeek(8)` - to return zero', () => {
        expect(util.adjustWeek(8))
        .toBe(0)
    })
})

describe("util - adjustMonth", () => {
    test('`adjustMonth(0)` - to return a numbered-month with adjustment', () => {
        expect(util.adjustMonth(0))
        .toBe(1)
    })
    test('`adjustMonth(1)` - to return a numbered-month with adjustment', () => {
        expect(util.adjustMonth(1))
        .toBe(2)
    })
    test('`adjustMonth(10)` - to return a numbered-month with adjustment', () => {
        expect(util.adjustMonth(10))
        .toBe(11)
    })
    test('`adjustMonth(11)` - to return a numbered-month with adjustment', () => {
        expect(util.adjustMonth(11))
        .toBe(12)
    })
    test('`adjustMonth(12)` - to return a numbered-month with adjustment', () => {
        expect(util.adjustMonth(12))
        .toBe(0)
    })
})

// describe("util - get")