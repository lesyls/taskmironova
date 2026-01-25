const userName = prompt('Как вас зовут?');
const userAge = prompt('Сколько вам лет?');
const formattedName = userName.trim().toLowerCase();
const formattedAge = Number(userAge.trim());
alert('Вас зовут ' + formattedName + ' и вам ' + formattedAge + ' лет');