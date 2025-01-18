import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default Leaflet icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const App = () => {
  // State to track the selected cafe
  const [selectedCafe, setSelectedCafe] = useState(null);

  // List of cafes with names, positions, and photo URLs
  const cafes = [
    {
      name: "Cafe Golestan",
      position: [35.8255, 51.4253],
      photo: "../public/images/golestan-cafe.jpg",
    },
    {
      name: "Cafe Tajrish",
      position: [35.8044, 51.4281],
      photo: "../public/images/cafe-tajrish.jpg",
    },
    {
      name: "Cafe Sa'adat",
      position: [35.7881, 51.4268],
      photo: "../public/images/cafe-saadat.jpg",
    },
    {
      name: "Cafe Niavaran",
      position: [35.8106, 51.452],
      photo: "../public/images/cafe-niavaran.jpg",
    },
    {
      name: "Cafe Jamshidiyeh",
      position: [35.8072, 51.4592],
      photo: "../public/images/cafe-jamshidiye.jpg",
    },
    {
      name: "Cafe Darband",
      position: [35.8145, 51.4267],
      photo: "../public/images/cafe-darband.jpg",
    },
    {
      name: "Cafe Farahzad",
      position: [35.7923, 51.3554],
      photo: "../public/images/cafe-farahzad.jpg",
    },
    {
      name: "Cafe Zafaraniyeh",
      position: [35.7981, 51.4137],
      photo: "../public/images/cafe-zaferanieh.jpg",
    },
    {
      name: "Cafe Elahieh",
      position: [35.7861, 51.4156],
      photo: "../public/images/cafe-elahie.jpg",
    },
    {
      name: "Cafe Velenjak",
      position: [35.8036, 51.3965],
      photo: "../public/images/cafe-velenjak.jpg",
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Panel for Cafe Photo */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-blue-900"
      >
        {selectedCafe ? (
          <div className>
            <h2>{selectedCafe.name}</h2>
            <img
              src={selectedCafe.photo}
              alt={selectedCafe.name}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        ) : (
          <p className=" text-white text-xl">
            یک کافه در نقشه انتخاب کنید تا تصویر آن را ببینید
          </p>
        )}
      </div>

      {/* Right Panel for Map */}
      <div style={{ flex: 2 }}>
        <MapContainer
          center={[35.8044, 51.4281]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {cafes.map((cafe, index) => (
            <Marker
              key={index}
              position={cafe.position}
              eventHandlers={{
                click: () => {
                  setSelectedCafe(cafe); // Update selected cafe
                },
              }}
            >
              <Popup>{cafe.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default App;
