import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import mexicoMap from "../../data/mx.json";

const Mapa = ({ selectedState, setSelectedState, position, handleZoomIn, handleZoomOut}) => {
  return (
    <div border-3 border-base rounded-4>
      <div className="h-auto w-auto flex justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 500 }}
          width={300}
          height={150}
          data-tip=""
        >
          <ZoomableGroup center={position.coordinates} zoom={position.zoom}>
            <Geographies geography={mexicoMap}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const { state_name } = geo.properties;
                  const isSelected = state_name === selectedState;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => setSelectedState(state_name)}
                      style={{
                        default: {
                          fill: isSelected ? "#ea3060" : "#D6D6DA",
                          outline: "none",
                        },
                        hover: {
                          fill: "#ea3060",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#ea3060",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Mapa;
