import React from 'react'
import { useParams } from 'react-router-dom';
import { useDataQuery } from '../../Redux/userAPI';
import CloseButton from '../../components/Buttons/Close/CloseButton';
import UserContact from './userContact/UserContact';
import UserCompany from './userContact/UserCompany';
import UserAddress from './userContact/UserAddress';
import AddressMap from './Map/AddressMap';

const UserDetails = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useDataQuery({id})
    
    if(isLoading){
        return <h1>...Loading</h1>
    }
    console.log(data);
    if(isError){
        return <h1>Something went Wrong</h1>
    }
    return (
        <div>
            <h2>User Details</h2>
            <div className='userdetails'>
                <div>
                    <UserContact data={data}/>
                    <UserCompany data={data}/>
                </div>
                <div>
                    <UserAddress data={data}/>
                    <AddressMap data={data}/>
                </div>
            </div>
            <CloseButton/>
        </div>
    )
}

export default UserDetails