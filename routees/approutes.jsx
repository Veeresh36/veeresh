import React from 'react'
import Home from '../src/pages/heropage'
import Navbar from '../src/components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function approutes() {
    return (
        <>
                <Navbar />
            <Routes>
                <>
                    <Route path='/' element={<Home />} />
                </>
            </Routes>
        </>
    )
}

export default approutes
