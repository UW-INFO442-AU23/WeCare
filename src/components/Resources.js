import React from "react";
import {useState, useEffect} from "react";

export function ResCards(props) {
  const resData = props.resData;
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card w-100">
        {/* w-100 makes the card width 100% of its container */}
        {/* Uncomment below if you want to include image */}
        {/* <img className="card-img-top" src={resData.img} alt={resData.name} /> */}
        <div className="card-body">
          <h2 className="card-title text-center">{resData.title}</h2>
          <p className="card-text">{resData.descr}</p>
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
    <div className="container-fluid mt-4 px-1">
      {/* Container div for the Bootstrap grid */}
      <h2 className="learnmore">Learn more</h2>
      <div className="row mx-0">
        {newCardArray}
      </div>
    </div>
  );
}

export default Resources;

  // <div className="d-flex col-md-6 col-lg-3">
  //         <div className="card">
  //             {/* <img className="card-img-top" src={ourData.img} alt={ourData.name} />  */}
  //             <div className="card-body">
  //                 <div className="col-sm">
  //                     {/* <h2 className="card-title text-center">{ourData.name}</h2> */}
  //                     <h2 className="card-title text-center">hi</h2>
  //                     {/* <p className="card-text">{ourData.descr}</p> */}
  //                     <p className="card-text">hi</p>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>