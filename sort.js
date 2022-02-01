//####### Sorts an array in either way A-Z(-1, 1) or Z-A(1, -1)  ###########

const students =[{name: "Megan", frustrated: true, age:33},
                {name: "Emil", frustrated: true, age:32},
                {name: "Malibu", frustrated: false, age:19}
]


const studentsAtoZ = students.sort((a,b) => {

    if(a.age < b.age){
        return -1
    }
    return 1

})


console.log(studentsAtoZ)