import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const position: LatLngExpression = [-35.27935524675609, 149.12591452944778];
function Map() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>This is where you find us! 友人! 🍣</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
