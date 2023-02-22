import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Loading/Loading';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContexts);
    const [admin] = useAdmin(user?.email);
    if (loading) {
        return <Loading></Loading>
    }
    if (admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default AdminRoute;