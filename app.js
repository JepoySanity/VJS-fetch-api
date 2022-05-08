document.getElementById("get-text").addEventListener("click", getText);
document.getElementById("get-json").addEventListener("click", getJson);

function getText() {
  fetch("text.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getJson() {
  fetch("post.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function (post) {
        output += `
          <ul>
            <li>${post.title}</li>
            <li>${post.post}</li>
          </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
