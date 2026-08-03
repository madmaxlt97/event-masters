import React, { Children } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "../projects/ProjectCard";

type CarouselProps = {
  children: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();

  const slides = Children.toArray(children).map((child) => (
    <div className="embla_slide" key={crypto.randomUUID()}>
      {child}
    </div>
  ));

  return (
    <div>
      <div className="embla_viewport overflow-hidden" ref={emblaRef}>
        <div className="embla_container flex touch-pan-y pinch-zoom">
          {slides}
        </div>
      </div>
      <button className="embla_prev">←</button>
      <button className="embla_next">→</button>
    </div>
  );
}
