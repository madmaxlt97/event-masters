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
          <p className="mb-4 text-sm uppercase tracking-widest text-gray-600">
            PROJECTS WE ARE PROUD OF
          </p>
          <h2 className="text-4xl font-bold">
            A few events we've brought to life.
          </h2>
          <div className="mt-12">
            <Carousel>
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </Carousel>
          </div>
        </Container>
      </section>
    </FadeIn>
  );
}
