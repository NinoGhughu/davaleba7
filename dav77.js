// Დაბეჭდეთ რიცხვები 2 დან 8 მდე

// for (i = 2; i < 8; i++) {
//     console.log(i)
// }
// 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

// for (i = 5; i <= 35; i = i + 4) {

//     console.log(i)
// }
// 3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

// my_array = [3, 4, 5, 6, 7, 8]
// for (i = 0; i < my_array.length; i++) {
//     const element = my_array[i];
//     console.log(element * element)
// }
// 4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
// let person = {
//     FirstName: "Nino",
//     LastName: "Ghughunishvili",
//     Age: 36
// }

// console.log(person.FirstName + ' ' + person.LastName)
// 5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
// let person = {
//     FirstName: "Nino",
//     LastName: "Ghughunishvili",
//     Age: 36
// }
// console.log("FirstName", person.FirstName + ' ' + "LastName", person.LastName + ' ' + "Age", person.Age)

// 6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
// let fruits = ["Apple", "Banana", "Orange"]
// for (i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }
// 7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
// let fruits = ["Grapes", "Apple", "Banana", "Orange", "Pineapples"]
// for (i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }
// დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
// let sum = 0
// for (i = 1; i < 34; i++) {
//     console.log("ჯამი", sum, i)
//     sum = sum + i
// }