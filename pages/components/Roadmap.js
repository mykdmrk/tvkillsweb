import React from "react";
import styles from "./roadmap.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect } from "react";

export default function Roadmap() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div id="roadmap" class={styles.section_timeline}>
      <h1
        class="mb-12 mt-12 text-center text-4xl font-newton aos-init text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        data-aos="zoom-in-up"
      >
        Roadmap
      </h1>
      <div class={styles.container}>
        <div class={styles.timeline_component}>
          <div class={styles.timeline_progress}>
            <div class={styles.timeline_progress_bar}></div>
          </div>
          <div
            data_w_id="d5abcf1f_3370_3eea_ccfd_66f076babfe0"
            class={styles.timeline_item}
          >
            <div
              id="w_node_d5abcf1f_3370_3eea_ccfd_66f076babfe1_d8bceb12"
              class={styles.timeline_left}
            >
              <div class={styles.timeline_date_text}>
                <p className="text-transparent hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white  text-xl md:text-3xl lg:text-4xl sm:translate-x-0  md:translate-x-0 lg:translate-x-[-12]">
                  Phase 01
                </p>
              </div>
            </div>
            <div
              id="w_node_d5abcf1f_3370_3eea_ccfd_66f076babfe4_d8bceb12"
              class={styles.timeline_centre}
            >
              <div class={styles.timeline_circle}></div>
            </div>
            <div
              id="w_node_d5abcf1f_3370_3eea_ccfd_66f076babfe6_d8bceb12"
              className=""
            >
              <div class={styles.margin_bottom_xlarge}>
                <div data-aos="fade-right" class={`${styles.timeline_text}  `}>
                  <div className="lg:text-2xl md:text-xl sm:text-lg  my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Twitter Launch:
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide">
                    Launching the Tvkill’s tv into the twitter space
                  </div>
                  <div className="lg:text-2xl md:text-xl sm:text-lg my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Community building:
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide ">
                    Building a strong organic Tvkills community in the CNFT
                    Space.
                  </div>
                  <div className="lg:text-2xl md:text-xl sm:text-lg my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Showlist:
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide ">
                    Our very own version of whitelist which is given to the
                    supporters and for the giveaway winners in different
                    activities.
                  </div>
                  <div className="lg:text-2xl md:text-xl sm:text-lg my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Cultpass:
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide ">
                    Cultpass is our way of Honouring the hardcore supporters by
                    inviting them to our TV CULT. Holding Cultpass gives you
                    special benefits and exclusive access.
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
          <div
            data_w_id="0488106f_ce92_9b7b_01c3_8ad75f3f5e35"
            class={styles.timeline_item}
          >
            <div
              id="w_node__0488106f_ce92_9b7b_01c3_8ad75f3f5e36_d8bceb12"
              class={styles.timeline_left}
              // style={styles.opacityChange}
            >
              <div class={styles.timeline_date_text}>
                <p className="text-transparent hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white text-xl md:text-3xl lg:text-4xl">
                  Phase 02
                </p>
              </div>
            </div>
            <div
              id="w_node__0488106f_ce92_9b7b_01c3_8ad75f3f5e39_d8bceb12"
              class={styles.timeline_centre}
            >
              <div class={styles.timeline_circle}></div>
            </div>
            <div className="">
              <div class={styles.margin_bottom_medium}>
                <div
                  data-aos="zoom-in-up"
                  class={`${styles.timeline_text} ${styles.paragraph_light} ${styles.left}`}
                >
                  <div className="lg:text-2xl md:text-xl sm:text-lg  my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Website:
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide ">
                    Revealing the official website of TVKills.
                  </div>
                  <div className="lg:text-2xl md:text-xl sm:text-lg my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Discord launch:
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide ">
                    The official launch of TVKills discord server.
                  </div>
                  <div className="lg:text-2xl md:text-xl sm:text-lg my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    TVKills Mint:
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide ">
                    Big day the official minting of TVKills.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data_w_id="0488106f_ce92_9b7b_01c3_8ad75f3f5e35"
            class={styles.timeline_item}
          >
            <div
              id="w_node__0488106f_ce92_9b7b_01c3_8ad75f3f5e36_d8bceb12"
              class={styles.timeline_left}
              // style={styles.opacityChange}
            >
              <div class={styles.timeline_date_text}>
                <p className="text-transparent hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white text-xl md:text-3xl lg:text-4xl">
                  Phase 03
                </p>
              </div>
            </div>
            <div
              id="w_node__0488106f_ce92_9b7b_01c3_8ad75f3f5e39_d8bceb12"
              class={styles.timeline_centre}
            >
              <div class={styles.timeline_circle}></div>
            </div>
            <div className="">
              <div class={styles.margin_bottom_medium}>
                <div
                  data-aos="zoom-in-up"
                  class={`${styles.timeline_text} ${styles.paragraph_light} ${styles.left}`}
                >
                  <div className="lg:text-2xl md:text-xl sm:text-lg  my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    utility
                  </div>
                  <div className="lg:text-lg md:text-base sm:text-sm my-2 md:tracking-wide">
                    The utility and staking of the Cultpass and the main drop
                    will be revealed soon in Discord.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data_w_id="e0f4f25e_22f1_da39_65d5_a453ca30c731"
            class={styles.timeline_item}
          ></div>
          <div class={styles.overlay_fade_bottom}></div>
          <div class={styles.overlay_fade_top}></div>
        </div>
      </div>
    </div>
  );
}
