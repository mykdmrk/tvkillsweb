import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" text-white py-14 mx-12 overflow-x-hidden">
      <div className="flex flex-col text-center lg:text-left lg:flex-row items-center">
        <div
          className="flex-1 items-center aos-init aos-animate sm:mx-auto"
          data-aos="fade-up"
        >
          <img
            src="./TV Kills full color logos 1-01.PNG"
            className="w-[30%] block mx-auto"
          ></img>
          <p className="text-white text-center text-2xl mt-4 leading-8">
            {
              "Earth has been taken over by secret invaders who control the media and corporations. Humanity's only connection to their past lives comes from extreme escapism."
            }
          </p>
          <div className="flex justify-center items-center gap-10 mt-6 ">
            <a
              href="https://twitter.com/TVKillsCNFT"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" flex justify-center items-center gap-2 mb-10 border-none  py-3 px-10  hover:bg-transparent hover:text-white  rounded-xl">
                <img src="./Vector.png" className="w-[15%] block ml-0" />

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                  //   color="#1DA1F2"
                >
                  <linearGradient id="my-cool-gradient" x2="1" y2="1">
                    <stop offset="0%" stop-color="#447799" />
                    <stop offset="50%" stop-color="#224488" />
                    <stop offset="100%" stop-color="#112266" />
                  </linearGradient>
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg> */}
              </button>
            </a>
          </div>
        </div>
        <div
          className="flex-1 flex justify-end h-[500px] aos-init aos-animate"
          data-aos="fade-left"
        >
          <img src="./HEAD-GIF.GIF" alt="" className="h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
