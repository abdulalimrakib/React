import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../layouts/Navbar'

const Index = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Index