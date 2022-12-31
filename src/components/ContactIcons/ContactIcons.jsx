import React from 'react'
import { FaLink } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'

const iconstyle = {
    // color: '#3e52ce'
    color:"#adadad"
}

const ContactIcons = ({user}) => {
    return (
        <div className='contactIcons'>
            <a href={`tel:${user.phone}`}><IoCall size={20} style={iconstyle} /></a>
            <a href={`mailto:${user.email}`}><HiMail size={20} style={iconstyle} /></a>
            <a href={`https://${user.website}/`} target='_blank' rel="noreferrer">
                <FaLink size={20} style={iconstyle} />
            </a>
        </div>
    )
}

export default ContactIcons