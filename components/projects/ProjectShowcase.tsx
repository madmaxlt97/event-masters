import { Project } from "@/types/projects";
import Button from "../ui/Button";
import Image from "next/image";
import Container from "../ui/Container";

type ProjectCardProps = {
  project: Project;
  index: number;
  priority?: boolean;
  reverse?: boolean;
};
export default function ProjectShowcase({
  project,
  index,
  priority = false,
  reverse = false,
}: ProjectCardProps) {
  return (
    <article>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={`relative aspect-[16/9] overflow-hidden rounded-3xl max-w-3xl ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              priority={priority}
              quality={60}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className={`max-w-lg ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
              PROJECT {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className=" text-3xl font-semibold">{project.title}</h2>
            <p className="mt-5 leading-7 text-gray-600">
              {project.description}
            </p>
            <Button
              href={`/projects/${project.slug}`}
              className="mt-7 shrink-0 font-medium text-gray-500 transition-colors duration-300 hover:text-black"
            >
              View Project →
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
