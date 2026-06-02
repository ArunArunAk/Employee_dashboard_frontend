# Employee Management Dashboard - Frontend

## Overview

This is the frontend application for the Employee Management Dashboard built using React.js. The application provides authentication, employee management, analytics visualization, search, filtering, and pagination.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Token Storage
* Protected Routes
* Logout Functionality
* Form Validation using React Hook Form and Zod

### Employee Management

* Add Employee
* Update Employee
* Delete Employee
* Employee Listing

### Search & Filters

* Search by Name
* Search by Email
* Filter by Department
* Filter by Status
* Debounced Search

### Analytics Dashboard

* Total Employees
* Active Employees
* Inactive Employees
* Department Wise Count
* Employee Status Distribution

### Other Features

* Pagination
* Loading States
* Error Handling
* Responsive Bootstrap UI

---

## Tech Stack

* React.js
* React Router DOM
* Axios
* React Hook Form
* Zod
* Bootstrap
* Recharts
* React Hot Toast

---

## Folder Structure

```bash
src
├── api
├── components
│   ├── common
│   ├── dashboard
│   └── employee
├── context
├── hooks
├── pages
├── routes
├── validation
├── App.jsx
└── main.jsx
```

---

## Installation

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

---

## Environment Variables

Create a .env file

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Screens

* Login Page
* Registration Page
* Dashboard
* Employee CRUD
* Analytics Dashboard

---

## Author

Arun Kumar

GitHub: https://github.com/ArunArunAk
