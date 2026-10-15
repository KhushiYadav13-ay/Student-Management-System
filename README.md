# Student Management System

A responsive Student Management System built using C++, HTML, CSS, and JavaScript. The project provides an interactive dashboard to manage student records, search student information, and track student statistics such as total students, average CGPA, and total branches.

## Features

### Web Application
- **Add Student:** Add student details, including roll number, name, branch, and CGPA.
- **Edit Student:** Load existing student details into the form for updating.
- **Delete Student:** Remove student records with confirmation.
- **Search Students:** Search student records by name or roll number.
- **Interactive Dashboard:** Display total students, average CGPA, and total branches.
- **Data Persistence:** Store student records in browser Local Storage.
- **Responsive Design:** User-friendly interface for desktop and mobile screens.
- **Form Validation:** Validate required fields, CGPA range, and duplicate roll numbers.

### C++ Console Application
- Add student records through a console menu.
- Store student information in a text file using file handling.
- Display student details during data entry.
- Exit the application through the console menu.

## Technologies Used

- **C++** – Console-based student record management
- **HTML5** – Web page structure
- **CSS3** – Styling and responsive layout
- **JavaScript** – Interactive functionality and record management
- **Browser Local Storage** – Persistence of web application records
- **File Handling** – Storing C++ application records in a text file

## Project Structure

```text
Student-Management-System/
│
├── index.html
├── style.css
├── script.js
├── main.cpp
└── README.md
```

## How to Run

### Run the Web Application

1. Open the project folder in Visual Studio Code.
2. Open `index.html` in a web browser, or use the Live Server extension.
3. Add student details using the form.
4. Search, edit, or delete student records using the available actions.

### Run the C++ Application

1. Open `main.cpp` in a C++ IDE or editor.
2. Compile the source code using a C++ compiler.
3. Run the compiled executable.
4. Select the available menu options to add student records or exit the program.

## Data Storage

- The web application stores student records in the browser's Local Storage.
- The C++ console application stores student information in `students.txt`.
- The web application and C++ console application maintain separate data storage and do not automatically share records.

## Future Improvements

- Add sorting and filtering options for student records.
- Improve the editing workflow to update records directly.
- Enhance form validation and error handling.
- Integrate a database for persistent and centralized data storage.
- Connect the web interface and C++ application to a shared data source.

## Author

**Khushi Yadav**

- GitHub: [KhushiYadav13-ay](https://github.com/KhushiYadav13-ay)
- LinkedIn: [Khushi Yadav](https://www.linkedin.com/in/khushi-yadav-b35489357/)
