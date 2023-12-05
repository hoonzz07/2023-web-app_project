const btn = document.getElementById('login');

const checkAgain = () => {
    let input_id = document.getElementById('inputid');
    if(input_id.value == null) {
        alert('아이디를 입력해주세요')
    } else {
        console.log("OK");
    }
}

// const checkPwAgain = () => {
//     let input_pw = document.getElementById('inputpw');
//     if(input_pw.value == null) {
//         alert('패스워드를 입력해주세요')
//     } else {
//         console.log("OK");
//     }
// }