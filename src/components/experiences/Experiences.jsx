import { getExperiences } from '@/data/experiences.data'

export default function Experiences({ stateName = 'No State Selected' }) {
  const experienceData = getExperiences(stateName)

  // Verifica si stateName es vacío o está definido como 'No State Selected'
  const isEmptyStateName = !stateName || stateName === 'No State Selected'

  return (
    <div>
      <div className="flex justify-center my-3">
        <h2 className="text-xl md:text-3xl font-bold text-center my-8 bg-base px-4 py-2 rounded-2 text-white  ">
          {isEmptyStateName
            ? 'Inicia tu proxima aventura en México'
            : `Experiencias en ${stateName}`}
        </h2>
      </div>
      {isEmptyStateName ? (
        <div>
          <div className="grid lg:grid-cols-2 mx-6 lg:mx-15">
            <div className="">
              <img
                className="rounded-3 h-full"
                src="/banner-mexico.png"
                alt="Mexico"
              />
            </div>

            <div className="flex items-center">
              <div className="lg:m-l-6 m-t-8">
                <h2 className="text-4xl font-bold m-b-4 text-orange">
                  32 Estados
                </h2>
                <h2 className="text-4xl font-bold m-b-4 text-lightBlue">
                  Llenos de magia
                </h2>

                <p className="text-gray-600 m-b-6">
                  México es un gran mosaico que combina preciosos escenarios
                  naturales, ciudades con herencia prehispánica, colonial y
                  moderna, una amplia variedad de manjares exquisitos que
                  deleitan paladares, y fascinantes tradiciones que cautivan al
                  visitante.
                </p>

                <p className="text-gray-600">
                  Desde la playa hasta la montaña, del desierto a la selva, de
                  la zona arqueológica a la vibrante metrópoli, de lo dulce a lo
                  picante, de la tranquilidad a la algarabía de sus fiestas,
                  México tiene todo lo que busca el turista, que es bien
                  recibido por la calidez de su gente. México tiene 32 estados
                  para enamorarte.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-center my-8 bg-base px-2 md:px-4 py-2 rounded-2 text-white ">
              Sensotour sera tu guia en esta aventura
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 m-t-8 mx-6 lg:mx-15">
            <div className="flex items-center justify-center">
              <div className=" ">
                <h2 className="text-4xl font-bold m-b-4 text-orange text-center">
                  ¿Que somos?
                </h2>

                <p className="text-gray-600 m-b-6">
                  Esta aplicación proporcionará descripciones detalladas en
                  formato de audio para usuarios ciegos, así como videos con
                  lenguaje de señas para aquellos que son sordos o sordomudos.
                  Además, gracias a la geolocalización, la aplicación
                  identificará la ubicación del usuario y ofrecerá información
                  relevante sobre la atracción turística, incluyendo su
                  historia, características físicas y recomendaciones de lugares
                  cercanos para comer, beber y utilizar servicios. Nuestro
                  objetivo es hacer que el turismo en México sea accesible y
                  enriquecedor para todos
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-sm w-xs md:w-md md: h-lg">
                <img
                  className="rounded-3 h-full"
                  src="/travel.png"
                  alt="Mexico"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <ExperienceList data={experienceData} />
        </div>
      )}
    </div>
  )
}
