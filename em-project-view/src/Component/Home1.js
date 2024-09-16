import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home1= () => {
    const navigate = useNavigate();

    const goToAddEmployee = () => {
        navigate('/'); // Assuming you have a route set up for AddEmployee
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-gray-800 mb-8">
                Employee Management System
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Manage your employees easily and efficiently.
            </p>
            <button
                onClick={goToAddEmployee}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                Add New Employee
            </button>
        </div>
    );
}

export default Home1;
