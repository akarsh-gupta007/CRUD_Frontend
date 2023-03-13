import React from 'react'
import Alldetail from './Alldetail'
import Userform from './Userform'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div className='apps'>
            {/* <Userform />
            <Alldetail /> */}

            <Router>
                <Routes>
                    <Route path="/" element={<Userform />} />
                    <Route path="/Alldetail" element={<Alldetail />} />
                </Routes>


            </Router>


        </div>
    )
}

export default App