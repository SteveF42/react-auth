import React, { PropsWithChildren } from "react";
import { Roles, useAuth } from "../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router";



type ProtectedRouteTypes = PropsWithChildren & {
    allowedRolls?: Roles[];
};

const ProtectedRoute = ({
    children,
    allowedRolls,
}: ProtectedRouteTypes) => {
    const { user } = useAuth();
    if (user === null) return <Navigate to={"/signin"} />;

    if (allowedRolls && allowedRolls.some((x) => user.roles.includes(x)))
        return <Navigate to={"/unauthorized"} />;

    return children;
};

export default ProtectedRoute;
