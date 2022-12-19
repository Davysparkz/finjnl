import '../styles/Calendar.css';
import * as cal from '../utils/util'
import DayjsWrapper from '../utils/DayjsWrapper'

function CalendarDayAdornment({ isSpentDay, isToday }) {
    const todayStyle = 'outline outline-1 outline-offset-2 outline-red-500'

    return (isSpentDay &&
        <div className={`CalendarDayAdornment ${isToday ? todayStyle : ''}`}>
        </div>
    )
}

/**
 * @property {object} props  - React prop object
 * @property {object} props.day - the default object
 * @property {number} props.day.value - the day number 
 * @property {boolean} props.day.isSpentDay - whether the day is before today
 * @property {boolean} props.day.isToday - whether the day is today
 */
function CalendarDay({day}) {
    let el 
    if (day.value===0) {
        el =   (
            <div className={`CalendarDay`}>
                {""}
            </div>
        )
    }
    else {
        el = (
            <div className={`CalendarDay`} onClick={() => handleDayClick(day) }>
                <div>{day.value}</div>
                {day.value && <CalendarDayAdornment isSpentDay={day.isSpentDay} isToday={day.isToday} />}
            </div>
        )
    }
    return el
}

function handleDayClick(day) {
    console.log(day.isSpentDay)
}

function CalendarWeek({days}) {
    const getDaysPerRow = () => {
        let daysPerRow = [];

        for (let i = 0; i < days.length; i++) {
            daysPerRow.push(<CalendarDay day={days[i]} key={i}/>)
        }
        return daysPerRow
    }

    return (
        <div className={`CalendarWeek`}>
            {getDaysPerRow()}
        </div>
    )
}


/**
 * @property {object} props  - React prop object
 * @property {number} props.year - the current calendar year
 * @property {number} props.month - the current month in the calendar year
 * @property {number} props.startWeekDay - the start-week-day of the current month
 * @property {boolean} props.isLeapYear - whether the year is a leap year
 */
function CalendarMonth({year, month, startWeekDay}) {

    const getDaysPerCol = (year, month, startWeekDay) => {
        let daysPerCol = [];

        let day = 1
    
        let days = []

        let isLeapYear = DayjsWrapper.isLeapYear(year)
        let numOfWeeks = cal.getNumWeeksForMonth(month, startWeekDay,  isLeapYear)
        let numOfDays = cal.getNumDaysForMonth(month, isLeapYear)

        startWeekDay = cal.padWeekZero(cal.adjustWeek(parseInt(startWeekDay)))
        month = cal.adjustMonth(month)

        for (let i=1; i <= numOfWeeks; i++) {
            if (i === 1) { // first week
                for (let j =1; j < cal.unpadZero(startWeekDay); j++) {
                    days.push({value: 0, isSpentDay: false, isToday: false})
                }
                for (let w = cal.unpadZero(startWeekDay); w <= cal.week_total; w++) {
                    days.push({
                        value: day,
                        isSpentDay: DayjsWrapper.isSpentDay(year, month, day),
                        isToday: DayjsWrapper.isToday(year, month, day)
                    })
                    day = day + 1
                }
            } else {  // the remainder of the week
                for (let j = 1; j <= cal.week_total; j++) {
                    if (day > numOfDays) {
                        days.push({value: 0, isSpentDay: false, isToday: false})
                    } else {
                        days.push({
                            value: day,
                            isSpentDay: DayjsWrapper.isSpentDay(year, month, day),
                            isToday: DayjsWrapper.isToday(year, month, day)
                        })
                        day = day + 1
                    }
                }
            }
            const d = days.splice(0, cal.week_total)
            daysPerCol.push(<CalendarWeek days={d} key={i}/>)
           
        }

        return daysPerCol
    }

    return (
        <div className="CalendarMonth">
            <CalendarMonthHeader 
                month={month}
                year={year}
            />
            <DaysOfWeekHeader/>
            {getDaysPerCol(year, month, startWeekDay)}
        </div>
    )
}

function CalendarMonthHeader({month, year}) {
    return (
        <div className="CalendarMonthHeader">
            <div>{cal.getMonthName(month)} </div>
            <div>{year}</div>
        </div>
    )
}

function CalendarMonths() {
    return (
        <div className="CalendarMonths">
                 {/* <CalendarMonth 
                    year={DayjsWrapper.getPreviousMonthDate(3).year()}
                    month={DayjsWrapper.getPreviousMonthDateValue(3)} 
                    startWeekDay={DayjsWrapper.getPreviousMonthStartWeekDayValue(3)} 
                />                 
                 <CalendarMonth 
                    year={DayjsWrapper.getPreviousMonthDate(2).year()}
                    month={DayjsWrapper.getPreviousMonthDateValue(2)} 
                    startWeekDay={DayjsWrapper.getPreviousMonthStartWeekDayValue(2)} 
                />
                 <CalendarMonth 
                    year={DayjsWrapper.getPreviousMonthDate().year()}
                    month={DayjsWrapper.getPreviousMonthDateValue()} 
                    startWeekDay={DayjsWrapper.getPreviousMonthStartWeekDayValue()} 
                /> */}
                <CalendarMonth 
                    year={DayjsWrapper.getCurrentDate().year()}
                    month={DayjsWrapper.getCurrentDateMonthValue()} 
                    startWeekDay={DayjsWrapper.getCurrentDateStartWeekDayValue()} 
                /> 
                {/* <CalendarMonth 
                    year={DayjsWrapper.getNextMonthDate().year()}
                    month={DayjsWrapper.getNextMonthDateValue()} 
                    startWeekDay={DayjsWrapper.getNextMonthStartWeekDayValue()} 
                />
                <CalendarMonth 
                    year={DayjsWrapper.getNextMonthDate(2).year()}
                    month={DayjsWrapper.getNextMonthDateValue(2)} 
                    startWeekDay={DayjsWrapper.getNextMonthStartWeekDayValue(2)} 
                />       
                <CalendarMonth 
                    year={DayjsWrapper.getNextMonthDate(3).year()}
                    month={DayjsWrapper.getNextMonthDateValue(3)} 
                    startWeekDay={DayjsWrapper.getNextMonthStartWeekDayValue(3)} 
                />                                      */}
        </div>
    )
}

function DayHeader({dayText}) {
    return (
        <div className={`DayHeader`}>{dayText}</div>
    )
}


function DaysOfWeekHeader() {
    return (
        <div className={`DaysOfWeekHeader`}>
            <DayHeader dayText={'M'}/>
            <DayHeader dayText={'T'}/>
            <DayHeader dayText={'W'}/>
            <DayHeader dayText={'T'}/>
            <DayHeader dayText={'F'}/>
            <DayHeader dayText={'S'}/>
            <DayHeader dayText={'S'}/>
        </div>
    )
}

function CalendarBody() {
    return (
        <div className="CalendarBody">
            <CalendarMonths></CalendarMonths>
        </div>
    )
}

function Calendar() {
    return (
      <div className="Calendar">
        <CalendarBody></CalendarBody>
      </div>
    );
  }
  
  export default Calendar;
  
