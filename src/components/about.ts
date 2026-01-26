export function About() {
  return `
<section
    id="about"
    class="px-0 py-32 max-w-6xl mx-auto text-center"
>
    
 <div
    class="absolute inset-0 -z-10
      bg-[radial-gradient(circle_at_center,rgba(255,47,125,0.12),transparent_60%)]">
  </div>

  <!-- Small Label -->
  <span class="text-primary text-sm tracking-widest uppercase">
    About Me
  </span>

  <!-- Main Heading -->
  <h2 class="text-4xl md:text-4xl font-extrabold mt-3 mb-4 leading-tight">
    Focused on building
  <span class="text-primary">digital experiences</span>
  </h2>

  <!-- Description -->
  <p class="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
    I’m a UI/UX designer who works on designing user interfaces and user experiences
    for web applications. My work focuses on layout structure, color usage, typography,
    and usability to create clear and intuitive designs.
  </p>

  <!-- Optional Line -->
  <p class="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-16">
    I convert requirements and ideas into structured, user-friendly, and functional
    designs that align with both user needs and business goals.
  </p>

  <!-- Skills -->
  <h3 class="text-2xl font-semibold mb-8">
    My Skills
  </h3>

  <div class="flex flex-wrap justify-center gap-4">
      ${skill("Figma")}
      ${skill("UI Design")}
      ${skill("UX Research")}
      ${skill("Prototyping")}
      ${skill("Design Systems")}
      ${skill("Responsive Design")}
      ${skill("HTML")}
      ${skill("CSS")}
      ${skill("Tailwind CSS")}
      ${skill("JavaScript")}
      ${skill("Python")}
      ${skill("MySQL")}
  </div>

</section>
  `;

}

/* Skill Pill */
function skill(name: string) {
  return `
    <span
      class="px-5 py-2 rounded-full bg-white/5 border border-white/10
             text-sm text-gray-300
             hover:border-primary hover:text-primary transition"
    >
      ${name}
    </span>
  `;
}
