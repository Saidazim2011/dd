let text = 'Hello World';
console.log(text.length);


let text1 = '   Hello World    ';
console.log(text1.length);


let trimmed = text1.trim();
console.log(trimmed);
console.log(trimmed.length);



let str1 = 'Sulton';
const Имя = prompt("Ismingizni kiriting");
const Число = prompt("Bironta harf kiriting");

if (Имя && Число) {
    if (Имя.toLowerCase().includes(Число.toLowerCase())) {
        alert(`Ismingizda '${Число}' harf mavjud.`);
    } else {
        alert(`Ismingizda ${Число} harf mavjud emas.`);
    }
}
