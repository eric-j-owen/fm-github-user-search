import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Stats from "./components/Stats";
import getUserApi from "./api";
import UserInfo from "./components/UserInfo";

function App() {
  const [user, setUser] = useState("");
  const handleSubmit = async (query) => {
    const res = await getUserApi(query);
    setUser(res);
  };

  return (
    <>
      <Header />
      <SearchForm handleSubmit={handleSubmit} />
      <UserInfo
        userName={user.name}
        userHandle={user.login}
        userPicture={user.avatar_url}
        joined={user.created_at}
      />
      <Stats
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
      />
      <Footer location={user.location} blog={user.blog} twitter={user.twitter_username} company={user.company}/>
    </>
  );
}

export default App;
