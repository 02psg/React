import React from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            {user ? (
                <h1>Welcome {user.name} and your password {user.password}</h1>

            ) : (
                <div>Please login</div>
            )}
        </>
    );
};

export default Profile;