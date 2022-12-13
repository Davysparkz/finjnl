import '../styles/Calendar.css';
import dayjs from 'dayjs'
import * as cal from '../utils/util'
import DayjsWrapper from '../utils/DayjsWrapper'

function CalendarDayAdornment({ isSpentDay, isToday }) {
    const todayStyle = 'outline outline-1 outline-offset-2 outline-red-500'

    return (isSpentDay &&
        <div className={`CalendarDayAdornment ${isToday ? todayStyle : ''}`}>
        </div>
    )
}

function CalendarDay({day}) {
    let el 
    if (day===0) {
        el =   (
            <div className={`CalendarDay`}>
                {""}
            </div>
        )
    }
    else {
        el = (
            <div className={`CalendarDay`}>
                <div>{day}</div>
                {day && <CalendarDayAdornment isSpentDay={day <= dayjs().date()} isToday={day === dayjs().date()} />}
            </div>
        )
    }
    return el
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
function CalendarMonth({year, month, startWeekDay, isLeapYear=false}) {

    const getDaysPerCol= (month, startWeekDay, isLeapYear) => {
        let daysPerCol = [];

        let day = 1
        let days = []

        let numOfWeeks = cal.getNumWeeksForMonth(month, startWeekDay,  isLeapYear)
        let numOfDays = cal.getNumDaysForMonth(month, isLeapYear)

        console.log('`getDaysPerCol()` :: numOfWeeks=', numOfWeeks)
        console.log('`getDaysPerCol()` :: numOfDays=', numOfDays)

        startWeekDay = cal.padWeekZero(cal.adjustWeek(parseInt(startWeekDay)))
        console.log('`getDaysPerCol()` :: startWeekDay=', startWeekDay)

        for (let i=1; i <= numOfWeeks; i++) {
            if (i === 1) { // first week
                for (let j =1; j < cal.unpadZero(startWeekDay); j++) {
                    days.push(0)
                }
                for (let w = cal.unpadZero(startWeekDay); w <= cal.week_total; w++) {
                    days.push(day)
                    day = day + 1
                }
            } else {  // the remainder of the week
                for (let j = 1; j <= cal.week_total; j++) {
                    if (day > numOfDays) {
                        days.push(0)
                    } else {
                        days.push(day)
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
                month={cal.padMonthZero(cal.adjustMonth(parseInt(month)))}
                year={year}
            />
            <DaysOfWeekHeader/>
            {getDaysPerCol(month, startWeekDay, isLeapYear)}
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
                 <CalendarMonth 
                    year={DayjsWrapper.getPreviousMonthDate(3).year()}
                    month={DayjsWrapper.getPreviousMonthDateValue(3)} 
                    startWeekDay={DayjsWrapper.getPreviousMonthStartWeekDayValue(3)} 
                    isLeapYear={false}
                />                 
                 <CalendarMonth 
                    year={DayjsWrapper.getPreviousMonthDate(2).year()}
                    month={DayjsWrapper.getPreviousMonthDateValue(2)} 
                    startWeekDay={DayjsWrapper.getPreviousMonthStartWeekDayValue(2)} 
                    isLeapYear={false}
                />
                 <CalendarMonth 
                    year={DayjsWrapper.getPreviousMonthDate().year()}
                    month={DayjsWrapper.getPreviousMonthDateValue()} 
                    startWeekDay={DayjsWrapper.getPreviousMonthStartWeekDayValue()} 
                    isLeapYear={false}
                />
                <CalendarMonth 
                    year={DayjsWrapper.getCurrentDate().year()}
                    month={DayjsWrapper.getCurrentDateMonthValue()} 
                    startWeekDay={DayjsWrapper.getCurrentDateStartWeekDayValue()} 
                    isLeapYear={false}
                /> 
                <CalendarMonth 
                    year={DayjsWrapper.getNextMonthDate().year()}
                    month={DayjsWrapper.getNextMonthDateValue()} 
                    startWeekDay={DayjsWrapper.getNextMonthStartWeekDayValue()} 
                    isLeapYear={false}
                />
                <CalendarMonth 
                    year={DayjsWrapper.getNextMonthDate(2).year()}
                    month={DayjsWrapper.getNextMonthDateValue(2)} 
                    startWeekDay={DayjsWrapper.getNextMonthStartWeekDayValue(2)} 
                    isLeapYear={false}
                />       
                <CalendarMonth 
                    year={DayjsWrapper.getNextMonthDate(3).year()}
                    month={DayjsWrapper.getNextMonthDateValue(3)} 
                    startWeekDay={DayjsWrapper.getNextMonthStartWeekDayValue(3)} 
                    isLeapYear={false}
                />                                     
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
  
