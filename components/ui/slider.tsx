"use client";

import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

const SliderOne = () => {
  const isMediumScreen = useBetterMediaQuery("(max-width: 1023px)");
  const isSmallScreen = useBetterMediaQuery("(max-width: 767px)");

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplayspeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  const images = [
    {
      path: "/images/coffe.jpeg",
    },
    {
      path: "/images/image-business.jpeg",
    },
    {
      path: "/images/business.jpeg",
    },
    {
      path: "/images/man.jpeg",
    },
    {
      path: "/images/small-business-3.webp",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.path}>
            <div className="rounded-md md:p-10 p-2">
              <Image
                priority
                src={image.path}
                alt="logo"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;
