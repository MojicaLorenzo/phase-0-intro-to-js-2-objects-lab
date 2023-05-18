const employee = { 
    name: "Aki",
    streetAddress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = { ...employee };
    newEmployee[name] = streetAddress;
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { ...employee };
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey (employee, name) {
    delete employee.name
    return employee
}