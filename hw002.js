function calculateGrade (marks){
    switch(true){
        case(marks<40):
        return "Grade is C";
        case(marks > 41 && marks < 61):
        return "Grade is B";
        case (marks < 60  && marks <75):
        return "Grade is A";
        case(marks >75):
        return "Grade is A+"
        default:
        break;



    }
}
let Grade = calculateGrade(73)
console.log(Grade)
Grade = calculateGrade(50)
console.log(Grade)
Grade = calculateGrade(42)
console.log(Grade)