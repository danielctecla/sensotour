import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import mexicoMap from "../../data/mx.json"; // Asegúrate de que este archivo es correcto y accesible

const Mapa = () => {
  const [selectedState, setSelectedState] = useState("");
  const [position, setPosition] = useState({ coordinates: [-103, 25], zoom: 1 });

  const handleZoomIn = () => {
    setPosition(prev => ({ ...prev, zoom: prev.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    setPosition(prev => ({ ...prev, zoom: prev.zoom / 1.5 }));
  };

  return (
    <div>
      <div className="h-auto w-auto flex justify-center bg-blue">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 800 // Ajusta este valor según sea necesario para tu caso específico
          }}
          width={800}
          height={350}
          data-tip=""
        >
          <ZoomableGroup center={position.coordinates} zoom={position.zoom}>
            <Geographies geography={mexicoMap}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      const { state_name } = geo.properties;
                      setSelectedState(state_name);
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div className="flex justify-center mt-2">
        <button onClick={handleZoomIn} className="mx-2">Zoom In</button>
        <button onClick={handleZoomOut} className="mx-2">Zoom Out</button>
      </div>

      <div>
        Estado Seleccionado: {selectedState}
      </div>
    </div>
  );
};

export default Mapa;
