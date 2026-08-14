import Container from "@/components/ui/Container";
import ProjectsList from "@/components/projects/ProjectsList";

export default function ProjectsPage() {
  return (
    <main>
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            OUR PORTFOLIO
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Events That Tell a Story
          </h1>
          <p className="mt-5 max-w-2xl text-gray-600">
            Every celebration is unique. From intimate weddings to large
            corporate events, each project reflects thoughtful planning, elegant
            design, and attention to every detail.
          </p>
        </Container>
      </section>
      <ProjectsList />
    </main>
  );
}
