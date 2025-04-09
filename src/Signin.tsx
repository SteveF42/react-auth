
import { useAuth } from "./components/AuthProvider/AuthProvider";

const Signin = () => {
    const { login } = useAuth();

    return (
        <div className="flex justify-center h-screen">
            <button
                className="bg-blue-700 self-center p-4 rounded-md text-white hover:cursor-pointer"
                onClick={() => login()}>
                Signin
            </button>
        </div>
    );
};

export default Signin;
