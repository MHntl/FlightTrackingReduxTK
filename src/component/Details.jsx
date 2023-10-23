import React, { useEffect, useState } from "react";
import { detailOptions } from "../constants/options";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRoute } from "../Redux/flightSlice";
import Loading from "./Loading";

const Details = ({ setShowDetail, getID, setGetID }) => {
  const state = useSelector((store) => store);
  const [FD, setFlightData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setFlightData(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${getID}`,
        detailOptions
      )
      .then(
        (res) => (setFlightData(res.data), dispatch(setRoute(res.data.trail)))
      );
  }, [getID]);

  return (
    <div className="detail">
      <div className="detailHead">
        <div className="detailId">
          <h4>Details of</h4>
          <button onClick={() => setShowDetail(false)}>x</button>
        </div>
        <div>
          <h5>{getID}</h5>
        </div>
      </div>
      {!FD ? (
        <div className="m-auto">
          <Loading />
        </div>
      ) : (
        <div className="detailBody">
          <>
            <h2>{FD.aircraft.model?.text}</h2>
            <h2>{FD.aircraft.model?.code}</h2>
            <p>Tail Number: {FD.aircraft?.registration}</p>
            <img src={FD.aircraft?.images?.large[0]?.src} />
            <p>Company: {FD.airline?.short}</p>
            <p>
              Take Off:{" "}
              <a href={FD.airport.origin?.website}>{FD.airport.origin?.name}</a>
            </p>
            <p>
              Target:{" "}
              <a href={FD.airport.destination?.website}>
                {FD.airport.destination?.name}
              </a>
            </p>
            <p>
              Status:{" "}
              <span className="status" style={{ background: FD.status.icon }}>
                {FD.status.text}
              </span>
            </p>
          </>
        </div>
      )}
    </div>
  );
};

export default Details;
