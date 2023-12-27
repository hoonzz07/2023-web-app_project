const lost = document.querySelector("#lost-item ul");
const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get("search");
document.getElementById("searchtogo").value = search;

const whatisdate = () => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth();
  month = month + 1;
  let date = today.getDate();
  let hours = today.getHours();

  // month = month + 1;
  // let hours = today.getHours();

  // document.write(year + "-" + month + "-" + date)
  let showToday = document.querySelector(".todaysdate");
  showToday.textContent = `${year}-${month}-${date}`;

  // console.log(year + "-" + month + "-" + date);
};
whatisdate();

const register = document.querySelector(".res_button");
register.addEventListener("click", function () {
  alert("현재는 등록하실 수 없습니다. 죄송합니다.");
});

const YouNeedLogin = () => {
  alert("로그인이 필요합니다.");
  // find 부분
};
let lost_item_text = document.querySelector(".lost-item_text");
console.log(lost_item_text);

// lost-item_text enterkey event part
function enterkey() {
  // if (enterkey.lost_item_text == 13) {
  // }
  console.log(lost_item_text.textContent);
}

const db = fetch(`http://localhost:8001/list?search=${search ? search : ""}`)
  .then((response) => response.json())
  .then((data) => {
    for (let a of data) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.innerText = `${a[0]} / ${a[1]}`;
      div.className = "lostItems";
      li.value = a[1];
      li.addEventListener("click", () => {
        location.href = `${location.origin}/map.html?place=${a[1]}`;
      });
      li.appendChild(div);
      lost.appendChild(li);
    }
  })
  .catch((error) => console.error("Error:", error));

document.addEventListener("DOMContentLoaded", function () {
  const itemsList = document.querySelector("#lost-item > ul");
  const howManyItems = document.querySelector(".howmany > h3 > strong");

  function updateHowManyItems() {
    const itemListItems = itemsList.querySelectorAll("li");
    howManyItems.textContent = itemListItems.length.toString();
  }

  updateHowManyItems();

  itemsList.addEventListener("DOMNodeInserted", updateHowManyItems);
  itemsList.addEventListener("DOMNodeRemoved", updateHowManyItems);
});

function searchEvent() {
  if (window.event.keyCode == 13 || event.type == "click") {
    let search = document.getElementById("searchtogo").value;
    urlParams.set("search", search);
    window.location.search = urlParams;
  }
}

const profile = document.querySelector(".profilebox > i");

profile.addEventListener("click", function () {
  alert("로그인이 필요합니다.");
  // window.location.href = "./public/login.html";
});
