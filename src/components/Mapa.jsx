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
import { getIdByName } from '@/data/statesid.data'

const Mapa = ({ selectedState, setSelectedState }) => {
  // Estado inicial del mapa
  const initialPosition = {
    coordinates: [-99.13897191401156, 19.277778554181303],
    zoom: 4,
  }
  const [position, setPosition] = useState(initialPosition)

  const navigate = useNavigate()

  const handleGeographyClick = (geo) => {
    const centroid = geoCentroid(geo)
    console.log(centroid)
    setPosition({
      coordinates: centroid,
      zoom: 4, // Ajusta el nivel de zoom según necesites
    })
    setSelectedState(geo.properties.state_name)
    const id = getIdByName(geo.properties.state_name)
  }

  // Función para disminuir el zoom al nivel inicial y reajustar el centro del mapa al punto inicial
  const handleZoomOut = () => {
    setPosition({
      coordinates: initialPosition.coordinates,
      zoom: 1, // Ajusta el zoom al nivel mínimo
    })
  }

  return (
    <div className="border-3 border-base rounded-4">
      <div className="grid grid-cols-3 my-4">
        <div className="flex justify-start items-center ml-6">
          <button
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md text-lg"
            onClick={handleZoomOut}
          >
            <div className="flex gap-2 items-center">
              Alejar
              <MagnifyingGlassMinusIcon className="h-4 w-4 text-white" />
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#ea3060] px-4 py-2 rounded-md">
            <h2 className="text-lg font-bold text-white">
              Selecciona un estado
            </h2>
          </div>
        </div>
      </div>
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

export default Mapa
