// // var - Redeclare and reassign allowed

// // let - Only reassign allowed
// // const - Both were not allowed

// var a=4		
// console.log(typeof(a)) //number
// let b=5		
// const pi=3.14	//number .. JS treats int, float, decimal all as numbers
// console.log(typeof(pi))
// let name="John"	
// console.log(typeof(name)) //string
// // let c=6		//Redeclaration not allowed but reassign is possible by c=6
// var c=a+b	
// console.log(c) //9 - Redeclaration alloed and operation performed
// let d=true	
// console.log(typeof(d)) //boolean
// let e=null	
// console.log(typeof(e)) //object
// let f=undefined	
// console.log(typeof(f)) //undefined
// let g		
// console.log(typeof(g)) //undefined

// var marks = [20,30,40]

// marks[1] = 33
// console.log(marks[1]) 	//33
// console.log(marks[0]) 	//20
// console.log(marks.length) //3
// marks.push(65) 		//adding new element 
// console.log(marks) 	//[ 20, 33, 40, 65 ]
// marks.pop() 		//deletes last element
// marks.unshift(10)	//adds new element in the beginning at index 0
// console.log(marks)  //[ 10, 20, 33, 40 ]
// console.log(marks.includes(20))  //true/false
// let s = marks.slice(2,5)
// console.log(s)      //[ 33, 40 ]

// let total = marks.reduce((sum,mark)=>sum+mark,0) //here 0 is ths initial value of sum instead of assigning garbage value
// console.log(total)

// let day = 'tuesday '
// console.log(day.length) //8
// let subDay = day.slice(0,4)
// console.log(subDay) //tues
// console.log(day[1]) //u
// let splitDay = day.split("s")
// console.log(splitDay[0] +" "+splitDay[1]) //tue day
// console.log(splitDay[1].length) //4
// console.log(splitDay[1].trim().length) //3

// let date = '23'
// let nxtdt = '27'
// let diff = parseInt(nxtdt) - parseInt(date)
// console.log(diff)
// diff.toString()

// let text = "Friday is Funday"
// console.log(text)
// console.log(text.indexOf("day")) //3 - index
// console.log(text.indexOf("day",5)) //13 - 5 means starts from 5th index and it is optional

let person={
    fName : 'John',
    lName : 'Mark',
    age : 29 ,
    fullname : function(){
         return this.fName+this.lName
    }
}
console.log(person.fullname()) //JohnMark
console.log(person.fName) //John
console.log(person['fName']) //John
person.fName='Tim'
person.gender='Male'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person) //checking if obj exist or not

for(let key in person){
    console.log(key +" : "+person[key]) 
}
/*fName : Tim
lName : Mark*/


let fruits = ["apple","mango"];
//access
console.log(fruits[1]);//mango
//add an element to the end of array
fruits.push("grape");
//add element to the beginning of array
fruits.unshift("banana");
//remove an element by index
console.log(fruits.splice(index, 1));
// console.log(fruits.splice(1,3));