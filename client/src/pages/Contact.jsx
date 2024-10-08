import React, { useState } from "react";
import { Datepicker } from "flowbite-react";

const ContactForm = () => {
  const today = new Date();
  const oneWeekFromToday = new Date(today);
  oneWeekFromToday.setDate(today.getDate() + 7);

  const [formData, setFormData] = useState({
    message: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(oneWeekFromToday);

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStartDateChange = (date) => {
    console.log("Start Date Selected:", date);
    setStartDate(date); // Update local start date
  };

  const handleEndDateChange = (date) => {
    console.log("End Date Selected:", date);
    setEndDate(date); // Update local end date
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!startDate) newErrors.startDate = "Start date is required.";
    if (!endDate) newErrors.endDate = "End date is required.";
    if (!formData.email) newErrors.email = "Email is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    console.log("Form submitted");
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation Errors:", validationErrors);
      setErrors(validationErrors);
      return;
    }

    const dataToSubmit = {
      ...formData,
      startDate,
      endDate,
    };

    console.log("Data to Submit:", dataToSubmit); // Log data to submit

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        setSubmissionStatus("Your message has been sent successfully.");
        setFormData({
          message: "",
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
        });
        setStartDate(today);
        setEndDate(oneWeekFromToday);
        setErrors({});
        console.log(response);
      } else {
        const errorText = await response.text();
        console.log("Response Error:", errorText); // Log response error text
        setSubmissionStatus("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Catch Error:", error); // Log any caught errors
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
                readOnly={false}
                title="Start Date"
                onChange={handleStartDateChange} // Ensure date is a Date object
              />
            </div>
            <span className="mx-4 text-black-500">to</span>
            <div className="relative w-full ml-2">
              <Datepicker
                readOnly={false}
                title="End Date"
                onChange={handleEndDateChange} // Ensure date is a Date object
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
