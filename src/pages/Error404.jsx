import React from "react";

function Error404() {
	return (
    <>
      <div className="container is-max-desktop" style={{paddingTop: '5rem'}}>
        <div className="box is-hoverable">
          <h1 className="title">404: Address not found</h1>
          <h1 className="subtitle">Please return to the <a href="/">home page</a>.</h1>
        </div>
      </div>
    </>
	);
}

export default Error404;