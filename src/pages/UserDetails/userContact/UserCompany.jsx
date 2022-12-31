import React from 'react'

const UserCompany = ({ data }) => {
    return (
        <div className='userdetails__company'>
            <p className='fontweight'> Company: </p>
            <p>Name: {data.company.name}</p>
            <p>bs: {data.company.bs}</p>
            <p>catchPhrase: {data.company.catchPhrase}</p>
        </div>
    )
}

export default UserCompany