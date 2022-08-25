import React from 'react'
import style from "./slider.module.css"
import { Image } from '@chakra-ui/react'

const images = ["https://www.netmeds.com/images/cms/aw_rbslider/slides/1659273888_Home_bannerdfsd.jpg", "https://www.netmeds.com/images/cms/aw_rbslider/slides/1659349701_Home_bannervgdf.jpg", "https://www.netmeds.com/images/cms/aw_rbslider/slides/1654275901_Web_Home_Kareenasdhdh.jpg", "https://www.netmeds.com/images/cms/aw_rbslider/slides/1659273242_Home.jpg"];
const delay = 3000;

export const SliderAds = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={style.slideshow}>
      <div
        className={style.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((item) => (
          <div
            className={style.slide}
            key={index}
          > <Image src={item}/> </div>
        ))}
      </div>

      <div className={style.slideshowDots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`{style.slideshowDot}${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}