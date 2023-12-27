const urlParams = new URLSearchParams(window.location.search);
const place = urlParams.get("place");
const seapl = document.getElementById("searchtogo");

const whatisdate = () => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let hours = today.getHours();

  month = month + 1;

  let showToday = document.querySelector(".todaysdate");
  showToday.textContent = `${year}-${month}-${date}`;
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

let geocoder = new kakao.maps.services.Geocoder();

let map = new kakao.maps.Map(container, options);

navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude,
    lon = position.coords.longitude;

  const CurrentPosition = new kakao.maps.LatLng(lat, lon);
  map.setCenter(CurrentPosition);
});

let mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

if (place) {
  let places = new kakao.maps.services.Places();

  places.keywordSearch(place, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      let marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });

      map.setCenter(coords);
    }
  });
}

fetch(
  "https://api.odcloud.kr/api/15077036/v1/uddi:16b7f167-7e2f-4fb7-9496-cfc2f34ab740?page=1&perPage=200&serviceKey=Y5S%2BdNU7EJYV8EB%2BQycnjm%2Fcs73OIvoAvarO1syTImUsiUBNcYJ6HTamkUHOngjAyjtITuHjaAmq2nS9f0TtGg%3D%3D"
)
  .then((response) => response.json())
  .then((json) => {
    const needData = {
      address: json.data.map((obj) => obj.주소),
    };

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

function searchPlace() {
  if (window.event.keyCode == 13 || event.type == "click") {
    let search = document.getElementById("searchtogo").value;
    urlParams.set("place", search);
    window.location.search = urlParams;
  }
}

const profile = document.querySelector(".profilebox > i");

profile.addEventListener("click", function () {
  alert("로그인이 필요합니다.");
  // window.location.href = "./public/login.html";
});
