import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes