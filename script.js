const month = document.querySelector(".month");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const NewYear = "1 Jan 2022";

setInterval(() => {
  let newYear = new Date(NewYear);
  const currentDate = new Date();
  const timeLeft = newYear - currentDate;

  const AllSeconds = timeLeft / 1000;
  const days = Math.floor(AllSeconds / 60 / 60 / 24);
  const secondLeftForHours = AllSeconds - days * 24 * 60 * 60;
  const hours = Math.floor(secondLeftForHours / 60 / 60);
  const secondLeftForMinutes = secondLeftForHours - hours * 60 * 60;
  const minutes = Math.floor(secondLeftForMinutes / 60);
  const secondLeftForSeconds = secondLeftForMinutes - minutes * 60;
  const seconds = Math.ceil(secondLeftForSeconds);

  if (days < 0) {
    day.innerHTML = "00";
  } else if (days < 10) {
    day.innerHTML = `0${days}`;
  } else {
    day.innerHTML = days;
  }

  if (hours < 0) {
    hour.innerHTML = "00";
  } else if (hours < 10) {
    hour.innerHTML = `0${hours}`;
  } else {
    hour.innerHTML = hours;
  }

  if (minutes < 0) {
    minute.innerHTML = "00";
  } else if (minutes < 10) {
    minute.innerHTML = `0${minutes}`;
  } else {
    minute.innerHTML = minutes;
  }

  if (seconds < 0) {
    second.innerHTML = "00";
  } else if (seconds < 10) {
    second.innerHTML = `0${seconds}`;
  } else {
    second.innerHTML = seconds;
  }

  if (timeLeft < 0) {
    day.innerHTML = "00";
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
  }
}, 1000);
