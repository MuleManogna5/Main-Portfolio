import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export function AllProjects() {
  return `
  <section class="px-10 py-32 max-w-7xl mx-auto">

    <!-- Heading -->
    <h1 class="text-4xl md:text-5xl font-bold mb-20 text-center">
      All <span class="text-primary">Projects</span>
    </h1>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      ${projects.map((project) => ProjectCard(project)).join("")}
    </div>

    <!-- Back Button -->
    <div class="mt-24 flex justify-center">
      <button
        id="back-to-projects"
        class="flex items-center gap-2
               border border-white/20
               px-7 py-3 rounded-xl
               hover:border-primary hover:text-primary
               transition-all"
      >
        ← Back to Projects
      </button>
    </div>

  </section>
  `;
}
