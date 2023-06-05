import React from 'react';
import { Navigate } from 'react-router';
import { selectAuth } from '../../app/modules/auth/authSlice';
import { useSelector } from 'react-redux';

const PrivateRoute = ({element}) => {
    const authData = useSelector(selectAuth);

    
    return authData.user ? (
        element
      ) : (
        <Navigate to="/auth/login" replace />
      )
}

export default PrivateRoute;