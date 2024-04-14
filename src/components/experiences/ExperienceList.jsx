import exp from "constants";

 
  export default function ExperienceList({data}) {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 id="products-heading" className="sr-only">
                    Experiencias
                </h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-12">
                {data.map((experience) => (
                    <a key={experience.id} href={`/experiencias/${experience.id}`} className="group border-solid">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                        <img
                        src={experience.image}
                        onError={(e) => { e.target.onerror = null; e.target.src="/mexico_logo.jpg" }}
                        alt={experience.alt_image}
                        className="w-full h-[28rem] object-center object-cover group-hover:opacity-75"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                        <h3>{experience.name}</h3>
                        {/* <p>{product.price}</p> */}
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">{experience.shortDescription}</p>
                    </a>
                ))}
            </div>
            </div>
      </div>
    )
  }
  