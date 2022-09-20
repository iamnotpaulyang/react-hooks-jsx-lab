import React from "react";
import { name, city } from "../data/data";



function Home() {
  
  return (
    <div id = "home">
      <h1 style = {{ color: "firebrick" }}>
        {name} is a Web Devloper from {city}
      </h1>
    </div>
  );
}

export default Home;
