// ############### Returns Single Element ################



const students =[{name: "Megan", frustrated: true, age:33},
                {name: "Emil", frustrated: true, age:32},
                {name: "Malibu", frustrated: false, age:19}
            ]

const isDrinkingAge = students.find(student => student.age >= 21)

console.log(isDrinkingAge)