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
            <div class="flex items-center  xs:flex-row sm:flex-col lg:flex-row md:items-center w-fit md:gap-10">
              <a
                href="https://twitter.com/TVKillsCNFT"
                target="_blank"
                rel="noreferrer"
                className="w-[30%]"
              >
                <button className=" flex justify-center items-center  mb-10 border-none   py-3  hover:bg-transparent hover:text-white  rounded-xl">
                  <img src="./Vector.png" className="w-[35%]  block ml-0" />
                </button>
              </a>
              <a
                href="https://discord.gg/Vcy7Q55f"
                target="_blank"
                rel="noreferrer"
                className="w-[20%]"
              >
                <button className=" flex justify-center items-center  mb-10 border-none  py-3  hover:bg-transparent hover:text-white  rounded-xl">
                  <img src="./discord.png" className=" w-[75%] block ml-0" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
