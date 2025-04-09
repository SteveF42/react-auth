import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import AuthProvider, { Roles } from "./components/AuthProvider/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Signin from "./Signin";

const router = createBrowserRouter([
    {
        element: <AuthProvider />,
        children: [
            {
                path: "/",
                element: (
                    <ProtectedRoute allowedRolls={[Roles.Admin]}>
                        <div>Hello world</div>
                    </ProtectedRoute>
                ),
            },
            {
                path: "/unauthorized",
                element: <div>Unauthorized</div>,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
