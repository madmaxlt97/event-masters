import Container from "../ui/Container";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "@/data/projects";
import Carousel from "../ui/Carousel";

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <Carousel>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
