// const btn = document.querySelector('button')

// const btnClickHandler = () => {
//     alert('You just clicked the button')
// }

// btn.onclick = btnClickHandler

const dateHandler = () => {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    month = month + 1;
    let date = today.getDate();
    let hours = today.getHours();
    
    // document.write(year + "-" + month + "-" + date)
    let showToday = document.querySelector('.todaysdate');
    showToday.textContent = `${year}-${month}-${date}`;
    
    // console.log(year + "-" + month + "-" + date);
}
dateHandler();

const reqLoginHandler = () => {
    alert("로그인이 필요합니다.");
}