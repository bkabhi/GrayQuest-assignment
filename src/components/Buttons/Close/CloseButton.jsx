import React from 'react'
import { Link } from 'react-router-dom'

const CloseButton = () => {
    return (
        <Link to={'/'}>
            <button className='closebutton'>Close</button>
        </Link>
    )
}

export default CloseButton