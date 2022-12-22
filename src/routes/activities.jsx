import DayActivities from '../components/DayActivities'
import {useLoaderData} from 'react-router-dom'

export async function loader({params}) {
    return params.dateId
}

// export async function action({request, params}) {
    
// }

export default function Activities() {
    const date = useLoaderData()


    return (
        <>
            <DayActivities
             year={date.year} 
             month={date.month} 
             day={date.day}
            />
        </>
    )
}