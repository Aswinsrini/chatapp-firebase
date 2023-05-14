import React from "react";
import Slidebar from "../components/Slidebar";
import Chat from "../components/Chat";
import "../style.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Slidebar />
        <Chat />
      </div>
    </div>
  );
}
