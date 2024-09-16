import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    You have been logged out
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Thank you for your time and dedication.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
                >
                    Log back in
                </button>
            </div>
        </div>
    );
}

export default Logout;