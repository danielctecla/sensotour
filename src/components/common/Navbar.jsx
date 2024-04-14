import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { classNames } from '@utils/class-names'
import { Fragment } from 'react'

const pages = [
  {
    name: 'Conocer',
    to: `/`,
    icon: 'i-heroicons:user-group',
  },
  {
    name: 'Experiencias',
    to: `/experiencias`,
    icon: 'i-heroicons:globe-americas',
  },
  {
    name: 'Nosotros',
    to: `/nosotros`,
    icon: 'i-heroicons:rectangle-stack',
  },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <Popover className="relative z-5">
      <div className="grid grid-cols-3 lg:grid-cols-4 items-center bg-[#ea3060] px-4 py-3">
        {/* LOGO */}
        <div className="ml-4 justify-items-start hidden lg:flex">
          <Link to="/">
            <span className="sr-only">Logo Sensotour</span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="10" fill="white" />
              <path
                d="M20.6705 14.7614L17.9602 15.5284C17.7898 15.0767 17.5384 14.6378 17.206 14.2116C16.8821 13.777 16.4389 13.419 15.8764 13.1378C15.3139 12.8565 14.5938 12.7159 13.7159 12.7159C12.5142 12.7159 11.5128 12.9929 10.7116 13.5469C9.91903 14.0923 9.52273 14.7869 9.52273 15.6307C9.52273 16.3807 9.79545 16.973 10.3409 17.4077C10.8864 17.8423 11.7386 18.2045 12.8977 18.4943L15.8125 19.2102C17.5682 19.6364 18.8764 20.2884 19.7372 21.1662C20.598 22.0355 21.0284 23.1562 21.0284 24.5284C21.0284 25.6534 20.7045 26.6591 20.0568 27.5455C19.4176 28.4318 18.5227 29.1307 17.3722 29.642C16.2216 30.1534 14.8835 30.4091 13.358 30.4091C11.3551 30.4091 9.69744 29.9744 8.38494 29.1051C7.07244 28.2358 6.24148 26.9659 5.89205 25.2955L8.75568 24.5795C9.02841 25.6364 9.54403 26.429 10.3026 26.9574C11.0696 27.4858 12.071 27.75 13.3068 27.75C14.7131 27.75 15.8295 27.4517 16.6562 26.8551C17.4915 26.25 17.9091 25.5256 17.9091 24.6818C17.9091 24 17.6705 23.429 17.1932 22.9688C16.7159 22.5 15.983 22.1506 14.9943 21.9205L11.7216 21.1534C9.9233 20.7273 8.60227 20.0668 7.75852 19.1719C6.9233 18.2685 6.50568 17.1392 6.50568 15.7841C6.50568 14.6761 6.81676 13.696 7.43892 12.8438C8.0696 11.9915 8.92614 11.3224 10.0085 10.8366C11.0994 10.3509 12.3352 10.108 13.7159 10.108C15.6591 10.108 17.1847 10.5341 18.2926 11.3864C19.4091 12.2386 20.2017 13.3636 20.6705 14.7614Z"
                fill="black"
              />
              <path
                d="M21.3388 30.0533C21.1991 30.0533 21.0784 30.0036 20.9766 29.9041C20.8771 29.8023 20.8274 29.6816 20.8274 29.5419C20.8274 29.3999 20.8771 29.2791 20.9766 29.1797C21.0784 29.0803 21.1991 29.0305 21.3388 29.0305C21.4808 29.0305 21.6016 29.0803 21.701 29.1797C21.8004 29.2791 21.8501 29.3999 21.8501 29.5419C21.8501 29.6342 21.8265 29.7195 21.7791 29.7976C21.7341 29.8757 21.6726 29.9384 21.5945 29.9858C21.5187 30.0308 21.4335 30.0533 21.3388 30.0533ZM23.5201 30V24.5455H24.1344V25.3835H24.1912C24.3001 25.1018 24.4812 24.8804 24.7346 24.7195C24.9902 24.5561 25.2968 24.4744 25.6543 24.4744C26.0307 24.4744 26.3397 24.5632 26.5811 24.7408C26.825 24.916 27.0073 25.1574 27.128 25.4652H27.1742C27.2973 25.1622 27.4973 24.9219 27.7743 24.7443C28.0537 24.5644 28.3922 24.4744 28.79 24.4744C29.2966 24.4744 29.6967 24.6342 29.9902 24.9538C30.2838 25.2711 30.4306 25.7351 30.4306 26.3459V30H29.7985V26.3459C29.7985 25.915 29.6884 25.5919 29.4682 25.3764C29.248 25.161 28.958 25.0533 28.5982 25.0533C28.1815 25.0533 27.8607 25.1811 27.6358 25.4368C27.4109 25.6925 27.2985 26.0168 27.2985 26.4098V30H26.6522V26.2891C26.6522 25.9197 26.5492 25.6214 26.3432 25.3942C26.1373 25.1669 25.8472 25.0533 25.4732 25.0533C25.2222 25.0533 24.9962 25.1148 24.7949 25.2379C24.5961 25.361 24.4386 25.5327 24.3226 25.7528C24.209 25.9706 24.1522 26.2216 24.1522 26.5057V30H23.5201ZM32.4947 24.5455L33.9009 26.8714L35.3072 24.5455H36.0423L34.288 27.2727L36.0423 30H35.3072L33.9009 27.7486L32.4947 30H31.7631L33.4961 27.2727L31.7631 24.5455H32.4947Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>

        {/* 3bars Mobile */}
        <div className="md:m-l-4 lg:hidden ">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-end text-white hover:text-amarilloCoopel  focus:outline-none">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div
          className="hidden lg:flex lg:justify-center lg:text-center lg:items-center"
          lg="gap-8 col-start-2 col-end-4"
        >
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.to}
              className="text-white relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              {page.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center lg:hidden">
          {pages
            .filter((page) => {
              // Aquí aplicamos la lógica para mostrar solo ciertos elementos basados en la ruta
              // Por ejemplo, si solo quieres mostrar elementos que no sean '#'
              return location.pathname.startsWith(page.to) || page.to === '#'
            })
            .map((solution) => (
              <Link key={solution.name} to={solution.to}>
                <div className="text-white">
                  <solution.icon className="h-10 w-10" aria-hidden="true" />
                </div>
              </Link>
            ))}
        </div>

        {/* Boton usuario */}
        <div className="md:m-r-4 flex justify-end ">
          <a to="#" className="whitespace-nowrap text-base font-medium ">
            <UserCircleIcon className="h-10 w-10 text-white hover:text-amarilloCoopel" />
          </a>
        </div>
      </div>

      {/* Desplegable */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {/* Contenido desplegable */}
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-65"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div aria-hidden="true">
                  {/* Logo */}
                  <span className="sr-only">Logo Conexion Emprendedora</span>
                  <Popover.Button as={Link} to="/">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="10" fill="black" />
                      <path
                        d="M20.6705 14.7614L17.9602 15.5284C17.7898 15.0767 17.5384 14.6378 17.206 14.2116C16.8821 13.777 16.4389 13.419 15.8764 13.1378C15.3139 12.8565 14.5938 12.7159 13.7159 12.7159C12.5142 12.7159 11.5128 12.9929 10.7116 13.5469C9.91903 14.0923 9.52273 14.7869 9.52273 15.6307C9.52273 16.3807 9.79545 16.973 10.3409 17.4077C10.8864 17.8423 11.7386 18.2045 12.8977 18.4943L15.8125 19.2102C17.5682 19.6364 18.8764 20.2884 19.7372 21.1662C20.598 22.0355 21.0284 23.1562 21.0284 24.5284C21.0284 25.6534 20.7045 26.6591 20.0568 27.5455C19.4176 28.4318 18.5227 29.1307 17.3722 29.642C16.2216 30.1534 14.8835 30.4091 13.358 30.4091C11.3551 30.4091 9.69744 29.9744 8.38494 29.1051C7.07244 28.2358 6.24148 26.9659 5.89205 25.2955L8.75568 24.5795C9.02841 25.6364 9.54403 26.429 10.3026 26.9574C11.0696 27.4858 12.071 27.75 13.3068 27.75C14.7131 27.75 15.8295 27.4517 16.6562 26.8551C17.4915 26.25 17.9091 25.5256 17.9091 24.6818C17.9091 24 17.6705 23.429 17.1932 22.9688C16.7159 22.5 15.983 22.1506 14.9943 21.9205L11.7216 21.1534C9.9233 20.7273 8.60227 20.0668 7.75852 19.1719C6.9233 18.2685 6.50568 17.1392 6.50568 15.7841C6.50568 14.6761 6.81676 13.696 7.43892 12.8438C8.0696 11.9915 8.92614 11.3224 10.0085 10.8366C11.0994 10.3509 12.3352 10.108 13.7159 10.108C15.6591 10.108 17.1847 10.5341 18.2926 11.3864C19.4091 12.2386 20.2017 13.3636 20.6705 14.7614Z"
                        fill="white"
                      />
                      <path
                        d="M21.3388 30.0533C21.1991 30.0533 21.0784 30.0036 20.9766 29.9041C20.8771 29.8023 20.8274 29.6816 20.8274 29.5419C20.8274 29.3999 20.8771 29.2791 20.9766 29.1797C21.0784 29.0803 21.1991 29.0305 21.3388 29.0305C21.4808 29.0305 21.6016 29.0803 21.701 29.1797C21.8004 29.2791 21.8501 29.3999 21.8501 29.5419C21.8501 29.6342 21.8265 29.7195 21.7791 29.7976C21.7341 29.8757 21.6726 29.9384 21.5945 29.9858C21.5187 30.0308 21.4335 30.0533 21.3388 30.0533ZM23.5201 30V24.5455H24.1344V25.3835H24.1912C24.3001 25.1018 24.4812 24.8804 24.7346 24.7195C24.9902 24.5561 25.2968 24.4744 25.6543 24.4744C26.0307 24.4744 26.3397 24.5632 26.5811 24.7408C26.825 24.916 27.0073 25.1574 27.128 25.4652H27.1742C27.2973 25.1622 27.4973 24.9219 27.7743 24.7443C28.0537 24.5644 28.3922 24.4744 28.79 24.4744C29.2966 24.4744 29.6967 24.6342 29.9902 24.9538C30.2838 25.2711 30.4306 25.7351 30.4306 26.3459V30H29.7985V26.3459C29.7985 25.915 29.6884 25.5919 29.4682 25.3764C29.248 25.161 28.958 25.0533 28.5982 25.0533C28.1815 25.0533 27.8607 25.1811 27.6358 25.4368C27.4109 25.6925 27.2985 26.0168 27.2985 26.4098V30H26.6522V26.2891C26.6522 25.9197 26.5492 25.6214 26.3432 25.3942C26.1373 25.1669 25.8472 25.0533 25.4732 25.0533C25.2222 25.0533 24.9962 25.1148 24.7949 25.2379C24.5961 25.361 24.4386 25.5327 24.3226 25.7528C24.209 25.9706 24.1522 26.2216 24.1522 26.5057V30H23.5201ZM32.4947 24.5455L33.9009 26.8714L35.3072 24.5455H36.0423L34.288 27.2727L36.0423 30H35.3072L33.9009 27.7486L32.4947 30H31.7631L33.4961 27.2727L31.7631 24.5455H32.4947Z"
                        fill="white"
                      />
                    </svg>
                  </Popover.Button>
                </div>

                {/* Texto Menu */}
                <div>
                  <p className="text-black ml-5 font-bold">Menu</p>
                </div>

                {/* Boton cerrar */}
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                {/* Contenido del dezplegable */}
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {pages.map((solution) => (
                    <Popover.Button
                      as={Link}
                      key={solution.name}
                      to={solution.to}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-amarilloCoopel/[0.2]"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-black">
                        <div
                          className={classNames(solution.icon, 'h-6 w-6')}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-4 font-medium text-black">
                        {solution.name}
                      </div>
                    </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="py-6 px-5">{/* footer del dezplegable aqui */}</div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
