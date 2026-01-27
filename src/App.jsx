import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Travels from './pages/Travels.jsx'
import Home from './pages/Home'
import DefaultLayouts from './layouts/DefaultLayouts'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route path='/' element={<Home />} />
            <Route path='/travels/:slug' element={<Travels />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
