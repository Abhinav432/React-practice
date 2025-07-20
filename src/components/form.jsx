import React, { useState } from "react";

const initialState = {
    name: "",
    email: "",
    phone: "",
    number: "",
    date: "",
};

const validate = (values) => {
    const errors = {};
    if (!values.name.trim()) errors.name = "Name is required";
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }
    if (!values.phone) {
        errors.phone = "Phone is required";
    } else if (!/^\d{10,15}$/.test(values.phone)) {
        errors.phone = "Phone must be 10-15 digits";
    }
    if (!values.number) {
        errors.number = "Number is required";
    } else if (isNaN(values.number)) {
        errors.number = "Number must be numeric";
    }
    if (!values.date) errors.date = "Date is required";
    return errors;
};

export default function Form() {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            // Handle form submission logic here
        } else {
            setSubmitted(false);
        }
    };

    return (
        <section className="bg-gray-400 p-3">
        <form
            onSubmit={handleSubmit}
            noValidate
            className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name:
                </label>
                <input
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.name && (
                    <span className="text-xs text-red-500">{errors.name}</span>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email:
                </label>
                <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.email && (
                    <span className="text-xs text-red-500">{errors.email}</span>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone:
                </label>
                <input
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.phone && (
                    <span className="text-xs text-red-500">{errors.phone}</span>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number:
                </label>
                <input
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    type="number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.number && (
                    <span className="text-xs text-red-500">{errors.number}</span>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date:
                </label>
                <input
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {errors.date && (
                    <span className="text-xs text-red-500">{errors.date}</span>
                )}
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-md px-3 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                Submit
            </button>
            {submitted && (
                <div className="text-green-500 text-center">
                    Form submitted successfully!
                </div>
            )}
        </form>
        </section>
    );
}