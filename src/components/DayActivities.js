import '../styles/DayActivities.css'
// import DayjsWrapper from '../utils/DayjsWrapper'

function DayActivityLabel({year, month, day}) {
    return (
        <>
            <div className="DayActivityLabel">
                 {/* <div className="DayActivityLabel-text">17th Dec, 2022</div> */}
                 <div className="DayActivityLabel-text">{day}{" "}{month}{", "}{year}</div>
            </div>
        </>
    )
}

function ActivitiesControl() {
    return (
        <>
            <div className="ActivitiesControl">
                <ActivitiesLabel/>
                <ActivitiesActions/>
            </div>
        </>
    )  
}

function ActivitiesLabel() {
    return (
        <>
            <div className="ActivitiesLabel">
                 <div className="ActivitiesLabel-text">Daily spending activities</div>
            </div>
        </>
    )
}

function ActivitiesActions() {
    return (
        <>
            <div className="ActivitiesActions">
                 <button className="ActivitiesLabel-btn ActivitiesLabel-btn__add">Add</button>
                 <button className="ActivitiesLabel-btn ActivitiesLabel-btn__rem">Remove</button>
            </div>
        </>
    )
}

function TotalDailyMoneySpentLabel() {
    return (
        <>
            <div className="TotalDailyMoneySpentLabel">
                <div className="TotalDailyMoneySpentLabel-text">Total money spent today:</div>
            </div>
        </>
    )
}

function TotalDailyMoneySpent() {
    return (
        <>
            <div className="TotalDailyMoneySpent">
            <div className="TotalDailyMoneySpent-text">$50,000</div> 
            </div>
        </>
    )
}

function ActivityTotal() {
    return (
        <>
            <div className="ActivityTotal">
                <TotalDailyMoneySpentLabel/>
                <TotalDailyMoneySpent/>
            </div>
        </>
    )
}

function ActivityItems() {
    return (
        <>
            <div className="ActivityItems">
                <ActivityItem index={1}/>
                <ActivityItem index={2}/>
                 <ActivityItem index={3}/>
                <ActivityItem  index={4}/>
                <ActivityItem index={5}/>
                <ActivityItem  index={6}/>
                <ActivityItem  index={7}/>
                <ActivityItem  index={8}/>
                <ActivityItem  index={9}/>
                <ActivityItem  index={10}/>
                <ActivityItem  index={11}/>
                <ActivityItem  index={12}/>
                <ActivityItem  index={13}/>
                <ActivityItem  index={14}/>
                <ActivityItem  index={15}/> 
                <ActivityItem  index={16}/>
                
            </div>
        </>
    )
}

function ItemIndex({index}) {
    return (
        <>
            <div className="ItemIndex">
                <div className="ItemIndex-text">{index}</div>
            </div>
        </>
    )
}

function ItemDesc() {
    return (
        <>
            <div className="ItemDesc">
                <div className="ItemDesc-text">
                    $300 transport from Eko hotel to CMS
                </div>
            </div>
        </>
    )
}

function ItemTotal() {
    return (
        <>
            <div className="ItemTotal">
                <div className="ItemTotal-text">
                    $150,000
                </div>
            </div>
        </>
    )
}

function ActivityItem({index}) {
    return (
        <>
            <div className="ActivityItem">
                <ItemIndex index={index} />
                <ItemDesc />
                <ItemTotal />
            </div>
        </>
    )
}

function DayActivities({year, month, day}) {
    return (
        <>
            <div className="DayActivities">
                <DayActivityLabel year={year} month={month} day={day}/>
                <ActivitiesControl />
                <ActivityItems />
                <ActivityTotal />
            </div>
        </>
    )
}

export default DayActivities