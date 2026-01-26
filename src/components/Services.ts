export function Services() {
  return `
  <section
  id="services"
  class="relative isolate z-20 px-10 py-32 max-w-7xl mx-auto overflow-hidden"
>

   <!-- Services Background Glow -->
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

    <!-- Subtle Side Glow -->
    <div
      class="absolute top-1/3 -left-40
             w-[400px] h-[400px]
             bg-primary/15
             blur-[140px]
             rounded-full
             -z-10">
    </div>

    <!-- Floating Accent Dots -->
    <div class="absolute inset-0 -z-10 pointer-events-none opacity-60">
      <span class="absolute top-24 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
      <span class="absolute top-40 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></span>
      <span class="absolute bottom-32 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></span>
      <span class="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
      <span class="absolute top-1/2 right-1/2 w-1 h-1 bg-primary rounded-full animate-pulse"></span>
    </div>

    <!-- Heading -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 relative">
      What I Do
    </h2>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      ${serviceCard(
        "UI/UX Designer",
        "Web & Mobile App UI Design.<br>User-friendly layouts & flows<br>Wireframes → High-fidelity designs."
      )}

      ${serviceCard(
        "UX Design",
        "Plan basic user flows, wireframes, and structure to improve usability."
      )}

      ${serviceCard(
        "Frontend Developer",
        "Responsive websites<br>Modern UI implementation<br>Fast & accessible interfaces"
      )}

      ${serviceCard(
        "Responsive Design",
        "Design interfaces that adapt to different screen sizes and devices."
      )}
      ${serviceCard(
          "Web Designer",
         "Business & portfolio websites<br>Landing pages<br>Brand-focused design"
      )}   
    </div>

  </section>
  `;
}

function serviceCard(title: string, description: string) {
  return `
    <div
      class="group p-8 rounded-2xl bg-white/5 border border-white/10
             hover:border-primary
             hover:-translate-y-3
             hover:shadow-[0_25px_70px_rgba(255,47,125,0.28)]
             transition-all duration-500 ease-out
             relative overflow-hidden"
    >

      <!-- Card Glow Overlay -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition
               bg-[radial-gradient(circle_at_top,rgba(255,47,125,0.12),transparent_65%)]">
      </div>

      <div
        class="relative w-12 h-12 mb-6 rounded-lg
               bg-primary/10 text-primary
               flex items-center justify-center text-xl font-bold
               shadow-[0_0_25px_rgba(255,47,125,0.35)]"
      >
        •
      </div>

      <h3 class="relative text-xl font-semibold mb-3">
        ${title}
      </h3>

      <p class="relative text-gray-400 text-sm leading-relaxed">
        ${description}
      </p>
    </div>
  `;
}
