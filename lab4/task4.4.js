// Arrow function
const checkQuestionAnswer = (question, correctAnswer) => {
    const userAnswer = prompt(question);
    
    if (userAnswer === null) return;
    
    const user = userAnswer.trim().toLowerCase();
    const correct = correctAnswer.trim().toLowerCase();
    
    if (user === correct) {
        alert("Ответ верный");
    } else {
        alert("Ответ неверный");
    }
};

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');