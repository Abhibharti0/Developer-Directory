import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DeveloperList = () => {
  const [developers, setDevelopers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Fetch all developers from backend
  const fetchDevelopers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/developer/getalldevelopers",
          { withCredentials: true }
      );
      console.log("Fetched developers:", res.data.developers);
      setDevelopers(res?.data?.developers || []);
    } catch (error) {
      console.error("Error fetching developers:", error);
      setDevelopers([]);
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  // Apply search & role filter if user types/selects
  const filteredDevelopers = (developers || []).filter((dev) => {
    const matchesSearch =
      search
        ? dev.name.toLowerCase().includes(search.toLowerCase()) ||
          (dev.techStack || []).join(", ").toLowerCase().includes(search.toLowerCase())
        : true;

    const matchesRole = roleFilter ? dev.role === roleFilter : true;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-black bg-opacity-40 text-white shadow-lg">
        <h1 className="text-2xl font-bold text-yellow-400">Developer Directory</h1>
        <Link
          to="/"
          className="px-4 py-2 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-600"
        >
          Add Developer
        </Link>
      </header>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          List of Developers
        </h2>

        {/* Search + Role Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by Name or Tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 w-full border rounded-lg shadow"
          />

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="p-3 w-full md:w-1/3 border rounded-lg shadow"
          >
            <option value="">Filter by Role</option>
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
        </div>

        {/* Developer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDevelopers.length > 0 ? (
            filteredDevelopers.map((dev) => (
              <div
                key={dev._id}
                className="bg-white rounded-xl shadow-lg p-5 border hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-bold text-gray-800">{dev.name}</h3>
                <p className="text-gray-600 mt-1">
                  <span className="font-semibold">Role:</span> {dev.role}
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {(dev.techStack || []).join(", ")}
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-semibold">Experience:</span> {dev.experience} years
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700 mt-10 text-lg font-medium">
              No developers found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeveloperList;
