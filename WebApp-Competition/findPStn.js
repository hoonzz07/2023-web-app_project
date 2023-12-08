// const btn = document.querySelector('button')

// const btnClickHandler = () => {
//     alert('You just clicked the button')
// }

// btn.onclick = btnClickHandler

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
