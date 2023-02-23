import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/AuthContext';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import Loading from '../../Loading/Loading';

const SellerAdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContexts);
    const location = useLocation();
    const [Admin, adminLoading] = useAdmin(user?.email);
    const [seller, sellerLoading] = useSeller(user?.email);

    if (loading || adminLoading || sellerLoading) {
        return <Loading></Loading>
    }
    if (user && (Admin || seller)) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerAdminRoute;