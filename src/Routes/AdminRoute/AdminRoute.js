import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Loading/Loading';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContexts);
    const [Admin, adminLoading] = useAdmin(user?.email);
    // console.log(admin)
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (user && Admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default AdminRoute;