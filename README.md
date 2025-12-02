## Live Demo
[Click here](https://developer-directory-seven.vercel.app/)


# Developer Directory App

A simple **Full-Stack Developer Directory App** built with **React, Node.js, Express, and MongoDB**.  
Users can **add developers**, **view the list**, and **search or filter** by role or tech stack.  

---

## Features

- Add developer details:
  - Name
  - Role (Frontend / Backend / Full-Stack / Mobile / Data Scientist, etc.)
  - Tech Stack (comma-separated)
  - Experience (years)
- View all developers in a **clean grid UI**
- **Search** by Name or Tech Stack
- **Filter** by Role
- **Responsive design** with Tailwind CSS
- **Toast messages** for success and error

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, Axios, react-hot-toast  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Atlas or local)  
- **Others:** CORS, dotenv  

---

## Project Structure

developer-directory/
│
├─ backend/
│ ├─ controllers/
│ │ └─ developer.controllers.js
│ ├─ models/
│ │ └─ developer.model.js
│ ├─ routes/
│ │ └─ developer.routes.js
│ └─ index.js
│
├─ frontend/
│ ├─ src/
│ │ ├─ components/
│ │ │ ├─ DeveloperForm.jsx
│ │ │ └─ DeveloperList.jsx
│ │ └─ App.jsx
│ └─ package.json
│
└─ README.md


---

## Setup & Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd developer-directory

2. Setup Backend
cd backend
npm install


Create .env file:

PORT=3000
MONGODB_URL=<your-mongodb-connection-string>
FRONTEND_URL=http://localhost:5173


Start the server:

node server.js
# or
nodemon server.js


✅ Backend runs on: http://localhost:3000

3. Setup Frontend
cd frontend
npm install
npm run dev


✅ Frontend runs on: http://localhost:5173

API Endpoints
1. Create Developer
POST /api/developer/createdevelopers


Body:

{
  "name": "Abhi Bharti",
  "role": "Full-Stack",
  "techStack": ["React", "Node.js", "MongoDB"],
  "experience": 2
}

2. Get All Developers
GET /api/developer/getalldevelopers


Response:

{
  "developers": [
    {
      "_id": "123",
      "name": "Abhi Bharti",
      "role": "Full-Stack",
      "techStack": ["React", "Node.js", "MongoDB"],
      "experience": 2
    }
  ]
}

Usage

Open frontend: http://localhost:5173

Add a developer using the form.

Go to the Developer List page to view all developers.

Use the search box or role filter to filter developers.


License

MIT License



