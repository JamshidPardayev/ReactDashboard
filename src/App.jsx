import React from 'react'
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";


import AutheLayout from './pages/layout'
import Registration from './pages/reg'
import Login from './pages/login'
import Dashboard from './pages/dashboard';



function App() {
 

  return (
    <section>
      <Router>
        <Routes>
          
          <Route element={<AutheLayout/>}>
            <Route path='/' element = {<Registration/>}></Route>
            <Route path='Login' element = {<Login/>}></Route>
            <Route path='Dashboard' element = {<Dashboard/>}></Route>
          </Route>
          {/* <Route path='home' element={<Home/>}></Route> */}
          {/* <Route path='Teachers' element={<Teachers/>}></Route> */}


        </Routes>
      </Router>
    </section>
  )
}

export default App