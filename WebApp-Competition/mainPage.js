// const btn = document.querySelector('button')

// const btnClickHandler = () => {
//     alert('You just clicked the button')
// }

// btn.onclick = btnClickHandler

const whatisdate = () => {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let hours = today.getHours();
    
    // document.write(year + "-" + month + "-" + date)
    let showToday = document.querySelector('.todaysdate');
    showToday.textContent = `${year}-${month}-${date} ${hours}시`;
    
    // console.log(year + "-" + month + "-" + date);
}
whatisdate();