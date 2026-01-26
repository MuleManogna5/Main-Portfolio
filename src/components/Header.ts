export function Header() {
  return `
  <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">

    <!-- Logo -->
    <h1 class="text-xl font-bold">
      <span class="text-primary">Manogna M</span> 
    </h1>

    <!-- Nav -->
    <nav class="hidden md:flex gap-8 text-gray-300">
        <a href="#/home" class="nav-link">Home</a>
        <a href="#/about" class="nav-link">About</a>
        <a href="#/services" class="nav-link">Services</a>
        <a href="#/projects" class="nav-link">Projects</a>
        <a href="#/contact" class="nav-link">Contact</a>
    </nav>

    <!-- CTA -->
    <a
      href="#/contact"
      class="bg-primary text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
    >
      Hire Me
    </a>
  </div>
  </header>
  `;
}
