import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font border-t border-black">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            {/* <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10 space-y-2">
          <li>
            <a className="text-black hover:underline cursor-pointer">Recommended</a>
          </li>
          <li>
            <a className="text-black hover:underline cursor-pointer">Deals</a>
          </li>
        </nav>
      </div> */}
            {/* <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10 space-y-2">
          <li>
            <a className="text-black hover:underline cursor-pointer">Favorites</a>
          </li>
          <li>
            <a className="text-black hover:underline cursor-pointer">Wishlist</a>
          </li>
        </nav>
      </div> */}
            <div className="lg:w-[25%] md:w-1/2 w-full px-4">
              <nav className="list-none mb-10 space-y-2">
                {/* <li>
            <a className="text-black hover:underline cursor-pointer">Notifications</a>
          </li> */}
                <li>
                  <a className="text-black hover:underline cursor-pointer">Settings</a>
                </li>
                <li>
                  <a className="text-black hover:underline cursor-pointer">Education</a>
                </li>
                <li>
                  <a className="text-black hover:underline cursor-pointer">Company</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-[25%] md:w-1/2 w-full px-4">
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link href="/aboutus">
                    <p className="text-black hover:underline cursor-pointer">About us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/ourTeam">
                    <p className="text-black hover:underline cursor-pointer">Our Team</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus">
                    <p className="text-black hover:underline cursor-pointer">Contact us</p>
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy">
                    <p className="text-black hover:underline cursor-pointer">Privacy policy</p>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-[25%] md:w-1/2 w-full px-4">
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link href="/privacypolicy">
                    <p className="text-black hover:underline cursor-pointer">Terms of service</p>
                  </Link>
                </li>

                <li>
                  <a className="text-black hover:underline cursor-pointer">Legal</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-[25%] md:w-1/2 w-full px-4">
              <nav className="list-none mb-10 space-x-4 flex">
                <a href="https://www.facebook.com/Favolandbeauty" target='blank'>

                  <Image
                    src="/svg/facebook.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.instagram.com/favo.land/" target='blank'>

                  <Image
                    src="/svg/instagram.svg"
                    alt="instagram"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://twitter.com/Favoland" target="blank">

                  <Image
                    src="/svg/twitter.svg"
                    alt="twitter"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.linkedin.com/company/favoland/" target='blank'>

                  <Image
                    src="/svg/linkedin.svg"
                    alt="facebook"
                    width={35}
                    height={35}
                  />
                </a>

              </nav>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-black">Placeholder</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
          <br className="lg:block hidden" />waistcoat green juice
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div> */}
        <div className="">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-[#7D7D7D] text-sm text-center sm:text-left font-bold">©2021 Favoland

            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
