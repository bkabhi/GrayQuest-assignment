import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDetails from '../pages/UserDetails/UserDetails'
import Users from '../pages/Users/UsersList'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/users/:id' element={<UserDetails />} />
            </Routes>
        </>
    )
}

export default AllRoutes