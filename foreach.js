// ########## will bring out the value of an object that you are looking for #########


const students =[{name: "Megan", frustrated: true, age:33},
                {name: "Emil", frustrated: true, age:32},
                {name: "Malibu", frustrated: false, age:19}
            ]



const isDrinkingAge = students.forEach(student => {

    console.log('name: ', student.name)
    console.log('age: ', student.age)

})

console.log(isDrinkingAge)