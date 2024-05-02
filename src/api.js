const url = "https://api.github.com/users/";

async function getUserApi(user) {
  const response = await fetch(url + user);
  const data = await response.json();
  console.log(data)
  return data;
}


export default getUserApi;