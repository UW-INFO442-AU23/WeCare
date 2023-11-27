import React from "react";
import BasicTable from "./Catalog";

// To enable rendering of HTML content from the JSON file on our website, a few parts of code were implemented with the help of ChatGPT

export function Header(props){
  return(
      <header>
        <h1>
          <div className="text-center my-5">
            {props}
            </div>
            </h1>

      </header>
  )
}

export function ResCards(props) {
  const resData = props.resData;

  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="d-flex col-md-6 col-lg-3 py-3" id="rescardrow">
      <div className="card w-100">
        <div className="text-center">
          <img className="card-img w-75 cardback" src={resData.img} alt={resData.name} />
        </div>
        <div className="card-body">
          <div className="col-sm">
            {/* <h2 className="card-title text-center">{resData.title}</h2> */}
            <p className="card-text text-left">{resData.descr}</p>
            <div className="mt-auto text-center">
              <button type="button" className="btn res-btn" data-bs-toggle="modal" data-bs-target={resData.bs}>Learn more</button>
            </div>
              {/* <!-- Vertically centered modal --> */}
              <div className="modal-dialog modal-dialog-centered">
                {/* <!-- Modal --> */}
                <div className="modal fade" id={resData.modid} tabindex="-1" aria-labelledby={resData.ariamodlabel} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id={resData.modtitleid}>{resData.modtitle}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        {/* Render modbody content as HTML */}
                        <div dangerouslySetInnerHTML={renderHTML(resData.modbody)} />
                        <br />
                        {/* Render modbody2 content as HTML */}
                        <div dangerouslySetInnerHTML={renderHTML(resData.modbody2 || '')} />
                        <br />
                        {/* Render modbody3 content as HTML */}
                        <div dangerouslySetInnerHTML={renderHTML(resData.modbody3 || '')} />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
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
    return <ResCards key={obj.modtitle} resData={obj} />;
  });
  return (
    <div className="container">
      <div className="resbody">
      {/* Container div for the Bootstrap grid */}
      {Header("Learn More")}
      <div className="row mx-0 my-5">
        {newCardArray}
      </div>
      <BasicTable />
    </div>
    </div>
  );
}

export default Resources;

