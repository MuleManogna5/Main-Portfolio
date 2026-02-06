export function Hero() {
  return `
<section id = "Home" class="px-10 py-24 flex flex-col md:flex-row items-center justify-between gap-24">

  <!-- Left Content -->
  <div class="max-w-xl">
    <h2 class="font-extrabold leading-[1.05] mb-8">
      <span class="block text-4xl md:text-5xl text-white mb-2">
        Hi, I'm
      </span>
      <span class="block text-6xl md:text-7xl text-primary">
        Manogna
      </span>
      <span class="block text-2xl md:text-4xl text-white">
      </span>
    </h2>
    <p class="text-gray-300/80 text-lg leading-relaxed max-w-xl mb-10">
      I’m a fresher UI/UX and frontend developer passionate about designing clean, user-friendly
      interfaces and building responsive web applications. I focus on layout design, color usage,
      typography, and usability to create intuitive digital experiences. I enjoy translating ideas
      and user needs into functional designs using modern web technologies.
    </p>
    <!-- Buttons -->
    <div class="flex gap-5">
      <button
        id="hero-view-projects"
        class="bg-primary text-black px-7 py-3 rounded-xl font-semibold transition hover:scale-105"
      >
        View Projects →
      
   <a
  href="./Manogna_M_Resume.pdf"
  download
  target="_blank"
  class="border border-white/20 px-7 py-3 rounded-xl transition hover:bg-white/5 inline-block"
>
  Download Resume
</a>

      
      </div>

      <!-- Checkout Icons -->
      <div class="flex items-center gap-4 mt-6">
        <span class="text-gray-400 text-sm">Checkout:</span>

        <!-- GitHub -->
        <a
          href="https://github.com/MuleManogna5"
          target="_blank"
          class="text-gray-400 hover:text-primary transition"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.17a11.1 11.1 0 0 1 5.8 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.59.23 2.77.11 3.06.74.8 1.19 1.82 1.19 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.08.78 2.18v3.23c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/manognamule/"
          target="_blank"
          class="text-gray-400 hover:text-primary transition"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.09h4.56V24H.22zM8.09 8.09h4.37v2.18h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.1h-4.56v-7.18c0-1.71-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78v7.3H8.09z"/>
          </svg>
        </a>
      </div>

    </div>

    <!-- Right Circle -->
    <div class="relative w-[370px] h-[370px] flex items-center justify-center">
      <div class="absolute inset-0 rounded-full border border-primary opacity-25 blur-lg"></div>
      <div class="absolute inset-5 rounded-full border border-primary opacity-50"></div>

      <div class="relative z-10 w-[230px] h-[230px] rounded-full bg-black flex items-center justify-center text-8xl font-bold text-primary glow-pink">
        M
      </div>
    </div>

  </section>
  `;
}
