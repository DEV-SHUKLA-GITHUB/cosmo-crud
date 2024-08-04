import React, { useEffect, useState } from 'react';

const EmployeeForm = ({ employee, onSubmit, onChange, onClose }) => {
  const [formData, setFormData] = useState(employee);

  useEffect(() => {
    setFormData(employee);
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    onChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{employee._id ? 'Edit Employee' : 'Add New Employee'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={formData.Name || ''}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="text"
            name="Address"
            placeholder="Address"
            value={formData.Address || ''}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="number"
            name="Phone"
            placeholder="Phone"
            value={formData.Phone || ''}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={formData.Email || ''}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {employee._id ? 'Update Employee' : 'Add Employee'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
