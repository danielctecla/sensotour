import { getNameById } from "@/data/statesid.data"

export default function index() {
  const [selectedState, setSelectedState] = useState('')
  const [position, setPosition] = useState({ coordinates: [-101, 24], zoom: 1 })
  const params = useParams()
  console.log(params)

  return (
    <div className=" my-4">
      <div className="mx-8 lg:hidden m-b-6">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl m-b-4 text-center">
            Conoce
          </h1>

          <div className="flex justify-center">
            <div className="h-15 w-50" md="h-20 w-70">
              <img src="/mexico.png" alt="Mexico" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-4">
        <div className=" hidden lg:flex items-center mx-8">
          <div>
            <h1 className="font-bold text-6xl m-b-4 text-center">Conoce</h1>
            <div className="flex justify-center">
              <img src="/mexico.png" alt="Mexico" />
            </div>
          </div>
        </div>

        <div className="hidden md:block col-span-4 lg:col-span-3 mx-4 lg:mx-8">
          <Mapa
            selectedState={
              params && params.id ? getNameById(params.id) : ''
            }
            setSelectedState={setSelectedState}
          />
        </div>

        <div className="md:hidden col-span-4 lg:col-span-3lg:mx-8">
          <div className="flex justify-center items-center m-b-4">
            <div className=" bg-[#ea3060] px-4 py-2 rounded-2">
              <h2 className="text-size-xs font-bold text-white">
                Selecciona un estado
              </h2>
            </div>
          </div>

          <MapaMobile
            selectedState={
              params && params.id ? getNameById(params.id) : ''
            }
            setSelectedState={setSelectedState}
          />
        </div>
      </div>

      <div className="text-lg font-semibold">
        {/* Estado Seleccionado: {selectedState} */}
      </div>
      <Experiences stateName={params && params.id ? getNameById(params.id) : ''} />
    </div>
  )
}
