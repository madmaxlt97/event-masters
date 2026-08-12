import Container from "../ui/Container";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "@/data/projects";
import Carousel from "../ui/Carousel";
import FadeIn from "../animations/FadeIn";

export default function Projects() {
  return (
    <FadeIn>
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <Container>
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-500">
            PROJECTS WE ARE PROUD OF
          </p>
          <Carousel>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Carousel>
        </Container>
      </section>
    </FadeIn>
  );
}
