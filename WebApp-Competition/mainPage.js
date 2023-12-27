// const btn = document.querySelector('button')

// const btnClickHandler = () => {
//     alert('You just clicked the button')
// }

// btn.onclick = btnClickHandler

const whatisdate = () => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  // let hours = today.getHours();

  // document.write(year + "-" + month + "-" + date)
  let showToday = document.querySelector(".todaysdate");
  showToday.textContent = `${year}-${month}-${date}`;

  // console.log(year + "-" + month + "-" + date);
};
whatisdate();

const profile = document.querySelector(".profilebox > i");

profile.addEventListener("click", function () {
  alert("로그인이 필요합니다.");
  // window.location.href = "./public/login.html";
});
