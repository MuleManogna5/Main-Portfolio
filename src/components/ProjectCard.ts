export function ProjectCard(project: any) {
  return `
    <div
      class="group relative rounded-3xl p-8 bg-gradient-to-br ${project.gradient}
             border border-white/10
             hover:border-primary
             hover:-translate-y-2
             hover:shadow-[0_30px_80px_rgba(255,47,125,0.25)]
             transition-all duration-500 ease-out overflow-hidden"
    >

      <!-- Overlay Glow -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition
               bg-[radial-gradient(circle_at_top,rgba(255,47,125,0.15),transparent_60%)]">
      </div>

      <span class="relative text-sm text-primary font-medium">
        ${project.category}
      </span>

      <h3 class="relative text-2xl font-bold mt-3 mb-4">
        ${project.title}
      </h3>

      <p class="relative text-gray-300 text-sm leading-relaxed mb-6">
        ${project.description}
      </p>

      <div class="relative flex flex-wrap gap-2 mb-6">
        ${project.tech
          .map(
            (t: string) =>
              `<span class="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">${t}</span>`
          )
          .join("")}
      </div>

      <a
        href="${project.github}"
        target="_blank"
        class="relative inline-flex items-center gap-2 text-sm font-medium
               text-white hover:text-primary transition"
      >
        View Project ↗
      </a>
    </div>
  `;
}
