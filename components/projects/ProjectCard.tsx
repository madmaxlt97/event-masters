import { Project } from "@/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}
