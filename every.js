// ############# Returns a Boolean #################

const students =[{name: "Megan", frustrated: true, age:33},
                {name: "Emil", frustrated: true, age:32},
                {name: "Malibu", frustrated: false, age:19}
            ]


const areAllFrustrated = students.every(student => student.age >= 21) //False

console.log(areAllFrustrated)