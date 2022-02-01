//### will always return an array with the same number of elements. ######## example 1
//##### one new element for each old element. Able to change them. ##### example 2

const students =[{name: "Megan", frustrated: true, age:33},
                {name: "Emil", frustrated: true, age:32},
                {name: "Malibu", frustrated: false, age:19}
]


//const studentList = students.map(stud => stud.name)  //example 1

const studentList = students.map(stud => [{         //example 2
    name: stud.name,
    school: 'Boca Code',
    term: 'winter2022',
    course: 'swecc'
}])


console.log(studentList)