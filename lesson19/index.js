let now = new Date(),
  ny = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0),
  daysLeft = Math.floor((ny.getTime() - now.getTime()) / 86400000),
  day = now.getDay(),
  hours = now.getHours(),
  minute = now.getMinutes(),
  seconds = now.getSeconds(),
  dayOfWeek = "",
  div = document.createElement("div");

switch (day) {
  case 0: {
    dayOfWeek = "Воскресенье";
    break;
  }
  case 1:
    dayOfWeek = "Понедельник";
    break;
  case 2:
    dayOfWeek = "Вторник";
    break;
  case 3:
    dayOfWeek = "Среда";
    break;
  case 4: {
    dayOfWeek = "Четверг";
    break;
  }
  case 5:
    dayOfWeek = "Пятница";
    break;
  case 6:
    dayOfWeek = "Суббота";
}

if (hours <= 6) {
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) hours = "0" + hours;
  if (minute < 10) minute = "0" + minute;
  if (seconds < 10) seconds = "0" + seconds;
  div.innerHTML = `
    <strong>Добрый день</strong><br>Сегодня: ${dayOfWeek}<br>
    Текущее время: ${hours}:${minute}:${seconds} P.M.<br>
    До нового года осталось: ${daysLeft} дней
    `;
  document.body.append(div);
} else if (hours <= 12) {
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) hours = "0" + hours;
  if (minute < 10) minute = "0" + minute;
  if (seconds < 10) seconds = "0" + seconds;
  div.innerHTML = `
    <strong>Добрый день</strong><br>Сегодня: ${dayOfWeek}<br>
    Текущее время: ${hours}:${minute}:${seconds} P.M.<br>
    До нового года осталось: ${daysLeft} дней
    `;
  document.body.append(div);
} else if (hours <= 18) {
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) hours = "0" + hours;
  if (minute < 10) minute = "0" + minute;
  if (seconds < 10) seconds = "0" + seconds;
  div.innerHTML = `
    <strong>Добрый день</strong><br>Сегодня: ${dayOfWeek}<br>
    Текущее время: ${hours}:${minute}:${seconds} P.M.<br>
    До нового года осталось: ${daysLeft} дней
    `;
  document.body.append(div);
} else if (hours <= 24) {
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) hours = "0" + hours;
  if (minute < 10) minute = "0" + minute;
  if (seconds < 10) seconds = "0" + seconds;
  div.innerHTML = `
    <strong>Добрый день</strong><br>Сегодня: ${dayOfWeek}<br>
    Текущее время: ${hours}:${minute}:${seconds} P.M.<br>
    До нового года осталось: ${daysLeft} дней
    `;
  document.body.append(div);
}
