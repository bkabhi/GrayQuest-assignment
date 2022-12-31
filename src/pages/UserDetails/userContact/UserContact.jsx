import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const UserContact = ({data}) => {
    return (
        <div className='userdetails__contact'>
            <FaUserCircle size={120} color="#adadad" />
            <p><span className='fontweight'>Name: </span> {data.name} </p>
            <p><span className='fontweight'>Email: </span> {data.email} </p>
            <p><span className='fontweight'>Username: </span> {data.username} </p>
            <p><span className='fontweight'>Phone: </span> {data.phone} </p>
            <p><span className='fontweight'>Website: </span>
                <a href={`https://${data.website}/`} target='_blank' rel="noreferrer">{data.website}</a>
            </p>
        </div>
    )
}

export default UserContact