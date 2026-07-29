class playwright2xBatch {
    static batchName = "Playwright 2x Batch";

    constructor(stuName, stuAge) {
        this.stuName = stuName;
        this.stuAge = stuAge;
    }

    // Non-Static Method
    print() {
        console.log("Student Name:", this.stuName);
        console.log("Student Age:", this.stuAge);
    }
    // Static Method
    static printBatch() {
        console.log("Batch Name =", playwright2xBatch.batchName);
    }
}

const students = [
    new playwright2xBatch("Bipin", "33"),
    new playwright2xBatch("Jatin", "32"),
    new playwright2xBatch("Sachin", "31"),
    new playwright2xBatch("Vijay", "30"),
    new playwright2xBatch("Preethi", "29"),
    new playwright2xBatch("Raji", "35"),
    new playwright2xBatch("Rahul", "34"),
    new playwright2xBatch("Neha", "36"),
    new playwright2xBatch("Sakshi", "37"),
    new playwright2xBatch("Shashi", "38"),
]

students.forEach(s => s.print());
// `printBatch` is a static method on the class — call it on the class, not on instances
playwright2xBatch.printBatch();
