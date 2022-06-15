import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import AdminPage from './Components/AdminPage'
import HomePage from './Components/HomePage'
import HousesPage from './Components/HousesPage'
import RentalsPage from './Components/RentalsPage'
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
          <Route path='/Rentals' element={<RentalsPage />} />
          <Route path='/Admin' element={<AdminPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='CreateAccount' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
