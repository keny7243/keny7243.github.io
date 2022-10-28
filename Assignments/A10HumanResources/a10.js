let jsonEmployees= [
        {
            firstName : "Sam",
            department : "Tech",
            designation : "Manager",
            salary : 40000,
            raiseEligible : true
        },
        {
            firstName : "Mary",
            department : "Finance",
            designation : "Trainee",
            salary : 18500,
            raiseEligible : true
        },
        {
            firstName : "Bill",
            department : "HR",
            designation : "Executive",
            salary : 21200,
            raiseEligible : false
        }]

let jsonString = JSON.stringify(jsonEmployees);
let employeeString = "The employee JSON = "
console.log(employeeString + jsonString);



let jsonText = {
    companyName : "Tech Stars",
    website : "www.techstars.site",
    employees : jsonEmployees
}


jsonString = JSON.stringify(jsonText);
let companyString = "The company JSON = "
console.log(companyString + jsonString);

jsonEmployees.push ({
    firstName: "Anna", 
    department : "Tech",
    designation : "Executive",
    salary : 25600,
    raiseEligible : false
});

let addString = "Anna added to the JSON = "
jsonString = JSON.stringify(jsonText);
console.log(addString + jsonString);

let totalSalary = 0;
for(let z = 0; z < jsonEmployees.length; z++) {
    console.log(jsonEmployees[z].salary);
    totalSalary = totalSalary + jsonEmployees[z].salary;
  };

let salaryString = "The total salary of the employees is $"
console.log(salaryString + totalSalary +".");


for(let z = 0; z < jsonEmployees.length; z++) {
if (jsonEmployees[z].raiseEligible === true) {
    let newSalary = (jsonEmployees[z].salary * 0.10) + jsonEmployees[z].salary;
    jsonEmployees.raiseEligible = false;
};
}
console.log(newSalary);

/*
    It's raise time. If an employee is raise eligible, increase their salary by 10%. 
    Given the JSON of the company and its employees, write a function to 
    update the salary for each employee who is raised eligible, then set their eligibility to fal */