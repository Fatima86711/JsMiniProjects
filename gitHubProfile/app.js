const api = "https://api.github.com/users/";
const main = document.getElementById("main");
const input = document.getElementById("search");

const getUser = async (username) => {
  const data = await fetch(api + username);
  const info = await data.json();
  const div_creation = document.createElement("div");
  div_creation.classList.add("card");
  div_creation.innerHTML = `
   <div>
            <img
              class="avatar"
              src="${info.avatar_url}"
              alt="Florin Pop"
            />
          </div>
          <div class="user-info">
            <h2>${info.name}</h2>
            <p>${info.bio}</p>
  
            <ul class="info">
              <li>${info.followers}<strong>Followers</strong></li>
              <li>${info.following}<strong>Following</strong></li>
              <li>${info.public_repos}<strong>Repos</strong></li>
            </ul>
  
            <div id="repos">
            
            </div>
          </div>
  `;
  main.appendChild(div_creation);

  getrepos(username);
};
const getrepos = async (username) => {
  const api_url = await fetch(api + username + "/repos");
  const api_data = await api_url.json();
  const anchor = document.querySelector("#repos");
  api_data.forEach((info) => {
    const elem = document.createElement("a");
    elem.classList.add("repo");
    elem.href = info.html_url;
    console.log(info.html_url);
    elem.target = "_blank";
    elem.innerText = info.name;

    anchor.appendChild(elem);
  });
};

const formSubmit = () => {
  if (input.value != "") {
    getUser(input.value);
  } else {
    // main
    const div = document.createElement("div");
    div.classList.add("card");
    main.appendChild(div);
    div.innerHTML = `<p style = "color: white">Please Enter Any Value</p>`;
  }
  return false;
};
input.addEventListener("focusout", function () {
  formSubmit();
});
