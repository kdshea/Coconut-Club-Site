import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/main.scss'
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import Landing from './components/Landing'
import About from './components/About'
import Location from './components/Location'
import Menu from './components/Menu'
import Shop from './components/Shop'
import Groups from './components/Groups'
import Accommodation from './components/Accommodation'
import Lessons from './components/Lessons'
import Photos from './components/Photos'
import RouteButtons from './components/common/RouteButtons'
import IGGrid from './components/common/IGGrid'

function App() {
  return (
    <div className = "App">
        <BrowserRouter>
          <NavBar /> 
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/location' element={<Location />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/accommodation' element={<Accommodation />} />
            <Route path='/lessons' element={<Lessons />} />
            <Route path='/photos' element={<Photos />} />
          </Routes>
          <RouteButtons />
          <IGGrid />
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
