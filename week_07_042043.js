// // array is used series of values
// let boy = "i am a boy"
// const fruits= ["chess","cherry","Apple"]
// const newArr= new Array[]

// Array Methods
// 1. length

const fruits= ["chees","cherry","Apple","Mango","Orange"]
console.log(fruits.length)
console.log(fruits.at(0))
fruits.pop() // this is used to remove the last item i an array
console.log(fruits)
fruits.push("grape") //push is used to add new item at the end of an array
console.log(fruits)
// shift method is used to remove the first array element
fruits.unshift("bread")
console.log(fruits)
// Changing the index of an item in an array
fruits[1]="Cashew"
console.log(fruits)
// delete methid is use to delete an element in an array
delete fruits[0]
console.log(fruits)
console.log(fruits[0])
// concat method combines 2 arrays together
// so let's create a new array
const foodstuff=["Rice","Beans","Spagetti"]
const balanced_diet= fruits.concat(foodstuff)
console.log(balanced_diet)
// flat is used for combining seperated array into one
const recomemended_food =[["bread"],["egg"],["beans"]]
const best_food = recomemended_food.flat()
console.log(best_food)
// map method is used to map over an array an return new value
// call back function
// const flatData= data.map((element,index,arr) =>{ retun x}
const data= [1,2,23,34,54,55]
const flatData= data.map((x) => {return x})
console.log(flatData)
// Flat Map. 
const data_1= [1,2,23,34,54,55,66]
const mapData= data_1.map((x) => {
    return [x, x * 3]
})

console.log(mapData)
const data_2= [1,2,23,34,54,55,66]
const flatmapData= data_1.flatMap((x) => {
    return [x, x * 3]
})
console.log(flatmapData)
// SPLICING
// .splice(parameter 1,parameter 2, parameter 3)
// where parameter 1 is the start position of the element to be added
// parameter 2 is the Number of element to be removed
// parameter 3 are the elements to be added to the  list

const data_30= [1,2,23,34,54,55,66]
console.log(data_30)
 data_30.splice(0,2,233,5,7,"cashe",5,6,600,)
console.log(data_30)
// ASSIGNMENT : READ AND STUDY ON splice(),titler(),find(),some(),every(),reduce()-

