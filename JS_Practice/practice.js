// class Person{
//     age=25
//     //location="Canada"
//     get location(){ //its not a method.. it's a getter property
//         return "Canada"
//     }
//     constructor(fName,lName){ //constructor is a method which executes by default when an obj is created
//         console.log("In Constructor")
//         this.fName = fName
//         this.lName = lName
//     }
//     //methods
//     fullName(){
//         return this.fName+" "+this.lName
//     }
// }

// let person = new Person("Tim","Joe")
// console.log(person.age) //25
// console.log(person.location) //Canada
// console.log(person.fullName()) //Tim Joe

// let fruits = ["apple","mango"];
// //access
// console.log(fruits[1]);//mango
// //add an element to the end of array
// fruits.push("grape");
// //add element to the beginning of array
// fruits.unshift("banana");
// console.log(fruits);
//remove an element by index
// console.log(fruits.splice(index, 1));
// console.log(fruits.splice(1,3));
//iterate
// fruits.forEach((fruits,index)=>{
//     console.log(`${index} : ${fruits}`);
// })


// console.log("1");
// setTimeout(function(){
//     console.log("2");
// },2000);
// console.log("3");

function fetchData(callback){
    const data = "Sample data";
	callback(data);
}
function processData(data){
	console.log("Processing: "+data);
}
fetchData(processData);


// function fetchData(callback){
//     return new Promise((resolve)=>{    
//         const data = "Sample data";
//         callback(data);
//         resolve(data);
//     });
// }
// function processData(data){
// 	console.log("Processing: "+data);
// }
// fetchData().then(function(data)){
//     processData();
// }
// //OR
// const data = await fetchData();
// processData();

// console.log(5=='5');
// console.log(5==='5');

// let a = null
// console.log(a)
// console.log(typeof a)
// let b
// console.log(b)
// console.log(typeof b)

const students = [{name:"alice",score:45},
{name:"john",score:66},
{name:"mark",score:34},]

const passedStudents = students.filter(students=>students.score>=35);
console.log(passedStudents)
console.log(passedStudents.map(passedStudents=>passedStudents.name.toUpperCase()))
const totalScore = passedStudents.reduce(function(acc,student){
    acc = acc+student.score;
    return acc;
},0)
console.log(totalScore);