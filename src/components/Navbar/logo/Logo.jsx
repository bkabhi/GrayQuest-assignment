import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <NavLink to={'/'}>
                <img src="https://www.grayquest.com/images/logo.79d41fcf4ca037451114ee3794f3c343.png" alt="GrayQuest" />
            </NavLink>
        </>
    )
}

export default Logo