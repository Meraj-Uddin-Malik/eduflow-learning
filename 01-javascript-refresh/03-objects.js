const student = {
    stdName: "John Doe",
    className: "10th Grade",
    feePaid: true,
}

// console.log(student) // Output: { stdName: 'John Doe', className: '10th Grade', feePaid: true }
// console.log({stdName: student.stdName, className: student.className, feePaid: student.feePaid }) // Output: { stdName: 'John Doe', className: '10th Grade', feePaid: true }

student.feePaid = false;
student.age = 15;

delete student.age;
console.log(student) // Output: { stdName: 'John Doe', className: '10th Grade', feePaid: false }