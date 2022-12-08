import './Calendar.css';
import dayjs from 'dayjs'
import {useState} from 'react'

function DayHeader({dayText}) {
    // TODO: `inline-block align-* not working`

    return (
        <div className="inline-block align-middle w-10 h-10 text-center">{dayText}</div>
    )
}

function CalendarHeader() {
    return (
        <div className="CalendarHeader flex">
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
            <CalendarMonth numOfDays={31} startWeekDay={2} endWeekDay={3}></CalendarMonth>
        </div>
    )
}

function CalendarYear() {
    return (
        <div className="CalendarYear">
           {dayjs().format('YYYY')}
        </div>
    )
}

function CalendarDay({day}) {

    return (
        <div className="CalendarDay bg-red-200 w-10 h-10 text-center font-bold">
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
        <div className="CalendarWeek flex bg-blue-400 justify-center divide-x-2 divide-blue-400">
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

function Calendar({year, month}) {
    return (
      <div className="Calendar ">
        <CalendarHeader></CalendarHeader>
        <CalendarBody></CalendarBody>
      </div>
    );
  }
  
  export default Calendar;
  