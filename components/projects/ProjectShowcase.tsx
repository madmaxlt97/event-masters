import { Project } from "@/types/projects";
import Button from "../ui/Button";
import Image from "next/image";
import Container from "../ui/Container";

type ProjectCardProps = {
  project: Project;
};
export default function ProjectShowcase({ project }: ProjectCardProps) {
  return (
    <article>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl max-w-3xl">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="max-w-lg">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
              Featured Project
            </p>
            <h2 className=" text-3xl font-semibold">{project.title}</h2>
            <p className="mt-5 leading-7 text-gray-600">
              {project.description}
            </p>
            <Button href={`/projects/${project.slug}`} className="mt-7">
              View Project →
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
