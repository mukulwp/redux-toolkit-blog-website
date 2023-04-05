import React from "react";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <section className="wrapper">
      <Sidebar />
      <Posts />
    </section>
  );
};

export default Home;
