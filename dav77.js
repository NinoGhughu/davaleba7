// Დაბეჭდეთ რიცხვები 2 დან 8 მდე

// for (i = 2; i < 8; i++) {
//     console.log(i)
// }
// 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)

// for (i = 5; i <= 35; i = i + 4) {

//     console.log(i)
// }
// 3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი

my_array = [3, 4, 5, 6, 7, 8]
for (i = 0; i < my_array.length; i++) {
    const element = my_array[i];
    console.log(element * element)
}