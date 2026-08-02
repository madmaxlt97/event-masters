import { Service } from "@/types/service";

export default function ServiceCard({ title, description, icon }: Service) {
  return (
    <article className="p-8 rounded-2xl bg-white shadow-md hover:-translate-y-2 hover:shadow-xl hover:bg-red-50 transition-all duration-300">
      <div className="mb-6 w-fit rounded-xl bg-red-50 p-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 loading-relaxed">{description}</p>
    </article>
  );
}
