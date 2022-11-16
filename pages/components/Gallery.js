import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export const data = [
  {
    cover: "./1.PNG",
    title: "Venom",
  },
  {
    cover: "./2.PNG",
    title: "Steins Gate",
  },
  {
    cover: "./3.PNG",
    title: "One Punch Man",
  },
  {
    cover: "./4.PNG",
    title: "A Silent Voice",
  },
  {
    cover: "./5.PNG",
    title: "Demon Slayer",
  },
  // {
  //   cover: "./3.PNG",
  //   title: "Attack On Titan",
  // },
  // {
  //   cover: "./1.PNG",
  //   title: "picture 1",
  // },
  // {
  //   cover: "./2.PNG",
  //   title: "picture 2",
  // },
  // {
  //   cover: "./3.PNG",
  //   title: "picture 3",
  // },
  // {
  //   cover: "./4.PNG",
  //   title: "picture 4",
  // },
  // {
  //   cover: "./5.PNG",
  //   title: "picture 5",
  // },
  // {
  //   cover: "./1.PNG",
  //   title: "picture 6",
  // },
  // {
  //   cover: "./2.PNG",
  //   title: "picture 7",
  // },
];

export default function Gallery(props) {
  const ref = React.useRef();

  const [width, setWidth] = React.useState(undefined);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();

    function handleResize() {
      // Set window width/height to state
      setWidth(() => window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div
      id="gallery"
      style={{ width: "100%", position: "relative", overflowX: "hidden" }}
    >
      <h1
        class="mb-12 text-center text-4xl font-newton aos-init text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        data-aos="zoom-in-up"
      >
        GALLERY
      </h1>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 5;
          if (parentWidth <= 700) currentVisibleSlide = 3;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />
      <>
        {width > 780 ? (
          <>
            <Fab
              style={{ position: "absolute", top: "50%", left: 60, zIndex: 10 }}
              size="small"
              color="primary"
              onClick={() => {
                ref.current?.goBack();
              }}
            >
              <ArrowBackIcon />
            </Fab>
            <Fab
              style={{
                position: "absolute",
                top: "50%",
                right: 60,
                zIndex: 10,
              }}
              size="small"
              color="primary"
              onClick={() => {
                ref.current?.goNext(6);
              }}
            >
              <ArrowForwardIcon />
            </Fab>
          </>
        ) : (
          <> </>
        )}
      </>
    </div>
  );
}

export const Card = React.memo(function cardMemo(props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  const imageStyle = {
    height: "100%",
    width: "45%",
    borderRadius: 0,
    position: "relative",
    left: "25%",
  };
  return (
    <div
      style={{
        width: "90%",
        height: 300,
        userSelect: "none",
        margin: "auto",
      }}
      className="my-slide-component"
    >
      <img
        // style={imageStyle}
        className="lg:w-[23vw] md:w-[30vw] sm:w-[40vw] h-[300px] border-none relative  md:left-[5vw] sm:left-[5vw] lg:left-[5vw] xsm:left-[12vw]"
        draggable={true}
        src={cover}
      />
    </div>
  );
});
