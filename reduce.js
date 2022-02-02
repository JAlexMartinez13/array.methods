//##### 

const students =[{name: "Megan", frustrated: true, age:33},
                {name: "Emil", frustrated: true, age:32},
                {name: "Malibu", frustrated: false, age:19}
]

const sumOfAges = students.reduce((accumulator, stud) =>{
        return stud.age + accumulator

}, 0)

console.log(sumOfAges)