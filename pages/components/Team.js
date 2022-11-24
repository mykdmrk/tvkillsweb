import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { use, useEffect } from "react";
export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div class=" mb-12 overflow-x-hidden overflow-y-hidden" id="team">
        <h1
          class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center text-4xl font-newton aos-init"
          data-aos="zoom-in-up"
        >
          Team
        </h1>
        <div class="mt-20 flex justify-center flex-wrap gap-10">
          <div
            class="flex flex-col bg-white w-fit text-black aos-init max-h-[70vh] max-w-[95vw] mb-36 "
            data-aos="fade-right"
          >
            <div class="h-96  ">
              <Image
                src="/dev.png"
                alt="STEVE"
                width={384}
                height={384}
                class="h-full"
              />
            </div>
            <div class="px-4 py-12 text-center bg-gradient-to-r from-purple-400 to-pink-600">
              <h1 class="text-3xl font-newton">STEVE</h1>
              <h3 class="text-xl font-NORWESTER font-semibold mt-4">
                Developer
              </h3>
              {/* <button class="mt-4">
                            <a target="_blank" rel="noreferrer"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-twitter"
                                viewBox="0 0 16 16"
                                color="#1DA1F2"
                            >
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                    ></path></svg
                                ></a>
                        </button> */}
            </div>
          </div>
          <div
            class="flex flex-col bg-white w-fit text-black aos-init max-h-[70vh] max-w-[95vw] mb-36"
            data-aos="zoom-out"
          >
            <div class="h-96 realtive">
              {/* <img src="./pgmanager.PNG" alt="HORRISH" class="h-full " /> */}
              <Image
                src="/pgmanager.PNG"
                alt="HORRISH"
                width={384}
                height={384}
                class="h-full"
              />
            </div>
            <div class="px-4 py-12 text-center bg-gradient-to-r from-purple-400 to-pink-600">
              <h1 class="text-3xl font-newton">HORRISH</h1>
              <h3 class="text-xl font-NORWESTER font-semibold mt-4">
                Project Manager
              </h3>
              {/* <button class="mt-4">
                            <a target="_blank" rel="noreferrer"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-twitter"
                                viewBox="0 0 16 16"
                                color="#1DA1F2"
                            >
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                    ></path></svg
                                ></a>
                        </button> */}
            </div>
          </div>
          <div
            class="flex flex-col bg-white w-fit text-black aos-init max-h-[70vh] max-w-[95vw] mb-36"
            data-aos="zoom-out"
          >
            <div class="h-96">
              <Image
                src="/content.PNG"
                alt="DUKE"
                width={384}
                height={384}
                class="h-full"
              />
              {/* <img src="./content.PNG" alt="DUKE" class="h-full " /> */}
            </div>
            <div class="px-4 py-12 text-center bg-gradient-to-r from-purple-400 to-pink-600">
              <h1 class="text-3xl font-newton">DUKE</h1>
              <h3 class="text-xl font-NORWESTER font-semibold mt-4 ">
                Content Creator
              </h3>
              {/* <button class="mt-4">
                            <a target="_blank" rel="noreferrer"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-twitter"
                                viewBox="0 0 16 16"
                                color="#1DA1F2"
                            >
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                    ></path></svg
                                ></a>
                        </button> */}
            </div>
          </div>
          <div
            class="flex flex-col bg-white w-fit text-black aos-init max-h-[70vh] max-w-[95vw] mb-36"
            data-aos="fade-left"
          >
            <div class="h-96  ">
              <Image
                src="/tvj3.PNG"
                alt="JARED"
                width={384}
                height={384}
                class="h-full"
              />
              {/* <img src="./tvj3.PNG" alt="JARED" class="h-full object-cover " /> */}
            </div>
            <div class="px-4 py-6 text-center bg-gradient-to-r from-purple-400 to-pink-600">
              <h1 class="text-3xl font-newton">JARED</h1>
              <h3 class="text-xl font-NORWESTER font-semibold mt-4">Artist</h3>
              <button class="mt-4">
                <a
                  href="https://twitter.com/j3concepts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                    color="#1DA1F2"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
