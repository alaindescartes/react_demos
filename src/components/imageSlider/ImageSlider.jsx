import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import imagePaths from "../../data/images";
import sliderStyles from "./ImageSlider.module.css";

function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const getImagePath = (index) => {
    if (index >= 0 && index < imagePaths.length) {
      return imagePaths[index];
    }
    return null;
  };

  useEffect(() => {
    console.log(imageIndex);
  }, [imageIndex]);

  const toggleImagesNext = () => {
    if (imageIndex >= imagePaths.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const toggleImagesPrev = () => {
    if (imageIndex === 0) {
      setImageIndex(imagePaths.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={sliderStyles.container}>
      <div className={sliderStyles.arrow}>
        <button onClick={toggleImagesPrev}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className={sliderStyles.icon}
          />
        </button>
        <button onClick={toggleImagesNext}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className={sliderStyles.icon}
          />
        </button>
      </div>
      <img
        src={getImagePath(imageIndex)}
        className={sliderStyles.img}
        alt="Current Slide"
      />
      <div className={sliderStyles.statusBar}>
        {imagePaths.map((_, idx) => (
          <span
            key={idx}
            className={`${sliderStyles.dot} ${
              idx === imageIndex ? sliderStyles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
