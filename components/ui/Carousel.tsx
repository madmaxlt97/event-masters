import React, { Children } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();

  const slides = Children.toArray(children).map((child, index) => (
    <div
      className="carousel-slide shrink-0 basis-full lg:basis-1/2 px-3"
      key={index}
    >
      {child}
    </div>
  ));

  return (
    <div>
      <div className="carousel-viewport overflow-hidden" ref={emblaRef}>
        <div className="carousel-container flex">{slides}</div>
      </div>
      {/*<button className="embla_prev">←</button>
      <button className="embla_next">→</button>*/}
    </div>
  );
}
