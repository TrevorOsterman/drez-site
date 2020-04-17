import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav () {
    return (<nav>
        <Link to="/">Home</Link>
        <Link to='/services'>Services & Booking</Link>
        <Link to='/contact'>Contact</Link>
    </nav>)
}