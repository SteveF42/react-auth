import {
    Children,
    createContext,
    PropsWithChildren,
    useContext,
    useState,
} from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

export enum Roles {
    Admin = "Admin",
    User = "User",
    Viewer = "Viewer",
}

type User = {
    id: number;
    roles: Roles[];
    token: string;
};
type AuthType = {
    user: User | null;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthType | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const login = () => {
        return setTimeout(() => {
            setCurrentUser({
                id: 321,
                roles: [Roles.User],
                token: "jfiupoas83y",
            } as User);
            console.log("navigate");
            return navigate("/");
        }, 1000);
    };

    const logout = () => {
        setCurrentUser(null);
        return <Navigate to="/signin" />;
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                user: currentUser,
            }}>
            <Outlet />
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("Auth context must be used inside auth provider");
    }

    return context;
};

export default AuthProvider;
