var myName = "Oyedele Samuel";
var myCourses = ["HTML", "CSS", "JavaScript", "Go", "C#", "Kotlin", "UI/UX Design", "PHP", "NodeJS"];

console.log(myName);

for (let index = 0; index < myCourses.length; index++) {
    console.log(myCourses[index]);  
}

if (myCourses.length%2==1) {
    for (let i = 0; i <= 200; i++) {
        if (i%2!=0) {
            console.log(i);
        }
    }
}