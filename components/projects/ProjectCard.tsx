import { Project } from "@/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="
        absolute inset-0 
        bg-gradient-to-t from-black/70 via-black/20 to-transparent
        opacity-0 
        transition-opacity 
        duration-500
        group-hover:opacity-100
        "
        />
        <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="text-xl font-medium">{project.title}</h3>
        </div>
      </div>
      {/*<div>
        <p>{project.description}</p>
      </div>*/}
    </article>
  );
}
