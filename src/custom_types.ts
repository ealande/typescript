type students = {
    name: string;
    course?: string[];
    age: number;
}
const students = [
    {
        name: "carlos",
        course: ["Front-end", "UX,UI"],
        age: 27,
    },
    {
        name: "Ana",
        course: "Back-end",
        age: 29,
    },
]

students.push({
    name: "Julia",
    course: ["Architecture"],
    age: 29,
});

const newStudent: students = {
    name: "Joao",
    age: 25,
}

function showStudent(students: students){
    console.log(students.name)
}