import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="text-gray-900">
      <section className="pt-14 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
        <Container>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            ← Back to projects
          </Link>
          <FadeIn>
            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                OUR PROJECT
              </p>
              <h1 className="mt-3 text-4xl font-semibold sm:text-5xl leg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                {project.description}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[16/9] lg:aspect-[16/7]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <ProjectGallery project={project} />
          </FadeIn>
          <div className="mt-20 border-t border-border-custom pt-16 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Planning something special?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Let's create an event that feels uniquely yours.
            </p>
            <Button href="/#contact" className="mt-8">
              Start Your Project →
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
