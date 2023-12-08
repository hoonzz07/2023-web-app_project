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

  month = month + 1;

  // document.write(year + "-" + month + "-" + date)
  let showToday = document.querySelector(".todaysdate");
  showToday.textContent = `${year}-${month}-${date}`;

  // console.log(year + "-" + month + "-" + date);
};
whatisdate();

const YouNeedLogin = () => {
  alert("로그인이 필요합니다.");
};

const container = document.getElementById("map");

let options = {
  center: new kakao.maps.LatLng(37.5388881437203, 126.99169208411028),
  level: 5,
};

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude,
    lon = position.coords.longitude;

  const CurrentPosition = new kakao.maps.LatLng(lat, lon);
  map.setCenter(CurrentPosition);
});

let map = new kakao.maps.Map(container, options);

let mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

let geocoder = new kakao.maps.services.Geocoder();

fetch(
  "https://api.odcloud.kr/api/15077036/v1/uddi:16b7f167-7e2f-4fb7-9496-cfc2f34ab740?page=1&perPage=200&serviceKey=Y5S%2BdNU7EJYV8EB%2BQycnjm%2Fcs73OIvoAvarO1syTImUsiUBNcYJ6HTamkUHOngjAyjtITuHjaAmq2nS9f0TtGg%3D%3D"
)
  .then((response) => response.json())
  .then((json) => {
    const needData = {
      address: json.data.map((obj) => obj.주소),
    };

    // console.log(needData.address);
    for (let i = 0; i < 200; i++) {
      geocoder.addressSearch(needData.address[i], (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          let marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
        }
      });
    }
  })
  .catch((error) => console.log("데이터 가져오는 중 오류 발생:", error));
