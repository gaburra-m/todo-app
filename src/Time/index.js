import React from 'react'
import "./Time.css"

function Time() {
    const date = new Date().toLocaleTimeString('en-US',{ hour12: true })
    const minusDate = date.toLowerCase()
    return (
        <section className='container'>
            <p className='time'>Que no se te pase ningún TODO, son las <span className='date'>{minusDate}</span></p>
        </section>
    )
}

export default Time