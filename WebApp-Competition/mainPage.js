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
    
    // document.write(year + "-" + month + "-" + date)
    let showToday = document.querySelector('.todaysdate');
    showToday.textContent = `${year}-${month}-${date}`;
    
    console.log(year + "-" + month + "-" + date);
}
whatisdate();