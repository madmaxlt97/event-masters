import ProjectShowcase from "./ProjectShowcase";
import { projects } from "@/data/projects";
import FadeIn from "../animations/FadeIn";

export default function ProjectsList() {
  return (
    <section className="pb-24">
      <div className="space-y-24">
        {projects.map((project) => (
          <FadeIn key={project.title}>
            <ProjectShowcase
              project={project}
              /*index={index}*/
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
