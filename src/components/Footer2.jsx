import logo from "../assets/Acher_logo.png"
import { Link } from "react-router-dom"

function Footer2() {
  return (
    <>
  {/* component */}
  <footer className="bg-gradient-to-r from-gray-100 via-[#D9F0F9] to-gray-100">
    <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <img src={logo} className="mr-5 h-6 sm:h-9" alt="logo" />
          <p className="max-w-xs mt-4 text-lg text-gray-600">
          Acher Argentina - Doblas 1510 - CABA
          </p>
          <div className="flex mt-8 space-x-4 justify-center mr-16 text-[#2987BC]">
            <Link
              className="hover:opacity-75"
              to="https://www.facebook.com/p/Acher-Argentina-100063685132897/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Facebook </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillrule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  cliprule="evenodd"
                />
              </svg>
            </Link>
            <Link
              className="hover:opacity-75"
              to="https://www.instagram.com/acherargentina/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Instagram </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillrule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  cliprule="evenodd"
                />
              </svg>
            </Link>

            <Link
                  className="hover:opacity-75"
                  to="https://www.google.com/maps/place/Doblas+1510,+C1424BMF+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.634307,-58.4301724,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccbad935c5e6d:0x6e52fc7da6df63ce!8m2!3d-34.6343114!4d-58.4275975!16s%2Fg%2F11c2542gqz?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Google Maps</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 12 22 12 22C12 22 19 13.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" />
                  </svg>
                </Link>
                <Link
                  className="hover:opacity-75"
                  to="mailto:info@b-acher.com.ar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Email</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 13.065l-11.176-6.245v11.934c0 1.117.906 2.023 2.023 2.023h18.306c1.117 0 2.023-.906 2.023-2.023v-11.934l-11.176 6.245zm0-1.766l10.677-5.97h-21.354l10.677 5.97z" />
                  </svg>
                </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 mt-[53px]">
          <div>
            <Link 
            to="/especialidadesMedicas"
            className="text-lg text-gray-600">Especialidades Médicas</Link>
          </div>
          <div>
            <Link 
            to="/representaciones"
            className="text-lg text-gray-600">Representaciones</Link>
            
          </div>
          <div>
            <Link 
            to="/institucional"
            className="text-lg text-gray-600">Institucional</Link>
          </div>
        </div>
      </div>
      <p className="sm:mt-4 mt-8 text-xs text-center text-gray-800">© 2024 acher.com.ar todos los derechos reservados</p>
    </div>
  </footer>
</>

  )
}
export default Footer2