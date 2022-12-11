import './Calendar.css';
import dayjs from 'dayjs'

const W=10
const H=10


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


function CalendarMonth({numOfDays, startWeekDay, endWeekDay}) {
    const getDaysPerCol= () => {
        let daysPerCol = [];

        let day = 1
        let days = []
        // todo: make this loop flexible by taking account of expanding and shrinking months
        for (let i=0; i < 5; i++) {
            if (i===0) { // start week of month
                for (let w=0; w < startWeekDay; w++) {
                    days.push(0)
                }
                for (let m=startWeekDay; m < 7; m++) {
                    days.push(day)
                    day = day + 1
                }
            } else if (i===4) { // end week of month
                while (day <= numOfDays) {
                    days.push(day)
                    day = day + 1
                }
                for (let n=endWeekDay; n < 6; n++) {
                    days.push(0)
                }
            } else { // mid weeks of month
                for (let k=0; k < 7; k++) {
                    days.push(day)
                    day = day + 1
                }
            }
            const d = days.splice(0, 7)
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


function CalendarYear() {
    return (
        <div className="CalendarYear">
                <CalendarMonth numOfDays={dayjs().daysInMonth()} startWeekDay={dayjs('2022-01-01').startOf('month').day()-1} endWeekDay={dayjs('2022-01-01').endOf('month').day()-1}></CalendarMonth>
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
  