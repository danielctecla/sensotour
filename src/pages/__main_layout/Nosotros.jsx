export default function Nosotros() {
  return (
    <div className="py-10">
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
            <h2 className="text-4xl font-bold m-b-4 text-orange">32 Estados</h2>
            <h2 className="text-4xl font-bold m-b-4 text-lightBlue">
              Llenos de magia
            </h2>

            <p className="text-gray-600 m-b-6 text-xl">
              México tiene hermosos paisajes naturales, ciudades con historia
              prehispánica, colonial y moderna, una diversidad de delicias
              culinarias y tradiciones encantadoras que atraen a los visitantes.
            </p>

            <p className="text-gray-600 text-xl">
              México lo tiene todo: playas, montañas, desierto, selva, zonas
              arqueológicas, ciudades vibrantes y una gastronomía variada. Desde
              la tranquilidad hasta las fiestas, los turistas son recibidos con
              calidez en sus 32 estados.
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

            <p className="text-gray-600 m-b-6 text-xl ">
              La app ayudará a personas con discapacidad visual y auditiva con
              audio, videos en lenguaje de señas y datos sobre atracciones
              turísticas basados en su ubicación. Queremos hacer el turismo en
              México accesible para todos.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-sm w-xs md:w-md md: h-lg">
            <img className="rounded-3 h-full" src="/travel.png" alt="Mexico" />
          </div>
        </div>
      </div>
    </div>
  )
}
