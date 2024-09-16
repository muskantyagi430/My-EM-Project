import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Service/EmployeeService";

const EmployeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(() => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });}
    const editEmployee1 = (e, id) => {
      e.preventDefault();
      navigate(`/editEmployee/${id}`);
    };


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container mx-10 my-10 ">
      <div>
        <button
          className="bg-slate-600 hover:bg-blue-700  my-12 font-semibold px-20 py-2"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div>
        <table className="shadow">
          <thead className="bg-slate-600">
            <th className="px-6 py-3 uppercase tracking-wide">Name</th>
            <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
            <th className="px-6 py-3 uppercase tracking-wide">Email</th>
            <th className="px-6 py-3 uppercase tracking-wide">Action</th>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <tr className="hover:bg-white  hover:text-black">
                  <td className="text-left px-6 py-6 whitespace-nowrap">
                    {employee.name}
                  </td>
                  <td className="text-left px-6 py-6 whitespace-nowrap">
                    {employee.phone}
                  </td>
                  <td className="text-left px-6 py-6 whitespace-nowrap">
                    {employee.email}
                  </td>
                  <td className="text-left px-6 py-6 whitespace-nowrap">
                    <a
                      onClick={(e, id) => editEmployee1(e, employee.id)}
                      className=" hover:text-green-500 hover:cursor-pointer"
                      href="/"
                    >
                      
                      Edit 📝
                    </a>
                    <a
                      onClick={(e, id) => deleteEmployee(e, employee.id)}
                      className=" hover:text-red-500 hover:cursor-pointer"
                      href="/"
                    >
                      
                      Delete 🗑️
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeList;
