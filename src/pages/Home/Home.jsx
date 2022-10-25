import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="">
        <SideBar />
        <section className="h-screen ml-60 mt-20 overflow-auto mx-10">Home section</section>
      </main>
    </div>
  );
};

export default Home;
