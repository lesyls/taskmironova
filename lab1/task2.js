const myName = 'Олеся';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Чеботова Н.М.';
const reasonText = 'Я хочу создавать современные и удобные веб сайты';
const numberOfMonth = 1;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяц. Я уверен(а), что пройду данный курс до конца!`;

myInfoText.replaceAll('JavaScript', 'JAVASCRIPT');

console.log('=== Итоговая строка ===');
console.log(myInfoText);

console.log('=== Длина строки ===');
console.log('Длина строки: ' + myInfoText.length);

console.log('=== Первый символ ===');
console.log('Первый символ: "' + myInfoText[0] + '"');

console.log('=== Последний символ ===');
console.log('Последний символ: "' + myInfoText[myInfoText.length - 1] + '"');