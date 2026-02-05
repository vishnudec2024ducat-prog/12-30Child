import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import ModalForm from './Components/ModalForm'

const App = () => {
  return (
    <div className='container'>
      <ModalForm/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App