const randomFolks = document.querySelector(".random-peeps");

async function getData() {
  const userRequest = await fetch("https://randomuser.me/api/?results=5");
  const data = await userRequest.json();
  console.log(data);
  const userResults = data.results;
  displayUsers(userResults);
  
}
getData(0)

const displayUsers = userResults => {
  randomFolks.innerHTML = "";

    for (const user of userResults) {
      const country = user.country;
      const name = user.name;
      const imageUrl = user.imageUrl;
    
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <h3>${name}</h3>
      <p>${country}</p>
      <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
  }

};