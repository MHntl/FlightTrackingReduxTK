import React from "react";
import Loading from "./Loading";

const Header = ({ flightNumber }) => {
  return (
    <header className="header">
      <div className="headerLeft">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Wv_logo_proposal_flying_plane_wo_text.png" />
        <span>Flight Tracking</span>
      </div>
      <div className="headerRight">
        {flightNumber ? (
          <h3>
            <span style={{ color: "yellow" }}>{flightNumber}</span> Flight Found !
          </h3>
        ) : (
          <Loading />
        )}
      </div>
    </header>
  );
};

export default Header;
