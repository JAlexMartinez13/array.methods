//####### Will always return an Boolean #########

const students =[{name: "Megan", frustrated: true, age:33},
                {name: "Emil", frustrated: true, age:32},
                {name: "Malibu", frustrated: false, age:19}
            ]
            
            
//is there at least one elem in arr that matches our criteria
const isDrinkingAge = students.some(student => student.age >= 21)     //True

console.log(isDrinkingAge)