import React from 'react'
import './ControlBar.css'

const ControlBar = ({handleNext,handlePrevius}) => {

    const anterior = '<-'
    const siguiente = '->'
    return (
        <div className='Botonera'>
            <button className='ButtonChange' onClick={handlePrevius}>{anterior}</button>
            <button className='ButtonChange' onClick={handleNext}>{siguiente}</button>
        </div>
    )
}

export default ControlBar
