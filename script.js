
//Home Work 2

//1 less

// let a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - инкремент префиксный сначала прибавляет +1 (с=1+(a=1)), потом выводит значение через alert 
// d = b++; alert(d);           // 1 - здесь сначала выводит значение через alert (d= (b=1),  затем инкремент постфиксный прибавит +1
// c = (2+ ++a); alert(c);      // 5 - c = (2+ (1+2)), a уже имеет значение 2 к нему прибавляется +1, так как префиксиный инкремент
// d = (2+ b++); alert(d);      // 4 - c = (2+ 2) отработаботал раннее записаный постфиксный инкременет b = 2, в следующей записи b + 1 
// alert(a);                    // 3 - a уже ранее равно 3
// alert(b);                    // 3 - b после отработки постфиксноного инкримента равно 3

//2 les

// let a = 2;
// let x = 1 + (a *= 2); // x = 1 + (a = 2 * 2); a = 5 ;
// console.log(x); // проверка 

//3 les

// let numOne, numTwo, check ;
// namOne = parseInt(prompt('Введите число для переменной a: '));
// namTwo = parseInt(prompt('Введите число для переменной b: '));

// if (numOne >= 0 && numTwo >= 0){
//     check = numOne - numTwo;
//     console.log(check);
// } else if (numOne < 0 && numTwo < 0){
//     check = numOne * numTwo;
//     console.log(check);
// } else {
//     check = numOne + numTwo;
//     console.log(check);
//}

//4 les

// let checkSw = +prompt('Введите число от 0 до 15 : ');
// switch (checkSw) {
//     case 1:
//         console.log(1);
//     case 2:
//         console.log(2);
//     case 3:
//         console.log(3);
//     case 4:
//         console.log(4);
//     case 5:
//         console.log(5);
//     case 6:
//         console.log(6);
//     case 7:
//         console.log(7);
//     case 8:
//         console.log(8);
//     case 9:
//         console.log(9);
//     case 10:
//         console.log(10);
//     case 11:
//         console.log(11);
//     case 12:
//         console.log(12);
//     case 13:
//         console.log(13);
//     case 14:
//         console.log(14);
//     case 15:
//         console.log(15);
//         break;
// }

/// 5 les

// function operation(){
//     let a = Math.floor(Math.random()*100);
//     let b = Math.floor(Math.random()*100);

//     function sum(a, b){
//         return a + b; 
//     }

//     function subtraction(a, b){
//         return a - b; 
//     }

//     function division(a , b){
//         if (b!=0)
//             return a / b;
//         return "error!"
//     }

//     function multiplication(a , b){
//         return a * b;
//     }
// }

// //6 les
// function exaple(a, b, operation){
//     switch (operation) {
//         case ('+'):
//             return sum (a,b);
//         case ('-'):
//             return subtraction (a,b);
//         case ('/'):
//             return division (a,b);
//         case ('*'):
//             return multiplication (a,b);
//             break;
//         default:
//             return 'Error!';
//             break;

//     }
// }

//7 les


// function compare(a = 0, b = null){
//     console.log(a == b);
//     console.log(a >= b);
//     console.log(a != b);
// }


//8 les - сделаю к следующему уроку 

//9 less
// Ответ = !true
// let a = !true;
// console.log(a);


//10  Ответ: число 

// Bulls and Cows  - ДОДЕЛАТЬ!

// function generateNumber() {
//     let randomNumber = Math.floor(Math.random()*(10000 - 1000)+1000);
// }


// function bullsAndCows(n) {
//     let number = 1234; //подставить названиеДляГенерацииЧетырехЗначеногоЧисла() 
//     ...ваш код
// }

// bullsAndCows(n)

//Home Work 3

// 1 les

// let a = 2;
// while (a <= 100){
//     let b = 2;
//     while (b <= a){
//         if (a % b == 0){
//             break;
//         }
//         b++;
//     }
//     if (b == a ){
//         console.log(a);
//     }
//     a++;
// }

// // 2 les

// let banan = {
//     name: "Banan",
//     cost: 
// };

// let bread =  {
//     name: "Bread",
//     cost: 15
// };

// let water = {
//     name: "Water",
//     cost: 10
// }
// // let key = "cost";
// alert(banan["cost"]+bread["cost"]+banan["cost"]);


//3 les

// for (i = 0; i<9; i++, console.log(i)) { }

//4


//first variant 
// let score = '';

// for (i = 0; i < 20; i++) {
//     score += 'x';
//     console.log(score);  
// }





//second variant 

// let outputX = 1;

// switch(outputX){
//     case 1:
//         console.log("x");
//     case 2:
//         console.log("xx");
//     case 3:
//         console.log("xxx");
//     case 4:
//         console.log("xxxx");
//     case 5:
//         console.log("xxxxx");
//     case 6:
//         console.log("xxxxxx");
//     case 7:
//         console.log("xxxxxxx");
//     case 8:
//         console.log("xxxxxxxx");
//     case 9:
//         console.log("xxxxxxxxx");
//     case 10:
//         console.log("xxxxxxxxxx");
//     case 11:
//         console.log("xxxxxxxxxxx");
//     case 12:
//         console.log("xxxxxxxxxxxx");
//     case 13:
//         console.log("xxxxxxxxxxxxx");
//     case 14:
//         console.log("xxxxxxxxxxxxxx");
//     case 15:
//         console.log("xxxxxxxxxxxxxxx");
//     case 16:
//         console.log("xxxxxxxxxxxxxxxx");
//     case 17:
//         console.log("xxxxxxxxxxxxxxxxx");
//     case 18:
//         console.log("xxxxxxxxxxxxxxxxxx");
//     case 19:
//         console.log("xxxxxxxxxxxxxxxxxxx");
//     case 20:
//         console.log("xxxxxxxxxxxxxxxxxxxx");
// }

