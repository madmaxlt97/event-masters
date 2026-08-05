import React, { Children, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const handleScroll = () => {
      setScrollProgress(emblaApi.scrollProgress());
    };

    handleScroll();

    emblaApi.on("scroll", handleScroll);

    return () => {
      emblaApi.off("scroll", handleScroll);
    };
  }, [emblaApi]);

  const slides = Children.toArray(children).map((child, index) => (
    <div
      className="carousel-slide shrink-0 basis-full lg:basis-[40%] px-3"
      key={index}
    >
      {child}
    </div>
  ));

  return (
    <div>
      <div className="carousel-viewport overflow-hidden" ref={emblaRef}>
        <div className="carousel-container flex">{slides}</div>
        <div className="progress-track w-full bg-gray-200 rounded h-[5px] overflow-hidden mt-3">
          <div
            className="progress-fill bg-black  rounded h-full"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
