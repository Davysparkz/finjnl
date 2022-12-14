import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './components/App';
//import Activities, {
//  loader as activitiesLoader
//} from './routes/activities';
//import EditDayActivity from './components/EditDayActivity'
import Clndr from './components/Clndr'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider, 
} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
        path="/"  
        element={
          <Clndr />
        }
    >
      {/* <Route
        path="day_activities/:dateId"
        element={<Activities />}
        loader={activitiesLoader}  
      /> */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
