                                          //  Modiul --- 22
                                            

// Concept ===>   For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

                                        
/*
********  Practice Task   5
*/ 

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function calculateTotalMonthlySalary(employees){
    // console.log(employees);

    let totalMonthlySalary = 0;
    for (const employe of employees){
        // console.log(employe);
        const employeTotalSelary = employe.experience * employe.increment + employe.starting;
        totalMonthlySalary = totalMonthlySalary + employeTotalSelary;
        // console.log(totalMonthlySalary);
    }
    return totalMonthlySalary;

}

const totalMonthlySalary = calculateTotalMonthlySalary(employees);
console.log("Total monthly salary to be provided by the company:", totalMonthlySalary);
