/* This function  will tell the
 user grade acccording to their marks
 */

// Declare a fuction
const gradingSystem = () => {
    // Declare marks and give it the value of 2
    var marks = 85;
    // Switch satement having marks and the grading system
switch (marks) {
    case 90:
        console.log("grade 1");
        break;
    case 85:
        console.log("grade 2");
        break;
    case 70:
        console.log("grade 3");
        break;
    case 65:
        console.log("grade 4");
        break;
    case 50:
        console.log("grade 5");
        break;
    case 40:
        console.log("grade 6");
        break;
    case 25:
        console.log("grade U");
        break;
    default:
        console.log("No any other grading system")
}
}
// calling a function
gradingSystem()