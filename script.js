console.log("*****Exercise 1 : Checking The BMI*****")

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

let person1 = {
    fullName : "Peter",
    mass : 80,
    height : 180,
    bmiCalculate1 : function () {
        return person1.mass / (person1.height * person1.height)
    }
}

let person2 = {
    fullName : "Doe",
    mass : 75,
    height : 190,
    bmiCalculate2 : function () {
        return person2.mass / (person2.height * person1.height)
    }
}

// Outside of the objects, create a JS function that compares the BMI of both objects
function bmi() {
    if (person1.bmiCalculate1() > person2.bmiCalculate2()) {
        console.log(`${person1.fullName} has the largest BMI. BMI : ${person1.bmiCalculate1()}`)
    } else if (person1.bmiCalculate1() < person2.bmiCalculate2()){
        console.log(`${person2.fullName} has the largest BMI. BMI : ${person2.bmiCalculate2()}`)
    } else {
        console.log(`${person1.fullName} and ${person2.fullName} has the same BMI. BMI Person 1 : ${person1.bmiCalculate1()}, BMI Person 2 : ${person2.bmiCalculate2()}`)
    }
}

bmi()

console.log("*****Exercise 2 : Grade Average*****")

let sum = 0
let average = 0

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
function findAvg(gradesList) {
    for (let i = 0; i < gradesList.length; i++) {
        // Your function must calculate and console.log the average
        sum += gradesList[i]
        average = sum / gradesList.length
    }

    console.log(average)
    
    // If the average is above 65 let the user know they passed
    if (average > 65) {
        console.log("Passed")
    } else {
        console.log("Failed, repeat course")
    }
}

findAvg([10, 150, 12, 109, 100])


// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.