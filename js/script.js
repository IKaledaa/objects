// const userInfo = {
//     name : "Вася"
//     age : 30
// }     
//Запись не верна, так как нет запятых

// let userInfo = {
//     name: "Вася",
//     age : 30,
//     "58" : 'Значение свойства'
// }
// console.log(userInfo[58]);
//В консоли будет выведено 'значение свойства'

// let userInfo = {
//     name : "Lena",
//     age : 30,
// }
// let user = userInfo;
// user.age = 48;

// console.log(user.age);
//В консоли будет просто "48"

// let userInfo = {
//     name : "Вася",
//     age : 30,
//     showInfo() {
//         console.log(`${this.name}`);
//     }
// }
// let user = userInfo;
// userInfo = null;
// user.showInfo();
//В консоли будет выведено "Вася", но для userInfo выведется ошибка.

// let userInfo = {
//     name : "Вася",
//     age : 30,
// }
// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }
// //В консоли выводятся значение свойств: Вася
//                                         30.


// let userInfo = {
//     name : "Вася",
//     age : 30,
//     "likes js" : true,
// }

// console.log(userInfo."likes js");
                                
//В консоли будет ошибка, так как свойство состоит из двух слов и оно должно быть в таком случае в квадратных скобках.
//Правильный вариант:

// let userInfo = {
//     name : "Вася",
//     age : 30,
//     ["likes js"] : true,
// }

// console.log(userInfo["likes js"]);

// В консоли будет "true"

// let userInfo = {
//     name : "Вася",
//     age : 30,
//     adress : {
//         city : "Minsk",
//     }
// }
// for (const key in userInfo.adress) {
//     console.log(userInfo.adress[key]);
// }

// В консоли будет "Minsk"

// let userInfo = {
//     name : "Вася",
//     age : 30,
//     "likes js" : true,
// }
// console.log(userInfo."lokes js");
// //Запись не верна, так как нужны квадратные скобки из-за 2-ух слов

// let userInfo = {
//     name : "Lena",
//     age : 34,
// }
// userInfo.name = "Vasya";

// console.log(userInfo);
// The name changed from "Lena" to "Vasya"


let userInfo = {
    name : "Lena",
    age : 34,
}
userInfo.name = "Vasya"
delete userInfo.name;

console.log(userInfo);
//Имя было изменено, а затем удалено. В итоге выведено только {age: 34}

