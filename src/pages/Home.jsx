import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';
import Pagination from '../components/Pagination';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ Name: '', Address: '', Email: '', Phone: '' });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [totalPages, setTotalPages] = useState(1);

  const headers = {
    'projectId': '66ac1f3194de1e182152a7cf',
    'environmentId': '66ac1f3194de1e182152a7d0',
  };

  useEffect(() => {
    const fetchEmployees = () => {
      const offset = (currentPage - 1) * itemsPerPage;
      axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/employeee?limit=${itemsPerPage}&offset=${offset}`, { headers })
        .then(response => {
          setEmployees(response.data.data);
          if (response.data.page) {
            setTotalPages(Math.ceil(response.data.page.total / itemsPerPage));
          }
        })
        .catch(error => console.error('Error fetching employees:', error));
    };
    fetchEmployees();
  }, [currentPage,itemsPerPage,editingEmployee]);

  const handleNewEmployeeChange = (name, value) => {
    setNewEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = (data) => {
    axios.post('https://free-ap-south-1.cosmocloud.io/development/api/employeee', data, { headers })
      .then(response => {
        setEmployees(prev => [...prev, response.data]);
        setNewEmployee({ Name: '', Address: '', Email: '', Phone: '' });
        setEditingEmployee(null); // Close the form after adding
      })
      .catch(error => console.error('Error adding employee:', error));
  };

  const handleEditEmployeeChange = (name, value) => {
    setEditingEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateEmployee = (data) => {
    const { _id, ...employeeData } = data;
    axios.put(`https://free-ap-south-1.cosmocloud.io/development/api/employeee/${_id}`, employeeData, { headers })
      .then(response => {
        setEmployees(prev => prev.map(employeee => employeee._id === _id ? response.data : employeee));
        setEditingEmployee(null);
      })
      .catch(error => console.error('Error updating employee:', error));
  };

  const handleDeleteEmployee = (_id) => {
    axios.delete(`https://free-ap-south-1.cosmocloud.io/development/api/employeee/${_id}`, {
      headers,
      data: {}
    })
      .then(() => setEmployees(prev => prev.filter(employeee => employeee._id !== _id)))
      .catch(error => console.error('Error deleting employee:', error));
  };

  const handleNextPage = () => setCurrentPage(prev => prev + 1);
  const handlePreviousPage = () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employee Management</h1>

      <button
        onClick={() => setEditingEmployee({ Name: '', Address: '', Email: '', Phone: '' })}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Add New Employee
      </button>

      <EmployeeTable
        employees={employees}
        onEdit={setEditingEmployee}
        onDelete={handleDeleteEmployee}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />

      {editingEmployee !== null && (
        <EmployeeForm
          employee={editingEmployee}
          onSubmit={editingEmployee._id ? (data) => handleUpdateEmployee(data) : (data) => handleAddEmployee(data)}
          onChange={editingEmployee._id ? handleEditEmployeeChange : handleNewEmployeeChange}
          onClose={() => setEditingEmployee(null)}
        />
      )}
    </div>
  );
};

export default Home;
