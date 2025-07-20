import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your API call or validation here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl px-8 py-10 w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">Login</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white rounded-md py-2 font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>
        <div className="text-center text-sm text-gray-500 mt-2">
          Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  
);
}

export default LoginForm;
