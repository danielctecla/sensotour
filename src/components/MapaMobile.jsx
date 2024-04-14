import React, { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'
import { geoCentroid } from 'd3-geo'
import mexicoMap from '../../data/mx.json'
import { MagnifyingGlassMinusIcon } from '@heroicons/react/24/solid'

const MapaMobile = ({ selectedState, setSelectedState }) => {
  // Estado inicial del mapa
  const initialPosition = { coordinates: [-102, 24], zoom: 1.2 }
  const [position, setPosition] = useState(initialPosition)

  const handleGeographyClick = (geo) => {
    const centroid = geoCentroid(geo)
    setPosition({
      coordinates: centroid,
      zoom: 3, // Ajusta el nivel de zoom según necesites
    })
    setSelectedState(geo.properties.state_name)
  }

  // Función para restablecer el zoom y la posición del mapa al estado inicial
  const handleResetOut = () => {
    setPosition({
      coordinates: initialPosition.coordinates,
      zoom: 1, // Ajusta el zoom al nivel mínimo
    })
  }

  return (
    <div className="border-y-2 border-base">
      <div className="grid grid-cols-3 my-4">
        <div className="flex justify-start items-center ml-6">
          <button
            className="py-2 px-4 bg-blue-5 hover:bg-blue-7 text-white rounded-2 text-sm"
            onClick={handleResetOut}
          >
            <div className="flex gap-2 items-center">
              Alejar
              <MagnifyingGlassMinusIcon className="h-4 w-4 text-white flex items-center" />
            </div>
          </button>
        </div>
      </div>

      <div className="h-auto w-auto flex justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 700 }}
          width={300}
          height={300}
          data-tip=""
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup center={position.coordinates} zoom={position.zoom}>
            <Geographies geography={mexicoMap}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isSelected = geo.properties.state_name === selectedState
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleGeographyClick(geo)}
                      style={{
                        default: {
                          fill: isSelected ? '#ea3060' : '#bdbdbd',
                          outline: 'none',
                        },
                        hover: {
                          fill: isSelected ? '#ca0c47' : '#f57794',
                          outline: 'none',
                        },
                        pressed: {
                          fill: isSelected ? '#FF4500' : '#ea3060',
                          outline: 'none',
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  )
}

export default MapaMobile
