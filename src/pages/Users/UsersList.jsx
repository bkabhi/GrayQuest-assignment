import React, { useState } from 'react'
import User from './User';
import { useAllDataQuery } from '../../Redux/userAPI';

const limit = 6;

const Users = () => {
    const [page, setpage] = useState(1);
    const { data, isLoading, isError, isSuccess } = useAllDataQuery({ limit, page });

    return (
        <>
            <h2>Users List</h2>
            <div className='userlist'>
                {
                    isLoading && <h1>Loading...</h1>
                }
                {
                    isError && <h1>Error...</h1>
                }
                {
                    isSuccess && data.map((user, i) => (
                        <User key={user.id} user={user} />
                    ))
                }
            </div>
            <div className='paginationdiv'>
                <button className='prevbtn' onClick={() => setpage(page - 1)} disabled={page<=1}>Prev</button>
                <button className='currentPagebtn'>{page}</button>
                <button className='prevbtn' onClick={() => setpage(page + 1)} disabled={page>=2}>Next</button>
            </div>
        </>

    )
}

export default Users