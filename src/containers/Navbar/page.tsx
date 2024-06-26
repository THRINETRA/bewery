import React, { useState } from "react";
import { Brewery } from "../Maincontent/page";

const Navbar: React.FC<{ filterData: (name: string) => Brewery[] }> = (
  props
) => {
  const [search, setsearch] = useState<string | undefined>();
  return (
    <div className="w-full flex flex-row justify-end fixed">
      <div className="flex flex-wrap place-items-right">
        <section className="">
          <nav className="bg-gray-900 text-white w-screen placeholder-opacity-80">
            <div className="px-5 py-4  w-full items-center flex flex-row justify-between">
              <div className="">
                <a
                  className="text-3xl font-bold font-heading text-white"
                  href="/"
                >
                  {/* <img className="h-9" src="logo.png" alt="logo"/> */}
                  Brewery Review System
                </a>
              </div>
              <div className="flex  relative w-1/2 max-w-md">
                <input
                  className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg"
                  type="search"
                  name="search"
                  placeholder="Search by  ,city ,Name, Type"
                  onChange={(event) => {
                    setsearch(event.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-3 mr-4"
                  onClick={() => props.filterData(search!)}
                >
                  <svg
                    className="text-black h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    // style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
              <div className="">
                <a
                  className="text-lg font-bold font-heading text-white border-2 p-2 rounded-md shadow-md"
                  href="/"
                >
                  {/* <img className="h-9" src="logo.png" alt="logo"/> */}
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
