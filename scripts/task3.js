const userName = prompt('Как вас зовут?');
if (userName) {
    let formattedName = userName.trim().toLowerCase();
    alert('Вас зовут ' + formattedName);
    console.log('=== Задание 3 ===');
    console.log('Исходное имя: "' + userName + '"');
    console.log('Отформатированное имя: "' + formattedName + '"');
} else {
    alert('Вы не ввели имя!');
    console.log('=== Задание 3 ===');
    console.log('Пользователь не ввел имя');
}