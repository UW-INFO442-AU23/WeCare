import React from "react";
import {useState, useEffect, onclick} from "react";
import BasicTable from "./Catalog";

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
              
              <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target={resData.bs}>Learn More</button>
              {/* <!-- Vertically centered modal --> */}
              <div class="modal-dialog modal-dialog-centered">
                {/* <!-- Modal --> */}
                <div class="modal fade" id={resData.modid} tabindex="-1" aria-labelledby={resData.ariamodlabel} aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id={resData.modtitleid}>{resData.modtitle}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        {resData.modbody}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
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
      <BasicTable />
    </div>
  );
}

export default Resources;



