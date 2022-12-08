import './Calendar.css';
import dayjs from 'dayjs'
import {useState} from 'react'

const W=10
const H=10


function CalendarYear() {
    return (
        <div className="CalendarYear">
                <CalendarMonth numOfDays={31} startWeekDay={2} endWeekDay={3}></CalendarMonth>
        </div>
    )
}

function CalendarDay({day}) {

    return (
        <div className={`CalendarDay bg-red-200 w-${W} text-center font-bold`}>
            {day}
        </div>
    )
}

function CalendarWeek({startDay, endDay}) {

    const getDaysPerRow = () => {
        const daysPerRow = [];

        for (let i = startDay; i <= endDay; i++) {
            daysPerRow.push(<CalendarDay day={i} key={i}/>)
        }
        return daysPerRow
    }

    return (
        <div className={`CalendarWeek flex items-center bg-blue-400 h-${H} divide-x-2 divide-blue-400`}>
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
        <div className={`inline-block text-center w-${W}`}>{dayText}</div>
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
  