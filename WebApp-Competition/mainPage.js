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
  let showToday = document.querySelector(".todaysdate");
  showToday.textContent = `${year}-${month}-${date} ${hours}시`;

  // console.log(year + "-" + month + "-" + date);
};
whatisdate();

const container = document.getElementById("map");

let options = {
  center: new kakao.maps.LatLng(37.5388881437203, 126.99169208411028),
  level: 3,
};

let map = new kakao.maps.Map(container, options);

let mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

let geocoder = new kakao.maps.services.Geocoder();

// geocoder.addressSearch(
//   "강원도 강릉시 강릉대로 377 (포남동)",
//   (result, status) => {
//     if (status === kakao.maps.services.Status.OK) {
//       let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

//       let marker = new kakao.maps.Marker({
//         map: map,
//         position: coords,
//       });

//       map.setCenter(coords);
//     }
//   }
// );
let arr = [];
let imageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

fetch(
  "https://api.odcloud.kr/api/15077036/v1/uddi:16b7f167-7e2f-4fb7-9496-cfc2f34ab740?page=1&perPage=150&serviceKey=Y5S%2BdNU7EJYV8EB%2BQycnjm%2Fcs73OIvoAvarO1syTImUsiUBNcYJ6HTamkUHOngjAyjtITuHjaAmq2nS9f0TtGg%3D%3D"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // const needData = data.data.map((item) => ({
    //   address: item.주소,
    //   name: item.관명,
    // }));;
    // console.log(needData);
    const needData = {
      address: data.data.주소,
      name: data.data.관명,
    };

    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
      }
    });

    arr.push(needData);
    // data.forEach((item) => {
    //   console.log(item);
    // const needData = {
    //   address: item.주소,
    //   name: item.관명,
    // };
    // arr.push(needData);
    // });
  })
  .catch((error) => console.log("데이터 가져오는 중 오류 발생:", error));
// console.log(arr);
// let imageSrc =
//   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
// for (let i = 0; i < 10; i++) {
//   let imageSize = new kakao.maps.Size(24, 35);
//   let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
//   let marker = new kakao.maps.Marker({
//     map: map,
//     position: positions[i].,
//     title: positions[i].title,
//     image: markerImage,
//   });
// }
// arr.forEach((position) => {
//   geocoder.addressSearch(arr.address, (result, status) => {
//     if (status === kakao.maps.services.Status.OK) {
//       let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

//       let marker = new kakao.maps.Marker({
//         map: map,
//         position: coords,
//       });

//       let infowindow = new kakao.maps.Infowindow({
//         content:
//           '<div style="width=150px; text-align=center; padding=6px 0;">' +
//           position.name +
//           "</div>",
//       });
//       infowindow.open(map, marker);
//     }
//   });
// });
