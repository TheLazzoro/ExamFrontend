import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import AdminPage from './Components/AdminPage'
import CreateHousePage from './Components/CreateHousePage'
import CreateRentalPage from './Components/CreateRentalPage'
import HomePage from './Components/HomePage'
import HouseDetails from './Components/HouseDetails'
import HouseDetailsAdmin from './Components/HouseDetailsAdmin'
import HousesPage from './Components/HousesPage'
import RentalAgreementPage from './Components/RentalAgreementPage'
import UserPage from './Components/UserPage'
import UserRentals from './Components/UserRentals'
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
          <Route path='/User' element={<UserPage />} >
            <Route path='/User/UserRental' element={<UserRentals />} />
          </Route>
          <Route path='/User/HouseDetails' element={<HouseDetails />} />
          <Route path='/Admin' element={<AdminPage />} >
            <Route path='/Admin/Houses' element={<HousesPage />} />
            <Route path='/Admin/Rentals' element={<RentalAgreementPage />} />
            <Route path='/Admin/CreateHouse' element={<CreateHousePage />} />
            <Route path='/Admin/CreateRental' element={<CreateRentalPage />} />
          </Route>
          <Route path='/Admin/HouseDetails' element={<HouseDetailsAdmin />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='CreateAccount' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
