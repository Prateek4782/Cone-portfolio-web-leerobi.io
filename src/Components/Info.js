import React from "react";
import Sidebar from "./Sidebar";
import prateek from "../Components/img/prateek.jpg";


function Info() {
  return (
    <>
      <div className="info">
        <h2>Prateek Jangid</h2>
        <p>
          Hey, I'm Lee. I'm the VP of Developer Experience at Vercel <br />{" "}
          where my team helps developers build a faster web.
        </p>

        <div className="imgcontain">
          <img src={prateek} className="pic"  />
          <div className="links">
          <div className="d-flex">
  <div className="icon-container">
    <i class="fa-brands fa-twitter"></i>
    <p>Follow me on Twitter</p>
  </div>
  <div className="icon-container">
    <i class="fa-brands fa-linkedin"></i>
    <p>Follow me on Linkedin</p>
  </div>
  <div className="icon-container">
    <i class="fa-brands fa-github"></i>
    <p>Follow me on Github</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
