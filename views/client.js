const btnsearch = document.getElementById("btnsearch");
const btnpush = document.getElementById("upload");

// btnsearch.addEventListener("click", function () {
//   console.log("Button Clicked!");
//   fetch("/clicks", { method: "post" })
//     .then(function (response) {
//       if (response.ok) {
//         console.log("clicked sent");
//         return;
//       }
//       throw new Error("Failed");
//     })
//     .catch(function (err) {
//       console.log("error");
//     });
// });

// setInterval(function() {
//     fetch('/clicks', {method: 'GET'})
//       .then(function(response) {
//         if(response.ok) return response.json();
//         throw new Error('Request failed.');
//       })
//       .then(function(data) {
//         console.log(data.length);
//       })
//       .catch(function(error) {
//         console.log("catch error");
//       });
//   }, 1000);

//--------------Read Mongodb Data---------------
var list = [];
btnsearch.addEventListener("click", function () {
  console.log("btn clicked");
  fetch("/aaa", { method: "GET" })
    .then(function (response) {
      if (response.ok) return response.json();
      throw new Error("Request failed.");
    })
    .then(function (data) {
      list = data.slice(0);
      for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
      }
    })
    .catch(function (error) {
      console.log("catch error");
    });
});

btnsearch.addEventListener("click", function () {
  console.log("btn clicked");
  fetch("/search", { method: "GET" })
    .then(function (response) {
      if (response.ok) return response.json();
      throw new Error("Request failed.");
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log("catch error");
    });
});

//--------------Push to Mongodb Data---------------
// btnpush.addEventListener("click", function () {
//   console.log("btn clicked");
//   fetch("/posted", { method: "POST" })
//     .then(function (response) {
//       if (response.ok) {return;}
//       throw new Error("Request failed.");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });
