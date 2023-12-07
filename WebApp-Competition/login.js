
const checkAgain = () => {
    const inputIdValue = document.getElementById('inputid').querySelector('input').value.trim();
    const inputPwValue = document.getElementById('inputpw').querySelector('input').value.trim();

    if (inputIdValue === "") {
        alert('아이디를 입력해주세요');
    } else if (inputPwValue === "") {
        alert('비밀번호를 입력해주세요');
    } else {
        console.log(1);
    }
}
