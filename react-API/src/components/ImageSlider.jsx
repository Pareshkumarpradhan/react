import  { useEffect, useState } from "react";
import { data } from "./ConstData";

function ImageSlider() {
  let [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(data.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };
  const handleNext = () => {
    if (activeImageIndex === 4) {
      setActiveImageIndex(data.length - 5);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        handleNext()
    }, 5000)
    return () => {
           clearTimeout(timer)
    }
  }, [activeImageIndex])
  return (
    <div className="flex justify-center">
      <button className="font-bold p-4 m-10" onClick={handlePrev}>
        Previous
      </button>
      {data.map((url, i) => (
        <img
         key={url}
          src={url}
          alt="Wallpaper"
          className={"w-[700px] h-[500px] object-contain " + (activeImageIndex === i ? "block" : "hidden")}
        />
      ))}
      <button className="font-bold p-4 m-10" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
