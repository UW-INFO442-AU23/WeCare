import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const ProtectedRoute = ({ component: Component, redirectTo }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Component /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
