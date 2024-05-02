const url = "https://api.github.com/users/";

async function getUser(user) {
  const response = await fetch(url + user);
  const data = await response.json();
  console.log(data);
}

export default getUser;
