import React from 'react'

const UserAddress = ({ data }) => {
    return (
        <div className='userdetails__address'>
            <p className='fontweight'> Address: </p>
            {/* <p>{`${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`}</p> */}
            <p>Street: {data.address.street}</p>
            <p>Suite: {data.address.suite}</p>
            <p>City: {data.address.city}</p>
            <p>Zipcode: {data.address.zipcode}</p>
        </div>
    )
}

export default UserAddress