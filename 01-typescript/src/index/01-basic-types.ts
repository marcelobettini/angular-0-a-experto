// tipado estático e inferencia de tipos
let firstName = "Marcelo"
let lastName: string = "Bettini" //best practice

let isProfessor: boolean = true
let isStudent: boolean = true
let courses: number = 5


//union tyupes

let mixedTypes: number | string = "Hola Mundo"
mixedTypes = 12

let mixedWithConstantValue: number | "COUNT STOPPED"
mixedWithConstantValue = 1
mixedWithConstantValue = 99
mixedWithConstantValue = "COUNT STOPPED"

console.log({
    'First Name': firstName,
    "Last Name": lastName,
    "Is Professor": isProfessor,
    "Is Student": isStudent,
    "Courses": courses
})
export { }