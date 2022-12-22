import '../styles/Clndr.css'
import {useState} from 'react'
import {ClndrData} from '../utils/clndr_context'
import DayjsWrapper from '../utils/DayjsWrapper'

function DayAdornment({isSpentDay, isToday}) {
    return (
        <>
             <div className="DayAdornment">

            </div> 
        </>
    )
}

function DayValue({value}) {
    return (
        <>
            <div className="DayValue">                 
                <span>{value}</span>      
            </div> 
        </>
    )
}

function Day({day, handleDayClick}) {
    return (
        <>
            <div className="Day" onClick={(e) => { handleDayClick(e, day) } }> 
                <DayValue value={day.value}/> 
                <DayAdornment isSpentDay={day.isSpentDay} isToday={day.isToday}/>             
            </div> 
        </>
    )
}

function onDayClick(e, day) {
    console.log(day.value)
}


function Week() {
    return (
        <>
            <div className="Week">
                <Day 
                    day={{ 
                        value: 30,
                        isSpentDay: false,
                        isToday: false
                    }}
                    handleDayClick={onDayClick}
                />
                <Day 
                    day={{ 
                        value: 30,
                        isSpentDay: false,
                        isToday: false
                    }}
                    handleDayClick={onDayClick}
                />
                <Day 
                    day={{ 
                        value: 30,
                        isSpentDay: false,
                        isToday: false
                    }}
                    handleDayClick={onDayClick}
                />
                <Day 
                    day={{ 
                        value: 30,
                        isSpentDay: false,
                        isToday: false
                    }}
                    handleDayClick={onDayClick}
                />
                <Day 
                    day={{ 
                        value: 30,
                        isSpentDay: false,
                        isToday: false
                    }}
                    handleDayClick={onDayClick}
                />
                <Day 
                    day={{ 
                        value: 30,
                        isSpentDay: false,
                        isToday: false
                    }}
                    handleDayClick={onDayClick}
                />
                <Day 
                    day={{ 
                        value: 30,
                        isSpentDay: false,
                        isToday: false
                    }}
                    handleDayClick={onDayClick}
                />                                                                               
            </div>
        </>
    )
}

function Weeks() {
    return (
        <>
            <div className="Weeks">
                <Week />
            </div>
        </>
    )
}

function ClndrBody() {
    return (
        <>
            <div className="ClndrBody">
                <Weeks />
                <Weeks />
                <Weeks />
                <Weeks />
                <Weeks />
                <Weeks />
            </div>
        </>
    )
}

function MonthAction() {
    const [months, ] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])

    const handleMonthChange = (e) => {
        for (let key in Object.keys(DayjsWrapper.month_map)) {
            if (e.target.value === key) {
                // set global object
                ClndrData.month = key
                break
            }
        }
    }

    return (
        <>
            <div className="MonthAction">
                <select
                    onChange={e => handleMonthChange(e)}
                >
                    {
                        months.map((month, key) => 
                            <option value={key} key={key}>{month}</option>
                        )
                    }
                </select>
            </div>
        </>
    )
}

function YearAction() {
    const [years, ] = useState([2022, 2023])

    const handleYearChange = (e) => {
        // @todo: provide a reasonable code here
        console.log(years[e.target.value])
    }

    return (
        <>
            <div className="YearAction">
            <select
                onChange={e => handleYearChange(e)}
            >
                    {
                        years.map((year, key) => 
                            <option value={key} key={key}>{year}</option>
                        )
                    }
                </select>
            </div>
        </>
    )
}

function DateActions() {
    return (
        <>
            <div className="DateActions">
                <MonthAction />
                <YearAction />
            </div>
        </>
    )
}

function DayTitles() {
    return (
        <>
            <div className="DayTitles">
                <div><span>M</span></div>
                <div><span>T</span></div>
                <div><span>W</span></div>
                <div><span>T</span></div>
                <div><span>F</span></div>
                <div><span>S</span></div>
                <div><span>S</span></div>

            </div>
        </>
    )
}

function ClndrHead() {
    return (
        <>
            <div className="ClndrHead">
                <DateActions />
                <DayTitles />
            </div>
        </>
    )
}

function Clndr() {
    return (
        <>
            <div className="Clndr">
                <ClndrHead />
                <ClndrBody />
            </div>
        </>
    )
}

export default Clndr