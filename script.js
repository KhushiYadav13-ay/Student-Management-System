const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");

const totalStudentsElement = document.getElementById("totalStudents");
const averageCgpaElement = document.getElementById("averageCgpa");
const totalBranchesElement = document.getElementById("totalBranches");

const notification = document.getElementById("notification");

let students = JSON.parse(localStorage.getItem("students")) || [];


function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}


function showNotification(message, type) {

    notification.textContent = message;

    notification.style.display = "block";

    if (type === "success") {
        notification.style.background = "#16a34a";
    }

    if (type === "edit") {
        notification.style.background = "#2563eb";
    }

    if (type === "delete") {
        notification.style.background = "#dc2626";
    }

    setTimeout(function() {
        notification.style.display = "none";
    }, 2000);
}


function displayStudents() {

    studentTable.innerHTML = "";

    students.forEach(function(student, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.branch}</td>
            <td>${student.cgpa}</td>

            <td>
                <button onclick="editStudent(${index})">
                    Edit
                </button>

                <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        studentTable.appendChild(row);
    });

    updateDashboard();
}


studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const rollNo =
        document.getElementById("rollNo").value.trim();

    const name =
        document.getElementById("name").value.trim();

    const branch =
        document.getElementById("branch").value.trim();

    const cgpa =
        document.getElementById("cgpa").value.trim();


    if (
        rollNo === "" ||
        name === "" ||
        branch === "" ||
        cgpa === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


    if (Number(cgpa) < 0 || Number(cgpa) > 10) {

        alert("CGPA must be between 0 and 10.");

        return;
    }


    const existingStudent = students.find(function(student) {

        return student.rollNo === rollNo;

    });


    if (existingStudent) {

        alert("Roll number already exists.");

        return;
    }


    const student = {

        rollNo: rollNo,

        name: name,

        branch: branch,

        cgpa: cgpa

    };


    students.push(student);

    saveStudents();

    displayStudents();

    studentForm.reset();


    const addButton =
        studentForm.querySelector("button");


    addButton.style.background = "#16a34a";


    setTimeout(function() {

        addButton.style.background = "#222";

    }, 2000);


    showNotification(
        "Student added successfully!",
        "success"
    );

});


function deleteStudent(index) {

    const confirmDelete =
        confirm("Are you sure you want to delete this student?");


    if (confirmDelete) {

        students.splice(index, 1);

        saveStudents();

        displayStudents();

        showNotification(
            "Student deleted successfully!",
            "delete"
        );
    }
}


function editStudent(index) {

    const student = students[index];


    document.getElementById("rollNo").value =
        student.rollNo;

    document.getElementById("name").value =
        student.name;

    document.getElementById("branch").value =
        student.branch;

    document.getElementById("cgpa").value =
        student.cgpa;


    students.splice(index, 1);

    saveStudents();

    displayStudents();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    showNotification(
        "Student loaded for editing!",
        "edit"
    );
}


searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase().trim();


    const rows =
        studentTable.getElementsByTagName("tr");


    for (let row of rows) {

        const rollNo =
            row.cells[0].textContent.toLowerCase();

        const name =
            row.cells[1].textContent.toLowerCase();


        if (
            rollNo.includes(searchText) ||
            name.includes(searchText)
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }
    }
});


function updateDashboard() {

    totalStudentsElement.textContent =
        students.length;


    if (students.length === 0) {

        averageCgpaElement.textContent =
            "0.00";

    } else {

        let totalCgpa = 0;


        students.forEach(function(student) {

            totalCgpa += Number(student.cgpa);

        });


        const average =
            totalCgpa / students.length;


        averageCgpaElement.textContent =
            average.toFixed(2);
    }


    const branches = new Set();


    students.forEach(function(student) {

        branches.add(
            student.branch.toUpperCase()
        );

    });


    totalBranchesElement.textContent =
        branches.size;
}


displayStudents();