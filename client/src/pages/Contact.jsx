import React, { useState } from "react";
import { Datepicker } from "flowbite-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    startDate: null,
    endDate: null,
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (dates) => {
    const { startDate, endDate } = dates;
    setFormData({ ...formData, startDate, endDate });
    console.log(formData);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.startDate) newErrors.startDate = "Start date is required.";
    if (!formData.endDate) newErrors.endDate = "End date is required.";
    if (!formData.email) newErrors.email = "Email is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Your message has been sent successfully.");
        setFormData({
          subject: "",
          message: "",
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
          startDate: "",
          endDate: "",
        });
        setErrors({});
      } else {
        setSubmissionStatus("There was an error sending your message.");
      }
    } catch (error) {
      setSubmissionStatus("There was an error sending your message.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        {/* firstname */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
            className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        {/* lastname */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
            className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
        {/* date range */}
        <div className="mb-4">
          <label
            htmlFor="dateRange"
            className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
          >
            Desired Dates
          </label>
          <div className="flex items-center">
            <div className="relative w-full mr-2">
              <Datepicker
                title="Start Date"
                onChange={(date) =>
                  handleDateChange({ ...formData, startDate: date })
                }
                id="startDate"
                name="startDate"
              />
            </div>
            <span className="mx-4 text-black-500">to</span>
            <div className="relative w-full ml-2">
              <Datepicker
                title="End Date"
                onChange={(date) =>
                  handleDateChange({ ...formData, endDate: date })
                }
                id="endDate"
                name="endDate"
              />
            </div>
          </div>
        </div>

        {/* message */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="We love questions! Ask us anything."
            required
            className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        {/* email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        {/* phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
          >
            Phone | WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(optional)"
            className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        {errors.contact && (
          <p className="text-red-500 text-sm">{errors.contact}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </form>

      {submissionStatus && (
        <p className="mt-4 text-green-500">{submissionStatus}</p>
      )}
    </div>
  );
};

export default ContactForm;
