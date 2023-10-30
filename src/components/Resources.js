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
    <div className="d-flex col-md-6 col-lg-3 py-3">
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
            <div class="text-center">
              <button type="button" className="btn btn-light">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Modal(){
  // <!-- Button trigger modal -->
  <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"> Launch demo modal </button>

{/* // <!-- Modal --> */}
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  
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



