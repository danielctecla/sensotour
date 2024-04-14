import { useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { RadioGroup } from '@headlessui/react'
import { getExperienceById } from '@/data/experiences.data'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CompleteExperience({ experience }) {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let sliderRef1 = useRef(null)
  let sliderRef2 = useRef(null)

  useEffect(() => {
    setNav1(sliderRef1)
    setNav2(sliderRef2)
  }, [])

  const info = getExperienceById(experience)

  const images = info.corousel.map((image) => ({ url: image.path }))

  const handleError = (e) => {
    e.target.src = '/mexico_logo.jpg' // Cambia esto a la ruta de tu imagen interna
  }

  return (
    <div className="bg-white">
      {/* Details */}
      <div className="pt-6">
        {/* Carrusel*/}

        <div className="flex justify-center">
          <div className="w-xs md:w-xl">
            <div className="">
              <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt=""
                    onError={handleError}
                  />
                ))}
              </Slider>
              <div className="h-4 bg-white"></div>
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt=""
                    onError={handleError}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-12 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {info.name}
            </h1>
          </div>
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Descripción</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900 md:text-2xl text-xl">
                  {info.shortDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Precios */}
          <div className="mt-4 lg:mt-0 lg:row-span-3 flex items-center justify-center lg:mg-0 mb-8">
            <div>
              <h2 className="md:text-2xl font-semibold text-xl mb-2 text-center">
                Precios
              </h2>
              <h2 className="sr-only">Precios</h2>
              {info.prices.map((price, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 lg:grid-cols-2 gap-x-6"
                >
                  <p className="col-span-2 lg:col-span-1 text-xl">
                    {price.name}
                  </p>
                  <p className="col-span-1 lg:col-span-1 text-xl text-end">
                    {price.average}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Horario */}
          <div className="mt-4 lg:mt-0 lg:row-span-3 flex items-center justify-center lg:mg-0 mb-8">
            <div>
              <h2 className="md:text-2xl font-semibold text-xl mb-2 text-center">
                Horario
              </h2>
              <h2 className="sr-only">Horario</h2>
              {info.days.map((day, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 lg:grid-cols-2 gap-x-6"
                >
                  <p className="col-span-2 lg:col-span-1 text-xl">
                    {day.name}:
                  </p>
                  {day.horario === 'cerrado' ? (
                    <p className="col-span-1 lg:col-span-1 text-xl text-end">
                      Cerrado
                    </p>
                  ) : (
                    <p className="col-span-1 lg:col-span-1 text-xl text-end">
                      {day.horario}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg mx-auto lg:col-span-2  overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px lg:row-span-1 ">
            {info.inclution.map((action, actionIdx) => (
              <div
                key={action.name}
                className={classNames(
                  actionIdx === 0
                    ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                    : '',
                  actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                  actionIdx === info.inclution.length - 2
                    ? 'sm:rounded-bl-lg'
                    : '',
                  actionIdx === info.inclution.length - 1
                    ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                    : '',
                  'relative group bg-[#f0f8ff] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                )}
              >
                <div>
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      'rounded-lg inline-flex p-3'
                    )}
                  >
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a className="focus:outline-none text-2xl">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-xl text-gray-500">{action.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-2xl mx-auto pt-2.5 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-8 lg:pb-24 lg:px-8 rounded-md">
          <img src="/map.jpg" alt="Mapa de localización" />
        </div>
      </div>
    </div>
  )
}
