import './Calendar.css';

function CalendarHeader({year, month}) {
    return (
        <div className="CalendarHeader">
            <p>{month}, {year}</p>
        </div>
    )
}

function CalendarBody() {
    return (
        <div className="CalendarBody">

        </div>
    )
}

function CalendarYear({currentYear}) {
    return (
        <div className="CalendarYear">

        </div>
    )
}

function CalendarMonth() {
    return (
        <div className="CalendarMonth">

        </div>
    )
}

function CalendarDay() {
    return (
        <div className="CalendarDay">

        </div>
    )
}

function Calendar({year, month}) {
    return (
      <div className="Calendar">
        <CalendarHeader year={year} month={month}></CalendarHeader>
        <CalendarYear currentYear={year}>
        </CalendarYear>
      </div>
    );
  }
  
  export default Calendar;
  