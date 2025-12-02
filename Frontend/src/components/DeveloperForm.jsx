import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BackendURL } from "../utils";

const DeveloperForm = () => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    techStack: "",
    experience: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Basic validation
  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.role) return "Role is required.";
    if (!form.techStack.trim()) return "Tech Stack is required.";
    if (form.experience == null || form.experience < 0)
  return "Experience must be 0 or more.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${BackendURL}/api/developer/createdevelopers`,
    
        form,
        { withCredentials: true }
      );

      toast.success(response.data.message);
      setErrorMessage("");

      setForm({
        name: "",
        role: "",
        techStack: "",
        experience: ""
      });

    } catch (error) {
      if (error.response) {
        setErrorMessage(
          Array.isArray(error.response.data.errors)
            ? error.response.data.errors.join("\n")
            : error.response.data.message || "Something went wrong!"
        );
      } else {
        setErrorMessage("Network error!");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-blue-300 ">

      {/* ⭐ Navbar */}
      <header
        className="
          w-full flex items-center justify-between 
          px-6 py-4 mb-10
          bg-black bg-opacity-50 backdrop-blur-md
          shadow-lg 
        "
      >
        <h1 className="text-2xl font-bold text-orange-500">Developer Directory</h1>
        <nav>
          <Link
            to="/list"
            className="text-black border-l p-2 rounded-2xl bg-amber-500 hover:text-orange-400 transition"
          >
            List of Developers
          </Link>
        </nav>
        
      </header>

      {/* ⭐ Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Developer Directory
        </h1>
        <p className="text-gray-600 mt-2">
          Add and manage developer profiles easily
        </p>
      </div>

      {/* ⭐ Form Container */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 max-w-xl w-full space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Add Developer
          </h2>

          {errorMessage && (
            <p className="text-red-600 text-center whitespace-pre-line">
              {errorMessage}
            </p>
          )}

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={update}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <select
            name="role"
            value={form.role}
            onChange={update}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Role</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full-Stack</option>
            <option>Mobile Developer</option>
            <option>Data Scientist</option>
            <option>Machine Learning Engineer</option>
            <option>AI Engineer</option>
            <option>Cloud Engineer</option>
            <option>DevOps Engineer</option>
            <option>Security Engineer</option>
            <option>QA Engineer</option>
            <option>Blockchain Developer</option>
            <option>IoT Developer</option>
            <option>Game Developer</option>
          </select>

          <input
            name="techStack"
            placeholder="Tech Stack"
            value={form.techStack}
            onChange={update}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience (years)"
            value={form.experience}
            onChange={update}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-lg 
                        transition bg-blue-600 hover:bg-blue-700 
                        ${loading && "opacity-50 cursor-not-allowed"}`}
          >
            {loading ? "Submitting..." : "ADD"}
          </button>
        </form>
      </div>

    </div>
  );
};

export default DeveloperForm;
