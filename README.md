# Lab 7 – Sequelize Practice

This repository contains two exercises using Sequelize ORM with SQLite:

- **EX-2:** Author & Books (one-to-many relationship)
- **EX-3:** Attendance Tracker (multiple relationships, REST API)

---

## EX-2: Author & Books

### Description

- **Author**: name, birthYear
- **Book**: title, publicationYear, pages
- An author can write many books, but a book is written by one author.

### Features

- Defines Sequelize models and their relationships.
- Creates sample data (3 authors, each with at least 2 books).
- Runs queries:
  - Fetch all books by a given author.
  - Create a new book for an existing author using `.createBook()`.
  - List all authors along with their books.

## EX-3: Attendance Tracker

### Description

- **Student**
- **Class**
- **AttendanceRecord** (tracks each student’s attendance per day)
- Relationships:
  - A student can have many attendance records.
  - A class can have many attendance records.
  - Each attendance record belongs to one student and one class.

### REST API Endpoints

| Method | Endpoint                                 | Description                                      |
|--------|------------------------------------------|--------------------------------------------------|
| POST   | `/attendance?studentId=1&classId=1&date=YYYY-MM-DD | Mark attendance for a student in a class on a given date |
| GET    | `/attendance?studentId=1&date=YYYY-MM-DD` | Get attendance for a student on a specific date  |
| GET    | `/classes/:id/attendance`                | List attendance for all students in a class      |
| GET    | `/students/:id/attendance`               | Get attendance summary for a student             |

## Requirements

- Node.js
- npm
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.sqlite.org/index.html)
- [Express](https://expressjs.com/) (for EX-3)
