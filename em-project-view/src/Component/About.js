import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();

    const goToAddEmployee = () => {
        navigate('/'); 
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-4xl p-8 bg-blue-500 shadow-lg rounded-lg">
                <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
                    About Employee Management System
                </h1>
                <p className="text-lg text-gray-950 mb-6">
                    Our Employee Management System is designed to help organizations to streamline their workforce management processes. From adding new employees to tracking their performance, our system offers a comprehensive solution to manage your team's information efficiently.
                </p>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-950 mb-6">
                    <li className="mb-2">Add, edit, and delete employee records</li>
                    <li className="mb-2">Generate detailed reports</li>
                    <li className="mb-2">Secure and user-friendly interface</li>
                </ul>
                <p className="text-lg text-gray-950">

                The system allows for efficient management of employee data, providing functionalities such as adding
                new employees, updating existing employee details, retrieving employee information, and deleting
                employee records. This project demonstrates the integration of a full-stack application with a robust
                backend and a dynamic, user-friendly frontend interface.
                </p>
                <p className="text-lg to-blue-500 text-gray-950">
                Whether you are a small business or a large enterprise, our system is designed to scale with your needs. Join us in making employee management more efficient, transparent, and effective.
                </p>
                <button
                onClick={goToAddEmployee}
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
                Go to website
            </button>
            </div>
        </div>
    );
}

export default About;
