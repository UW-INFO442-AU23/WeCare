import React from "react";
import {useState, useEffect} from "react";

export function ResCards(props){
  const resData = props.resData;
  return(
      <div className="d-flex col-md-6 col-lg-3">
          <div className="card">
              {/* <img className="card-img-top" src={ourData.img} alt={ourData.name} />  */}
              <div className="card-body">
                  <div className="col-sm">
                      <h2 className="card-title text-center">{resData.title}</h2>
                      <p className="card-text">{resData.descr}</p>
                  </div>  
              </div>
          </div>
      </div>
  )
}



function Resources(props) {

  const reslist = props.res;
  let newCardArray = reslist.map((obj) => {
      let newCard = <ResCards key={obj.title} resData={obj} />
      return newCard;
  })
        
    return (
      <div>
        
          <h2 class="learnmore">Learn more</h2>
          {newCardArray}
      </div>
    
    
    )
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