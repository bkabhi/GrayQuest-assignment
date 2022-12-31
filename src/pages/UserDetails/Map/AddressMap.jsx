import React from 'react'

const AddressMap = ({data}) => {
    return (
        <div className="location" >
            <iframe className="gmap_canvas"
                // src={`https://www.google.com/maps/search/?api=1&query=${data.address.geo.lat},${data.address.geo.lng}`}
                src={`https://maps.google.com/maps?q=${data.address.city}&t=&z=8&ie=UTF8&iwloc=&output=embed`}
                frameBorder='0'
                title='Location map'>
            </iframe>
        </div>
    )
}

export default AddressMap