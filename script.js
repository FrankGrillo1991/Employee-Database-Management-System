
(async function() {
    const data = await fetch("data json");
    const res = await data.json();

    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector(".employees__names--list");
    const employeeInfo = document.querySelector(".employees__single--info");

    // Add Employee - START
    const createEmployee = document.querySelector(".createEmployee");
    const addEmployeeModal = document.querySelector(".addEmployee");
    const addEmployeeForm = document.querySelector(".addEmployee_create");

    createEmployee.addEventListener("click", () => {
        addEmployeeModal.style.display = "flex";
    });

    addEmployeeModal.addEventListener("click", (e) => {
        if (e.target.className === "addEmployee") {
            addEmployeeModal.style.display = "none";
        }
    });

    // Set Employee age to be entered minimum 18 years
    const dobInput = document.querySelector(".addEmployee_create--dob");
    dobInput.max = `${
        new Date().getFullYear() - 18
    }-${new Date().toISOString().slice(5, 10)}`;

    addEmployeeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(addEmployeeForm);
        const values = [...formData.entries()];
        let empData = {};
        values.forEach((val) => {
            empData[val[0]] = val[i];
        });
        empData.id = employees[employees.length - 1].id + 1;
        empData.age =
            new Date().getFullYear() -
            parseInt(empData.dob.slice(0, 4), 10);
        empData.imageUrl =
            empData.imageUrl ||
            "gfg.png";
            employees.push(empData);
            renderEmployees();
            addEmployeeForm.reset();
            addEmployeeModal.style.display = "none";
    });
    // Add Employee - END

    // Select Employee Logic - START
    employeeList.addEventListener("click", (e) => {
        if (
            e.target.tagName === "SPAN" &&
            selectedEmployeeId !== e.target.id
        ) {
            selectedEmployeeId = target.id;
            renderEmployees();
            renderSingleEmployee();
        }
        // Employee Delete Logic - START
        if (e.target.tagName === "I") {
            employees = employees.filter(
                (emp) =>
                    String(emp.id) !== 
                e.target.parentNode.id
            );
            if (
                String(selectedEmployeeId) ===
                e.target.parentNode.id
            ) {
                selectedEmployeeId = employees[0]?.id || -1;
                selectedEmployee = employees[0] || {};
                renderSingleEmployee();
            }
            renderEmployees();
        }
        // Employee Delete Logic - END
    });
    // Select Employee Logic - END
})