import CopyrightIcon from "@material-ui/icons/Copyright";
export default function Footer() {
  const goToGallery = () => {
    const element = document.getElementById("gallery");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToRoadmap = () => {
    const element = document.getElementById("roadmap");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToTeam = () => {
    const element = document.getElementById("team");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToFaq = () => {
    const element = document.getElementById("faq");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div class="pt-20 pb-10 box-border ml-20 overflow-x-hidden">
        <div class="flex flex-col md:flex-row md:justify-between">
          <div class="flex-1 ">
            {/* <h1 class=" text-4xl text-transparent hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white text-2xl lg:text-4xl leading-relaxed font-newton tracking-wider">
              TV KILLS
            </h1> */}
            <img
              src="./TV Kills full color logos 1-01.PNG"
              className="w-[20%] block mx-left"
            ></img>
            <p class=" text-base mt-6  bg-clip-text  text-white ">
              <CopyrightIcon
                style={{
                  color: "purple",
                  marginBottom: "5px",
                  marginRight: "3px",
                }}
              />
              2022 All rights reserved
            </p>
          </div>
          <div class="flex-1 mt-10 md:mt-3">
            <ul class=" text-5xl text-transparent hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-whiteflex flex-col md:justify-center md:items-center gap-6 text-lg font-newton">
              <li>
                <a
                  class="transition-all duration-200 ease-linear hover:text-blue-400"
                  onClick={goToGallery}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  class="transition-all duration-200 ease-linear hover:text-blue-400"
                  onClick={goToRoadmap}
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  class="transition-all duration-200 ease-linear hover:text-blue-400"
                  onClick={goToTeam}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  class="transition-all duration-200 ease-linear hover:text-blue-400"
                  onClick={goToFaq}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1 mt-10 md:mt-4 pl-7">
            <div class="flex flex-col xs:flex-row sm:flex-col lg:flex-row md:items-center gap-6 w-fit md:gap-10">
              <a
                href="https://twitter.com/TVKillsCNFT"
                target="_blank"
                rel="noreferrer"
              >
                <button className="  gap-2 mb-10 border-none text-red-700 py-3 px-10  hover:bg-transparent hover:text-white  rounded-xl">
                  <img
                    src="./Vector.png"
                    className="w-[15%] mx-left flex justify-self-start"
                  />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                    // color="#1DA1F2"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg> */}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
