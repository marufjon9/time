const contentTime = document.querySelector(".content__time");
const contentDate = document.querySelector(".content__date");
const timesList = document.querySelector(".times__list");
const item = document.querySelector(".times__item");

// Date

function dateCurrent() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, 0);
  const month = date.getMonth().toString().padStart(2, 0);
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, 0);
  const minut = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);

  contentDate.textContent = `${day}.${month}.${year}`;
  contentTime.textContent = `${hour}:${minut}:${second}`;
}
setInterval(dateCurrent, 1000);

// Fetch

async function fetchTimes(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.times);
  renderTime(data.times, timesList);
}

fetchTimes("https://islomapi.uz/api/present/day?region=Toshkent");

// RenderTime

function renderTime(obj, node) {
  node.innerHTML = `
    <li class="times__item item">
      <p class="item__name">Bomdod</p>
      <p class="item__time bomdod">${obj.tong_saharlik}</p>
    </li>
    <li class="times__item item">
      <p class="item__name">Quyosh</p>
      <p class="item__time quyosh">${obj.quyosh}</p>
    </li>
    <li class="times__item item">
      <p class="item__name">Peshin</p>
      <p class="item__time peshin">${obj.peshin}</p>
    </li>
    <li class="times__item item">
      <p class="item__name">Asr</p>
      <p class="item__time asr">${obj.asr}</p>
    </li>
    <li class="times__item item">
      <p class="item__name">Shom</p>
      <p class="item__time shom">${obj.shom_iftor}</p>
    </li>
    <li class="times__item item">
      <p class="item__name">Xufton</p>
      <p class="item__time xufton">${obj.hufton}</p>
    </li> 
  `;
}
