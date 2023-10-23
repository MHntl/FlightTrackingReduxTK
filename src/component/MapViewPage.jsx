import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useSelector } from "react-redux";

const MapViewPage = ({ setShowDetail, setGetID }) => {
  const state = useSelector((store) => store);
  const handleIdView = (id) => {
    setShowDetail(true);
    setGetID(id);
  };

  return (
    <div>
      {/* //------React Map/Leaflet------- */}
      <MapContainer
        center={[38.879685, 35.055778]}
        zoom={6}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {state.flights.map((i) => (
          <Marker key={i.id} position={[i.lat, i.lan]}>
            <Popup>
              <div className="popup">
                {i.id}
                <button onClick={() => handleIdView(i.id)}>Details</button>
              </div>
            </Popup>
          </Marker>
        ))}
        <Polyline positions={state.route} />
      </MapContainer>
      {/* //------------------------------ */}
    </div>
  );
};

export default MapViewPage;
