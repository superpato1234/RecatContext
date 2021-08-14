import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {
    const {selectedUser}= useContext(UserContext);
    return (
        <>
            {
                selectedUser ? (<div className="card card-body text-center">
                    <img src={selectedUser.avatar} className="card-img-top rounded-circle m-auto img-fluid" style={{ width: 100}}></img>
                    <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                    <h3>{`${selectedUser.email}`}</h3>
                    </div>): (<h1>No user selected yet</h1>)
            }
        </>
    )
}

export default Profile
