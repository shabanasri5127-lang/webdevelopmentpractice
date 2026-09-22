let employees = JSON.parse(localStorage.getItem("employees")) || [];

function saveData() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

function addEmployee() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const position = document.getElementById("position").value;
    const salary = document.getElementById("salary").value;
    const status = document.getElementById("status").value;

    if (!name || !department || !position || !salary) {
        alert("Please fill all fields!");
        return;
    }

    const employee = {
        id: Date.now(),
        name,
        department,
        position,
        salary: Number(salary),
        status
    };

    employees.push(employee);

    saveData();
    displayEmployees();
    clearForm();
}

function displayEmployees() {
    const table = document.getElementById("employeeTable");
    table.innerHTML = "";

    let totalSalary = 0;
    let active = 0;

    employees.forEach((emp, index) => {
        totalSalary += emp.salary;
        if (emp.status === "Active") active++;

        table.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.position}</td>
            <td>₹${emp.salary}</td>
            <td>${emp.status}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editEmployee(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        </tr>`;
    });

    document.getElementById("totalEmployees").innerText = employees.length;
    document.getElementById("activeEmployees").innerText = active;
    document.getElementById("salaryTotal").innerText = "₹" + totalSalary;
}

function deleteEmployee(index) {
    if (confirm("Delete this employee?")) {
        employees.splice(index, 1);
        saveData();
        displayEmployees();
    }
}

function editEmployee(index) {
    const emp = employees[index];

    document.getElementById("name").value = emp.name;
    document.getElementById("department").value = emp.department;
    document.getElementById("position").value = emp.position;
    document.getElementById("salary").value = emp.salary;
    document.getElementById("status").value = emp.status;

    employees.splice(index, 1);
    saveData();
    displayEmployees();
}

function searchEmployee() {
    const value = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#employeeTable tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("position").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("status").value = "Active";
}

displayEmployees();