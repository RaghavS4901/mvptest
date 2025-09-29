javascript
import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="flex-1 outline-none"
              placeholder="Enter your username"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="flex-1 outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
