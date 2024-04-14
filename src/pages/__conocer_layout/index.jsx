import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getNameById } from '@/data/statesid.data'
import {
  HeartIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/solid'

export default function index() {
  const [buttonStates, setButtonStates] = useState({
    like: false,
    bookmark: false,
    refresh: false,
  })

  const toggleButtonState = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }))
  }

  const [selectedState, setSelectedState] = useState('Ciudad de Mexico')
  const [position, setPosition] = useState({ coordinates: [-101, 24], zoom: 1 })
  const params = useParams()
  console.log(params)

  const [videosMobile, setVideosMobile] = useState([])

  useEffect(() => {
    // Aquí podrías reemplazar esto con una solicitud a un servidor
    setVideosMobile([
      // { url: '/Videos/catedral.mp4' },
      { url: '/Videos/zocalo.mp4' },
      { url: '/Videos/revolucion.mp4' },
    ])
  }, [])

  const [videosD, setVideosD] = useState([])

  useEffect(() => {
    // Aquí podrías reemplazar esto con una solicitud a un servidor
    setVideosD([
      { url: '/Videos/catedral.mp4' },
      // { url: '/Videos/zocalo.mp4' },
      // { url: '/Videos/revolucion.mp4' },
    ])
  }, [])

  return (
    <div className="flex justify-center h-auto  my-6">
      {/* <div className="mx-8 lg:hidden m-b-6">
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
              <img src="/cdmx.png" alt="Mexico" />
            </div>
          </div>
        </div>

        <div className="hidden md:block col-span-4 lg:col-span-3 mx-4 lg:mx-">
          <Mapa
            selectedState={'Ciudad de Mexico'}
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
            selectedState={'Ciudad de Mexico'}
            setSelectedState={setSelectedState}
          />
        </div>
      </div> */}

      {/* <div className="text-lg font-semibold">
        Estado Seleccionado: {selectedState}
      </div> */}

      <div className=" bg-gray-800 rounded-4 w-90% h-100% p-b-8">
        <div className="flex justify-center">
          <div className="bg-base px-4 py-2 m-t-4 rounded-3 text-white font-bold text-md">
            {/* <PlayCircleIcon class="h-6 w-6 text-white" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-video"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
              <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" w-full h-full mx-8 lg:hidden">
            <VideoCarousel videos={videosMobile} />
            {/* <VideoCarousel className="hidden lg:block" videos={videosD} /> */}
          </div>
          <div className=" w-full h-full mx-8 hidden lg:block">
            <VideoCarousel videos={videosD} />
            {/* <VideoCarousel className="hidden lg:block" videos={videosD} /> */}
          </div>
        </div>

        <div className="grid grid-cols-3 m-t-2">
          <button onClick={() => toggleButtonState('like')}>
            <div className="flex justify-center">
              <HeartIcon
                className={`h-10 w-10 ${
                  buttonStates.like ? 'text-red-600' : 'text-gray-500'
                } text-center`}
              />
            </div>
            <p className=" text-white">Me gusta</p>
          </button>
          <button onClick={() => toggleButtonState('bookmark')}>
            <div className="flex justify-center">
              <BookmarkIcon
                className={`h-10 w-10 ${
                  buttonStates.bookmark ? 'text-blue-600' : 'text-gray-500'
                }`}
              />
            </div>
            <p className="text-white">Guardar</p>
          </button>
          <a href="/experiencias/castillo-chapultepec">
            <button onClick={() => toggleButtonState('refresh')}>
              <div className="flex justify-center">
                <EllipsisHorizontalCircleIcon
                  className={`h-10 w-10 ${
                    buttonStates.refresh ? 'text-green-600' : 'text-gray-500'
                  }`}
                />
              </div>
              <p className="text-white">Conocer mas</p>
            </button>
          </a>
        </div>
      </div>

      {/* <Experiences
        stateName={'Ciudad de Mexico'}
      /> */}
    </div>
  )
}
