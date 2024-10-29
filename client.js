// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  // creating an empty array to store the employee
    let employeeBonus = []
    // loop over all employees 
    // check employeeRating

      // ! Outer loop
    for ( const employee of employees){
      console.log(`current employee:, ${employees.name}`)


      // ! Inner loop
      for ( const money of employees.annualSalary){
        console.log(`${employees.name} makes: ${employees.annualSalary}`)
      }

      // check review rating 
      if ( employees.reviewRating <= 2 ){
       console.log('employee gets no bonus')
      }else if (employees.reviewRating === 3 ) { 
       let newMoney = `.04 * ${employees.annualSalary}`
       employeeBonus.push(newMoney)
       } 

       }
     
  }
  // return new object with bonus results
  return  'new object'
}