import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import AdminPage from './Components/AdminPage'
import CreateHousePage from './Components/CreateHousePage'
import CreateRentalPage from './Components/CreateRentalPage'
import HomePage from './Components/HomePage'
import HouseDetails from './Components/HouseDetails'
import HousesPage from './Components/HousesPage'
import UserPage from './Components/UserPage'
import './index.css'
import CreateAccount from './routes/CreateAccount'
import NotFound from './routes/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Houses' element={<HousesPage />} />
          <Route path='/User' element={<UserPage />} />
          <Route path='/User/HouseDetails' element={<HouseDetails />} />
          <Route path='/Admin' element={<AdminPage />} >
            <Route path='/Admin/Houses' element={<HousesPage />} />
            <Route path='/Admin/CreateHouse' element={<CreateHousePage />} />
            <Route path='/Admin/CreateRental' element={<CreateRentalPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='CreateAccount' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
