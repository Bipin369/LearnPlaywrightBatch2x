let severity = 8;

switch(severity)
{
    case 1:
    case 2:
    case 3:
        console.log("Output: Severity: Low");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Output: Severity: Medium");
        break;
    case 7:
    case 8:
        console.log("Output: Severity: High");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Output: Severity: Critical — Block release");
        break;
    default:
        console.log("invalid Score");
        break;
}