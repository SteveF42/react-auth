import React from "react";
import { useAuth } from "./components/AuthProvider/AuthProvider";

const Home = () => {
    const { user } = useAuth();
    
    return <div>Home</div>;
};

export default Home;
