import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import MoreButton from '../../components/Buttons/MoreDetails/MoreButton';
import ContactIcons from '../../components/ContactIcons/ContactIcons'

const User = ({ user }) => {
    return (
        <div className='userCard'>
            <div className='userCard__details'>
                <FaUserCircle size={100} color="#adadad" />
                <div>
                    <div className='userCard__name'>
                        <h4>Name: {user.name}</h4>
                        <p>Username: {user.username}</p>
                    </div>
                    <MoreButton user={user} />
                </div>
            </div>
            <ContactIcons user={user} />
        </div>
    )
}

export default User