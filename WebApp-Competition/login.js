
const checkAgain = () => {
    const inputIdValue = document.getElementById('inputid').querySelector('input').value.trim();
    const inputPwValue = document.getElementById('inputpw').querySelector('input').value.trim();

    if (inputIdValue === "") {
        alert('아이디를 입력해주세요.');
    } else if (inputPwValue === "") {
        alert('비밀번호를 입력해주세요.');
    } else {
        alert('로그인에 실패했습니다. 메인페이지로 이동합니다.')
        window.location.href = 'mainPage.html';
    }
}
