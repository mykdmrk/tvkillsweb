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
          <img src="./logocpm.PNG" className="w-[30%] block mx-auto"></img>
          <p className="text-white text-center text-2xl mt-4 leading-8">
            {
              "Earth has been taken over by secret invaders who control the media and corporations. Humanity's only connection to their past lives comes from extreme escapism."
            }
          </p>
          <div className="flex justify-center items-center mt-6 ">
            <a
              href="https://twitter.com/TVKillsCNFT"
              target="_blank"
              rel="noreferrer"
              className="w-[30%]"
            >
              <button className=" flex justify-center items-center  mb-10 border-none   py-3  hover:bg-transparent hover:text-white  rounded-xl">
                <img src="./Vector.webp" className="w-[35%] block ml-0" />
              </button>
            </a>
            <a
              href="https://discord.gg/tvkills"
              target="_blank"
              rel="noreferrer"
              className="w-[22%]"
            >
              <button className=" flex justify-center items-center  mb-10 border-none  py-3  hover:bg-transparent hover:text-white  rounded-xl">
                <img src="./discord.png" className=" w-[73%] block ml-0" />
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
