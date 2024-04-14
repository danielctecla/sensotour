export default function index() {

  const [content, setContent] = useState("");

  const [selectedState, setSelectedState] = useState("");
  const [position, setPosition] = useState({ coordinates: [-101, 24], zoom: 1 });

  const handleZoomIn = () => {
    setPosition(prev => ({ ...prev, zoom: prev.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    setPosition(prev => ({ ...prev, zoom: prev.zoom / 1.5 }));
  };

  return (
    <div className=" my-4">

        <div className="mx-8 lg:hidden m-b-6">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl m-b-4 text-center">Conoce</h1>

            <div className="flex justify-center">
              <div className="h-15 w-50" md="h-20 w-70">
                <img src="/mexico.png" alt="Mexico" />
              </div>
            </div>

          </div>
          {/* <div className="border-3 border-base rounded-4">
            <img className="rounded-4" src="/banner-mexico.png" alt="visita mexico" />
          </div> */}
        </div>

      <div className="w-full grid grid-cols-4">

        <div className=" hidden lg:flex items-center mx-8">
          <div >
            <h1 className="font-bold text-6xl m-b-4 text-center">Conoce</h1>
            <div className="flex justify-center">
              <img src="/mexico.png" alt="Mexico" />
            </div>
          </div>
        </div>


        <div className="col-span-4 lg:col-span-3 mx-4 lg:mx-8">
          <Mapa
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          position={position}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          />
        </div>
      </div>

    <div className="flex justify-center mt-4">
      <button onClick={handleZoomIn} className="mx-2 bg-black text-white py-2 px-4 rounded-2">Acercar</button>
      <button onClick={handleZoomOut} className="mx-2 bg-black text-white py-2 px-4 rounded-2">Alejar</button>
    </div>

    <div className="flex justify-center m-t-4">
      <div className="mt-2 bg-[#ea3060] px-4 py-2 rounded-2">
        <h2 className="text-lg font-bold text-white">Selecciona un estado de Mexico</h2>
      </div>
    </div>

    
    
    <div className="my-6 ml-4 lg:ml-6 text-lg font-semibold">
      Estado Seleccionado: {selectedState}
    </div>
    <Experiences stateName={selectedState} />
  </div>
  )
}
