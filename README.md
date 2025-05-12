# 🎓 E-learning Platform Backend

This is the backend of an **Online E-learning Platform** built with **Node.js**, **Express**, and **MongoDB**. It provides secure RESTful APIs for managing users, courses, lectures, and enrollments — without integrating any payment system.

---

## 🚀 Features

- 🔐 Role-based authentication (Student, Instructor, Admin)
- 🧾 JWT-based login with secure cookies
- 📚 Course creation with image uploads
- 🎬 Lecture upload and course assignment
- ✅ Free student enrollment system (no payment)
- 🛡 Security middleware (Helmet, Rate Limiting, Input Validation)

---

## 🎯 Skill Objectives

By completing this project, you will learn to:

1. Structure a modular backend with Node.js and Express.
2. Implement JWT authentication and role-based access control.
3. Handle file uploads using `multer` (for images and videos).
4. Design and relate `Course` and `Lecture` models in MongoDB.
5. Create an enrollment system with Mongoose references.
6. Apply backend security best practices.
7. Validate input using `express-validator`.

---

## 🧱 Tech Stack

- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT + Cookie Authentication**
- **Multer (for file uploads)**
- **Helmet + Rate Limit + express-validator**
- **Role-based Middleware**

---

## 📦 Project Setup

### 1. Clone and Install

```bash
git clone https://github.com/nagga91/online-e-learning-platform-backend.git
cd online-e-learning-platform-backend
npm install
