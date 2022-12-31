import React from 'react'
import { Link } from 'react-router-dom'

const MoreButton = ({user}) => {
    return (
        <Link to={`/users/${user.id}`}>
            <button className='moreButton'>More Details</button>
        </Link>
    )
}

export default MoreButton