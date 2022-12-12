import '../styles/Calendar.css';
import dayjs from 'dayjs'
import * as cal from '../utils/util'

const W=10
const H=10

// dates 
const pmd = dayjs().subtract(1, 'month')
const cmd = dayjs()
const nmd =  dayjs().add(1, 'month')

const pyd = dayjs().subtract(1,  'year')
const cyd = dayjs()
const nyd = dayjs().add(1, 'year')

// months
const pm = dayjs().subtract(1, 'month').month()
const cm = dayjs().month()
const nm = dayjs().add(1, 'month').month()

// years
const py = pyd.year()
const cy  = cyd.year()
const ny = nyd.year()

// start week days
const pswd = pmd.startOf('month').day()
const cswd = cmd.startOf('month').day()
const nswd = nmd.startOf('month').day()

var cdata = {
    prev_year: py,
    year: cy,
    next_year: ny,
    prev_month: cal.padMonthZero(pm+1),
    month: cal.padMonthZero(cm+1),
    next_month: cal.padMonthZero(nm+1),
    prev_startWeekDay: cal.padWeekZero(pswd),  
    startWeekDay: cal.padWeekZero(cswd),
    next_startWeekDay: cal.padWeekZero(nswd)
}

class CalendarData {
    static currentDate = dayjs()
    static getCurrentDate() { 
        return this.currentDate
    }
    static getPreviousYearDate(num) {
        return this.currentDate.subtract(num, 'year')
    }
    static getNextYearDate(num) {
        return this.currentDate.add(num, 'year')
    }
}


function CalendarDayAdornment({ isSpentDay, isToday }) {
    const todayStyle = 'outline outline-1 outline-offset-2 outline-red-500'

    return (isSpentDay &&
        <div className={`CalendarDayAdornment bg-green-700 w-1 h-1 rounded-full order-1 ${isToday ? todayStyle : ''}`}>
        </div>
    )
}

function CalendarDay({day}) {
    let el 
    if (day===0) {
        el =   (
            <div className={`CalendarDay flex flex-col items-center  bg-red-200 w-10 font-bold w-${W}`}>
                {""}
            </div>
        )
    }
    else {
        el = (
            <div className={`CalendarDay flex flex-col items-center  bg-red-200 w-10 font-bold w-${W}`}>
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
        <div className={`CalendarWeek flex items-stretch bg-blue-400 h-10 divide-x-2 divide-blue-400 h-${H}`}>
            {getDaysPerRow()}
        </div>
    )
}


function CalendarMonth({month, startWeekDay, isLeapYear=false}) {
    const getDaysPerCol= () => {
        let daysPerCol = [];

        let day = 1
        let days = []

        let numOfWeeks = cal.getNumWeeksForMonth(month, startWeekDay,  isLeapYear)
        let numOfDays = cal.getNumDaysForMonth(month, isLeapYear)

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
        <div className="CalendarMonth flex flex-col divide-y-2 divide-blue-400">
            {getDaysPerCol()}
        </div>
    )
}

function CalendarMonthHeader({month, year}) {
    
    return (
        <div className="CalendarMonthHeader flex items-center justify-center space-x-2 h-5">
            <div>{cal.getMonthName(month)} </div>
            <div>{year}</div>
        </div>
    )
}

function CalendarMonths() {
    return (
        <div className="CalendarMonths flex space-x-8 flex-no-wrap">
                <CalendarMonth 
                    month={cdata.prev_month} 
                    startWeekDay={cdata.prev_startWeekDay} 
                    isLeapYear={false}
                />
                <CalendarMonth 
                    month={cdata.month} 
                    startWeekDay={cdata.startWeekDay} 
                    isLeapYear={false}
                />
                    {/* <CalendarMonth 
                    month={cdata.next_month} 
                    startWeekDay={cdata.next_startWeekDay} 
                    isLeapYear={false}
                /> */}
        </div>
    )
}

function DayHeader({dayText}) {
    return (
        <div className={`DayHeader inline-block text-center w-${W}`}>{dayText}</div>
    )
}


function CalendarHeader() {
    return (
        <div className={`CalendarHeader flex items-center h-${H}`}>
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
      <div className="Calendar mt-3 flex flex-col">
        <CalendarMonthHeader month={cdata.month} year={cdata.year}/>
        <CalendarHeader></CalendarHeader>
        <CalendarBody></CalendarBody>
      </div>
    );
  }
  
  export default Calendar;
  
