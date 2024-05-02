import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Stats from "./components/Stats";
import getUserApi from "./api";
import { useState } from "react";

function App() {
  const handleSubmit = async (query) => {
    const res = await getUserApi(query);
    console.log(res)
  }

  return (
    <>
      <Header />
      <SearchForm handleSubmit={handleSubmit}/>
      <Stats />
      <Footer />
    </>
  );
}

export default App;
