// const a = 20;
// const b = 10;
// const result = a + b;
// console.log(result);

// const g = 20;
// const k = 20;
// const resalt = g > k;
// console.log(resalt);

// const g = 20;
// const k = 20;
// const resalt = g == k;
// console.log(resalt);

// const a = "16";
// console.log(typeof(a));
// const b = 16;
// console.log(typeof(b));
// const result = a !== b; // = Перевіряє числа, приклад перевіряє. == Перевіряє числа. === Перевіряє все, навіть лапки, перевіряє суворий режим. Якщо додати ! то буде протилежне значення, але максимум два дорівнює
// console.log(result);

// console.log(17 % 4); // Остача ділення

// console.log(12 % 2 === 0); // === це парні числа. Перевірка чисел, виводиться true або false.
// console.log(13 % 2 !== 0); // !== це непарні числа. Перевірка чисел, виводиться true або false.

// const message = prompt("Введіть ваш вік: ");
// const age = alert(`Ваш вік - ${message}`);

// const age = 13; // це number
// console.log(typeof(age));
// // const message = prompt("Введіть ваш вік: "); // це string
// const message = Number(prompt("Введіть ваш вік: ")); // Конструктор Number перетворив promt на number
// console.log(typeof(message));
// const result = age === message;
// console.log(result);

// const question = prompt("Який відступ задати?");
// // const result = Number.parseInt(question); // Ціле число. Прибирає букви, крапки та коми прибирає. Прибирає все після букв
// const result = Number.parseFloat(question); // Плаваюча кома. Прибирає тільки букви, крапки або коми не чіпає. Прибирає все після букв
// console.log(result);

// const a = 0.1;
// const b = 0.2;
// const c = a + b;
// const d = c.toFixed(1); // Скільки символів ви хочете отримати після коми або крапки у числі
// // console.log((0,1 * 10 + 0,2 * 10) / 10); // Замінює метод toFixed();
// console.log(d);

// NaN це Not a Number
const a = Number("asd");
console.log(a);
const b = Number.isNaN(a); // Перевіряє на не число
console.log(b);
