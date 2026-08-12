import Image from "next/image";
import { Project } from "@/types/projects";
import { div } from "motion/react-client";

type ProjectGalleryProps = {
  project: Project;
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.images.slice(1);

  if (!images.length) return null;

  return (
    <div className="mt-16 grid gap-16 sm:grid-cols-2">
      {images.map((image, index) => (
        <div
          key={image}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl"
        >
          <Image
            src={image}
            alt={`${project.title} - image ${index + 2}`}
            fill
            sizes="(max-width: 640px) 10vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
