import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg   ">
      <div class="container-fluid  fluidcont" id="cont">
        {/* <div className="column justify-content-start"> */}
        <div className="chevLeft">
          <a class="navbar-brand">
            <i class="fa-sharp fa-solid fa-chevron-left   " id="ic1"></i>
          </a>
        </div>
        <div className="fhouse">
          <a class="navbar-brand light   " id="ic2">
            <i class="fa-sharp fa-solid fa-house"></i>
          </a>
        </div>
        <div className="anplay">
          <a class="navbar-brand  " id="ic3">
            {/* <span class="head pt-2">ANIMIX PLAY</span> */}
            <img className="animg" src="https://animixplay.to/assets/logo.png" alt="" />
          </a>
        </div>
        {/* </div> */}
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="navbar-toggler-icon"></i>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <form class="d-flex " role="search" style={{ width: 330 }}>
            <input
              class="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button type="button" class="btn btn-dark searchb ">
              <i class="fa-solid fa-magnifying-glass "></i>
            </button>
          </form>
          <a className="navbar-brand rside  me-1 ms-3 ">
            <i class="fa-sharp fa-solid fa-shuffle " />
            <span className="rand  ms-2 mb-3">Random</span>
          </a>
          {/* <a className="navbar-brand rside mt-2"><h6 className="rand">Random</h6></a> */}
          <a className="navbar-brand rside2 mt-3 ms-3 mb-1">
            <h6 className="names">A-Z List</h6>
          </a>
        </div>
      </div>
    </nav>
  );
}
