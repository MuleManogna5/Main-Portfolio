import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return `
  <section
    id="projects"
    class="relative px-10 py-32 max-w-7xl mx-auto overflow-hidden bg-black"
  >

    <!-- Projects Background Glow -->
    <div
      class="absolute inset-0 z-0
      bg-[radial-gradient(circle_at_20%_20%,rgba(255,47,125,0.22),transparent_55%),
          radial-gradient(circle_at_80%_30%,rgba(120,80,255,0.16),transparent_60%),
          radial-gradient(circle_at_50%_90%,rgba(255,140,0,0.10),transparent_65%)]">
    </div>

    <!-- Floating Blur -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2
             w-[700px] h-[700px]
             bg-primary/25
             blur-[160px]
             rounded-full
             animate-[pulse_10s_ease-in-out_infinite]
             z-0">
    </div>

    <!-- Header -->
    <div class="relative z-10 flex justify-between items-end mb-14">
      <div>
        <span class="text-primary text-sm">My Work</span>
        <h2 class="text-4xl md:text-5xl font-bold mt-2">
          Featured <span class="text-primary">Projects</span>
        </h2>
      </div>

      <!-- WORKING BUTTON -->
      <button
        id="view-all-projects"
        class="border border-white/20 px-6 py-3 rounded-xl
               hover:border-primary transition">
        View All Projects ↗
      </button>
    </div>

    <!-- Grid (ONLY 4 FEATURED) -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      ${projects
        .slice(0, 4)
        .map((project) => ProjectCard(project))
        .join("")}
    </div>

  </section>
  `;
}
