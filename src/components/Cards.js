import React from "react";
// import { Link } from "react-router-dom";
import CardComp from "./CardComp";

export default function Cards() {
  return (
    <>
      <ul class="nav  ">
        <div className=" container-fluid  cardfluid">
          <div className="row">
            <li class="nav-item bg-dark col-md-1 col-sm-3 col-xs-4">
              <li class="nav-link active" aria-current="page" to="/">
                Active
              </li>
            </li>
            {/* <li class="nav-item bg-dark col-md-1 col-sm-3 col-xs-4"> }
              <Link class="nav-link" to="/link">
                Link
              </Link>
            </li>*/}
          </div>
        </div>
      </ul>
      <CardComp/>
    </>
  );
}

