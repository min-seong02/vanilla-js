const clock = document.querySelector("h2#clock");
const today = document.querySelector("#today");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const month = String(date.getMonth()+1).padStart(2, "0");
  const todayDate = String(date.getDate()).padStart(2, "0");
  const day = date.getDay();
  const arr = ["일","월","화","수","목","금","토"];
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  today.innerText = `${month}월 ${todayDate}일 ${arr[day]}요일`;
}

getClock();
setInterval(getClock, 1000);