import { useEffect, useState } from "react";
import Header from "./component/Header";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "./Redux/flightActions";
import MapViewPage from "./component/MapViewPage";
import Details from "./component/Details";
import ListView from "./component/ListView";

function App() {
  const [view, setView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [getID, setGetID] = useState("");
  const state = useSelector((store) => store);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  //console.log(state);
  // console.log(getID);
  return (
    <div>
      <Header flightNumber={state.flights.length} />
      <div>
        <div className="btnList">
          <button
            className="btn1"
            style={view ? { background: "#007bff" } : { background: "black" }}
            onClick={() => setView(true)}
          >
            Map View
          </button>
          <button
            className="btn2"
            style={view ? { background: "black" } : { background: "#007bff" }}
            onClick={() => setView(false)}
          >
            List View
          </button>
        </div>
        <div>
          {view && (
            <div>
              <MapViewPage
                setGetID={setGetID}
                setShowDetail={setShowDetail}
                state={state}
              />
            </div>
          )}
          {!view && (
            <ListView
              setGetID={setGetID}
              setShowDetail={setShowDetail}
              state={state}
            />
          )}
        </div>
      </div>
      {showDetail && (
        <Details
          getID={getID}
          setGetID={setGetID}
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
}

export default App;
