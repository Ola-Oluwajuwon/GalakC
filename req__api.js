// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(json => console.log(json));

//
document.addEventListener("DOMContentLoaded", reqApi);
function reqApi() {
  let quoteBody = document.getElementById("quote__body");
  var limit = 1;
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/facts?limit=" + limit,
    headers: { "X-Api-Key": "xK2RlfM/3j8AfFL5lZYFNw==KsTwe7I7TiLpfWxA" },
    contentType: "application/json",
    success: function (results) {
      //   setInterval(() => {
      //     results.forEach(each => {
      //       quoteBody.innerHTML = `${each.fact}`;
      //     });
      //   }, 10000);

      quoteBody.innerHTML = `${results[0].fact}`;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
setInterval(() => {
  reqApi();
}, 30000);
