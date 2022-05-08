document.getElementById("get-text").addEventListener("click", getText);
document.getElementById("get-json").addEventListener("click", getJson);
document.getElementById("get-api").addEventListener("click", getAPI);

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

function getAPI() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function (user) {
        output += `
          <div>
            <label for="user">${user.login}</label>
            <img src="${user.avatar_url}" width="100" height="100">
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
