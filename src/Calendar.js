import './Calendar.css';
import dayjs from 'dayjs'

const W=10
const H=10


function CalendarYear() {
    return (
        <div className="CalendarYear">
                <CalendarMonth numOfDays={dayjs().daysInMonth()} startWeekDay={2} endWeekDay={3}></CalendarMonth>
        </div>
    )
}

function CalendarDayAdornment({ isSpentDay, isToday }) {
    const todayStyle = 'outline outline-1 outline-offset-2 outline-red-500'

    return (isSpentDay &&
        <div className={`CalendarDayAdornment bg-green-700 w-1 h-1 rounded-full ${isToday ? todayStyle : ''}`}>

        </div>
    )
}

function CalendarDay({day, isSpentDay}) {

    return (
        <div className={`CalendarDay flex flex-col items-center justify-start bg-red-200 w-${W} font-bold`}>
            <div className="pb-1">{day}</div>
            {day && <CalendarDayAdornment isSpentDay={day <= dayjs().date()} isToday={day === dayjs().date()} />}
        </div>
    )
}

function CalendarWeek({startDay, endDay}) {

    const getDaysPerRow = () => {
        const daysPerRow = [];

        for (let i = startDay; i <= endDay; i++) {
            daysPerRow.push(<CalendarDay day={i <= dayjs().daysInMonth() ? i : null} isSpentDay={true} key={i}/>)
        }
        return daysPerRow
    }

    return (
        <div className={`CalendarWeek flex items-stretch bg-blue-400 h-${H} divide-x-2 divide-blue-400`}>
            {getDaysPerRow()}
        </div>
    )
}

function CalendarMonth({numOfDays, startWeekDay, endWeekDay}) {
    const getDaysPerCol= () => {
        const daysPerCol = [];

        let i = 0
        let startDay = i + 1
        let endDay = startDay + 6

        for (i; i <= numOfDays;) {
            daysPerCol.push(<CalendarWeek startDay={startDay} endDay={endDay} key={i}/>)
            i = endDay
            startDay = i + 1
            endDay = startDay + 6
        }
        return daysPerCol
    }
    return (
        <div className="CalendarMonth flex flex-col divide-y-2 divide-blue-400">
            {getDaysPerCol()}
        </div>
    )
}

function DayHeader({dayText}) {
    // TODO: `inline-block align-* not working`

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
            <CalendarYear></CalendarYear>
        </div>
    )
}

function Calendar() {
    return (
      <div className="Calendar mt-3 flex flex-col">
        <CalendarHeader></CalendarHeader>
        <CalendarBody></CalendarBody>
      </div>
    );
  }
  
  export default Calendar;
  