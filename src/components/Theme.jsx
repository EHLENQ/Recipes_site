import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useState } from 'react';
const colors = ['primary' , 'success' , 'warning' , 'danger']

function Theme() {

  const { selectTheme , setMode } = useContext(ThemeContext);  
  const [mode,SetMode] = useState('light');

  const setModeDark = () => {
    setMode('dark');
    SetMode('dark');
  }

  const setModeLight = () => {
    setMode('light');
    SetMode('light');
  }
    

  return (
    <div className='container d-flex justify-content-between my-2 align-items-center border-bottom pb-2'>
        <div>
            {
                (mode === 'light') ?
                <i onClick={() => setModeDark()} style={{cursor: 'pointer'}} className="bi bi-moon display-6 "></i>
                :
                <i onClick={() => setModeLight()} style={{cursor: 'pointer'}} className="bi bi-brightness-high display-6"></i>
            }
        </div>
        <div className="colors">
            {
                colors.map(color => (
                    <span 
                    className={`bg-${color} btn m-1`}
                    onClick={ () => selectTheme(color)}>
                        
                    </span>
                ))
            }
        </div>
    </div>
  )
}

export default Theme