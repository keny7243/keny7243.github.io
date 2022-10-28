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
let employeeString = "Problem 1: The employee JSON = "
console.log(employeeString + jsonString);



let jsonText = {
    companyName : "Tech Stars",
    website : "www.techstars.site",
    employees : jsonEmployees
}


jsonString = JSON.stringify(jsonText);
let companyString = "Problem 2: The company JSON = "
console.log(companyString + jsonString);

jsonEmployees.push ({
    firstName: "Anna", 
    department : "Tech",
    designation : "Executive",
    salary : 25600,
    raiseEligible : false
});

let addString = "Problem 3: Anna added to the JSON = "
jsonString = JSON.stringify(jsonText);
console.log(addString + jsonString);

let totalSalary = 0;
for(let z = 0; z < jsonEmployees.length; z++) {
    console.log(jsonEmployees[z].salary);
    totalSalary = totalSalary + jsonEmployees[z].salary;
  };

let salaryString = "Problem 4: The total salary of the employees is $"
console.log(salaryString + totalSalary +".");


for(let z = 0; z < jsonEmployees.length; z++) {
if (jsonEmployees[z].raiseEligible === true) {
    jsonEmployees[z].salary = (jsonEmployees[z].salary * 0.10) + jsonEmployees[z].salary;
    jsonEmployees[z].raiseEligible = false;
};
}

let raiseString = "Problem 5: Sam and Mary got a 10% raise and now are not raise eligible = "
jsonString = JSON.stringify(jsonText);
console.log(raiseString + jsonString);


jsonEmployees.forEach(element =>
    element.wfh = false
  );
for(let z = 0; z < jsonEmployees.length; z++) {
    if (jsonEmployees[z].firstName === "Anna" || jsonEmployees[z].firstName === "Sam") {
        jsonEmployees[z].wfh = true;
    };
    }

let wfhString = "Problem 6: Anna and Sam like to work from home = "
jsonString = JSON.stringify(jsonText);
console.log(wfhString + jsonString);

/*
    It's raise time. If an employee is raise eligible, increase their salary by 10%. 
    Given the JSON of the company and its employees, write a function to 
    update the salary for each employee who is raised eligible, then set their eligibility to fal */