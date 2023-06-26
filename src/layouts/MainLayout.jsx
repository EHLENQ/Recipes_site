import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Theme from '../components/Theme'
import './MainLayoutCss.css'
import { ThemeContext } from '../context/ThemeContext'


function MainLayout() {
  const { mode } = useContext(ThemeContext);

  return (
    <>
    <div className={`background-${mode}`}>

        <Navbar/>
        <Theme/>
        <div className='container'>
            <Outlet />
        </div>
    </div>
    </>
  )
}

export default MainLayout