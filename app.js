document.getElementById("get-text").addEventListener("click", getText);

function getText() {
  fetch("texts.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
