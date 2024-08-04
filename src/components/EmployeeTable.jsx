import React from 'react';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="border-b">
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Address</th>
          <th className="p-2 text-left">Phone</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp._id} className="border-b hover:bg-gray-100">
            <td className="p-2">{emp.Name}</td>
            <td className="p-2">{emp.Address}</td>
            <td className="p-2">{emp.Phone}</td>
            <td className="p-2">{emp.Email}</td>
            <td className="p-2">
              <button onClick={() => onEdit(emp)} className="bg-yellow-500 text-white p-1 rounded mr-2">Edit</button>
              <button onClick={() => onDelete(emp._id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
