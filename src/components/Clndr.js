import '../styles/Clndr.css'

function Day() {
    return (
        <>
            <div className="Day">

            </div>
        </>
    )
}

function Week() {
    return (
        <>
            <div className="Week">
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
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
    return (
        <>
            <div className="MonthAction">
                <select>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </select>
            </div>
        </>
    )
}

function YearAction() {
    return (
        <>
            <div className="YearAction">
            <select>
                    <option>2022</option>
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