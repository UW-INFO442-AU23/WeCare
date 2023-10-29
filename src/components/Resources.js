import React from "react";
import {useState, useEffect} from "react";

export function Header(props){
  return(
      <header>
          <h1>{props}</h1>
      </header>
  )
}

export function ResCards(props) {
  const resData = props.resData;
  return (
    <div className="d-flex col-md-6 col-lg-3">
      <div className="card w-100">
        {/* w-100 makes the card width 100% of its container */}
        {/* Uncomment below if you want to include image */}
        <div class="text-center">
          <img className="card-img w-75 cardback" src={resData.img} alt={resData.name} />
        </div>
        <div className="card-body">
          <div className="col-sm">
            <h2 className="card-title text-center">{resData.title}</h2>
            <p className="card-text">{resData.descr}</p>
          </div>
        </div>
      </div>
    </div>
  );
}




function Resources(props) {
  const reslist = props.res;
  const newCardArray = reslist.map((obj) => {
    return <ResCards key={obj.title} resData={obj} />;
  });

  return (
    <div className="container">
      {/* Container div for the Bootstrap grid */}
      {Header("Learn More")}
      <div className="row mx-0">
        {newCardArray}
      </div>
    </div>
  );
}

export default Resources;

