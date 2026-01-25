let correctAnswers = 0;
let incorrectAnswers = 0;

const answer1 = 4;
const userAnswer1 = Number(prompt('Сколько будет 2 + 2?'));
if (userAnswer1 === answer1) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const answer2 = 4;
const userAnswer2 = Number(prompt('Сколько будет 2 * 2?'));
if (userAnswer2 === answer2) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const answer3 = 1;
const userAnswer3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'));
if (userAnswer3 === answer3) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const answer4 = 12;
const userAnswer4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'));
if (userAnswer4 === answer4) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

const answer5 = 6;
const userAnswer5 = Number(prompt('Сколько будет 2 + 2 * 2?'));
if (userAnswer5 === answer5) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

alert('Конец теста. Правильные ответы - ' + correctAnswers + '; Неправильные ответы - ' + incorrectAnswers + '.');