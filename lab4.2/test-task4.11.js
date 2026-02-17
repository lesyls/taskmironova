const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// Функция для выдачи посылки (удаление из начала массива)
function giveParcel() {
  const client = peopleWaiting.shift();
  alert(`${client} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

// Функция для ухода без посылки (удаление из конца массива)
function leaveQueueWithoutParcel() {
  const client = peopleWaiting.pop();
  alert(`${client} не получил(а) посылку и ушел(ла) из очереди`);
}

// 1. Кристина и Олег получили посылки
giveParcel(); // Кристина получила посылку
giveParcel(); // Олег получил посылку

// 2. Кирилл получает посылку, остальные уходят
giveParcel(); // Кирилл получил посылку

// Удаляем оставшихся людей, которые не получили посылки
while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel();
}