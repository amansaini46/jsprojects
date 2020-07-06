const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

//access date object month array is 0 based.
const futureDate = new Date(2020, 6, 07, 11, 30, 0);
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `give away ends on ${day}, ${month} ${date} ${year} ${hour}:${mins}am`;

//future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const format = (item) => (item < 10 ? `0${item}` : item);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired"> sorry this offer has expired</h4>`;
  }
};
const countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
//;
