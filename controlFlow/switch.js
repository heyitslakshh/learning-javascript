// syntax->

// switch (expression) {
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     case value2:
//         // code to be executed if expression === value2
//         break;
//     default:
//         // code to be executed if expression doesn't match any case
// }

const month = "March";

switch (month) {
    case "January":
        console.log("It's January");
        break;
    case "February":
        console.log("It's February");
        break;
    case "March":
        console.log("It's March");
        break;
    default:
        console.log("It's not January, February, or March");
}