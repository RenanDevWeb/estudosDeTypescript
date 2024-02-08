// Day 5 - Exercise 4

interface iEmployee {
  title: string,
  salary: number
}

class Employee  implements iEmployee{
    constructor(public title: string, public salary: number) { }
  }

  const employee = new Employee('Engineer', 100000);

  console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
