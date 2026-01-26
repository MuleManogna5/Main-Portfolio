(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();function f(){return`
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
  `}function H(){return`
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
      </button>
      <a
        href="/Manogna_M_Resume.pdf"
        download
        class="border border-white/20 px-7 py-3 rounded-xl transition hover:bg-white/5 inline-block">
        Download Resume
      </a>
      </button>
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
  `}function E(){return`
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
      ${n("Figma")}
      ${n("UI Design")}
      ${n("UX Research")}
      ${n("Prototyping")}
      ${n("Design Systems")}
      ${n("Responsive Design")}
      ${n("HTML")}
      ${n("CSS")}
      ${n("Tailwind CSS")}
      ${n("JavaScript")}
      ${n("Python")}
      ${n("MySQL")}
  </div>

</section>
  `}function n(e){return`
    <span
      class="px-5 py-2 rounded-full bg-white/5 border border-white/10
             text-sm text-gray-300
             hover:border-primary hover:text-primary transition"
    >
      ${e}
    </span>
  `}function A(){return`
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

      ${d("UI/UX Designer","Web & Mobile App UI Design.<br>User-friendly layouts & flows<br>Wireframes → High-fidelity designs.")}

      ${d("UX Design","Plan basic user flows, wireframes, and structure to improve usability.")}

      ${d("Frontend Developer","Responsive websites<br>Modern UI implementation<br>Fast & accessible interfaces")}

      ${d("Responsive Design","Design interfaces that adapt to different screen sizes and devices.")}
      ${d("Web Designer","Business & portfolio websites<br>Landing pages<br>Brand-focused design")}   
    </div>

  </section>
  `}function d(e,t){return`
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
        ${e}
      </h3>

      <p class="relative text-gray-400 text-sm leading-relaxed">
        ${t}
      </p>
    </div>
  `}const w=[{id:1,category:"Web Design & Development",title:"E-Commerce Platform - Veloura Store",description:"Fashion Store called as <strong>Veloure Store</strong>. A dark-themed fashion e-commerce frontend showcasing multiple product categories.",tech:["HTML","CSS","Javascript"],github:"https://mulemanogna5.github.io/fashion-store/",gradient:"from-emerald-500/20 to-teal-500/20"},{id:2,category:"UI/UX Design & NLP Application",title:"Textus - Revelio",description:"NLP fastapi sentiment-analysis named-entity-recognition pos-tagging python web-app ui-ux machine-learning.",tech:["HTML","CSS","JavaScript","Python"],github:"https://github.com/MuleManogna5/Textus-Revelio",gradient:"from-indigo-500/20 to-blue-500/20"},{id:3,category:"UI Design",title:"Portfolio Website",description:"Personal portfolio showcasing projects with smooth navigation and clean UI.",tech:["HTML","CSS","Tailwind","JavaScript"],github:"https://github.com/yourusername/portfolio",gradient:"from-pink-500/20 to-rose-500/20"},{id:4,category:"Frontend Development",title:"Password Generator Application",description:"A password generator that creates strong and secure passwords using user-selected criteria.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/MuleManogna5/password-project",gradient:"from-purple-500/20 to-fuchsia-500/20"},{id:5,category:"Web Application",title:"Sentiment Analyzer",description:"Web-based sentiment analysis application built using HTML, CSS, and JavaScript with an interactive UI.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/MuleManogna5/sentiment-analysis",gradient:"from-orange-500/20 to-amber-500/20"},{id:6,category:"UI Design & Web Application",title:"Mind Hue",description:"Web-based sentiment analysis application built using HTML, CSS, and JavaScript with an interactive UI.",tech:["HTML","CSS","JavaScript"],github:"https://github.com/MuleManogna5/Mind-Hue",gradient:"from-emerald-500/20 to-teal-500/20"},{id:7,category:"UI Design & Database",title:"College Management Application",description:" A college management system to handle student records, courses, and faculty information with a user-friendly interface",tech:["HTML","CSS","JavaScript","Python"],github:"https://github.com/MuleManogna5/college-lab",gradient:"from-indigo-500/20 to-blue-500/20"}];function _(e){return`
    <div
      class="group relative rounded-3xl p-8 bg-gradient-to-br ${e.gradient}
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
        ${e.category}
      </span>

      <h3 class="relative text-2xl font-bold mt-3 mb-4">
        ${e.title}
      </h3>

      <p class="relative text-gray-300 text-sm leading-relaxed mb-6">
        ${e.description}
      </p>

      <div class="relative flex flex-wrap gap-2 mb-6">
        ${e.tech.map(t=>`<span class="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300">${t}</span>`).join("")}
      </div>

      <a
        href="${e.github}"
        target="_blank"
        class="relative inline-flex items-center gap-2 text-sm font-medium
               text-white hover:text-primary transition"
      >
        View Project ↗
      </a>
    </div>
  `}function R(){return`
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
      ${w.slice(0,4).map(e=>_(e)).join("")}
    </div>

  </section>
  `}function $(){return`
  <section class="px-10 py-32 max-w-7xl mx-auto">

    <!-- Heading -->
    <h1 class="text-4xl md:text-5xl font-bold mb-20 text-center">
      All <span class="text-primary">Projects</span>
    </h1>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      ${w.map(e=>_(e)).join("")}
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
  `}function B(){return`
  <section
  id="contact"
  class="relative px-0 pt-32 pb-2 max-w-7xl mx-auto overflow-hidden"
>


    <!-- Background Glow -->
<div
  class="absolute inset-0 -z-10
  bg-[radial-gradient(circle_at_30%_20%,rgba(255,47,125,0.18),transparent_60%),
      radial-gradient(circle_at_80%_80%,rgba(120,80,255,0.15),transparent_65%)]">
</div>

<!-- Floating Particles -->
<div class="absolute inset-0 -z-10 pointer-events-none">
  <span class="absolute top-24 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
  <span class="absolute top-1/2 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></span>
  <span class="absolute bottom-32 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></span>
  <span class="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
</div>

<!-- Extra Strong Glow Layers -->
<div
  class="absolute -top-52 left-1/4 w-[500px] h-[500px]
         bg-pink-500/30 blur-[180px] rounded-full
         animate-[floatSlow_14s_ease-in-out_infinite]
         -z-10">
</div>

<div
  class="absolute bottom-0 right-1/4 w-[600px] h-[600px]
         bg-purple-500/25 blur-[200px] rounded-full
         animate-[floatSlow_18s_ease-in-out_infinite]
         -z-10">
</div>


    <!-- Heading -->
    <div class="text-center mb-20">
      <span class="text-primary text-sm">Get In Touch</span>
      <h2 class="text-4xl md:text-5xl font-bold mt-2">
        Let's Work <span class="text-primary">Together</span>
      </h2>
      <p class="text-gray-400 mt-4 max-w-xl mx-auto">
        Have a project in mind? I’d love to hear about it.
      </p>
    </div>

    <!-- MAIN GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      <!-- LEFT COLUMN -->
      <div class="flex flex-col gap-10">

        <!-- CONTACT INFO CARD -->
        <div class="rounded-3xl bg-white/5 border border-white/10 p-10">
          <h3 class="text-2xl font-semibold mb-8">Contact Information</h3>

          <div class="space-y-6">
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                ✉
              </div>
              <div>
                <p class="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:manognareddymule@gmail.com"
                  class="text-lg hover:text-primary transition"
                >
                  manognareddymule@gmail.com
                </a>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                ☎
              </div>
              <div>
                <p class="text-sm text-gray-400">Phone</p>
                <a
                  href="tel:+918374933085"
                  class="text-lg hover:text-primary transition"
                >
                  +91 83749 33085
                </a>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                📍
              </div>
              <div>
                <p class="text-sm text-gray-400">Location</p>
                <p class="text-lg">Kavali, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CURRENTLY AVAILABLE CARD -->
        <div class="rounded-3xl border border-primary/30 bg-primary/10 p-8">
          <div class="flex gap-4 items-start">
            <span class="w-3 h-3 mt-1 rounded-full bg-primary"></span>
            <div>
              <p class="font-semibold text-lg">
                Currently available for freelance work
              </p>
              <p class="text-sm text-gray-400 mt-1">
                I usually respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT COLUMN : SEND MESSAGE -->
      <div class="rounded-3xl bg-white/5 border border-white/10 p-10">
        <h3 class="text-2xl font-semibold mb-8">Send a Message</h3>

        <form id="contact-form" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="text-sm text-gray-400">Name</label>
              <input
                id="user_name"
                type="text"
                placeholder="Enter your name"
                class="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label class="text-sm text-gray-400">Email</label>
              <input
                id="user_email"
                type="email"
                placeholder="Enter your email"
                class="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label class="text-sm text-gray-400">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Project inquiry"
              class="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label class="text-sm text-gray-400">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell me about your project..."
              class="w-full mt-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Send Message 
          </button>
        </form>
      </div>

    </div>


  </section>
  <!-- FOOTER -->
<footer
  class="relative z-30 w-full
         bg-black/60 backdrop-blur-xl
         border-t border-white/10
         px-10 py-6
         flex flex-col md:flex-row
         items-center justify-between
         gap-6 text-sm"
>

  <!-- LEFT : NAME -->
  <span class="text-xl font-bold text-primary">
    Manogna M
  </span>

  <!-- CENTER : SOCIAL ICONS -->
  <div class="flex gap-8 items-center">

    <!-- GitHub -->
    <a
      href="https://github.com/MuleManogna5"
      target="_blank"
      class="text-gray-400 hover:text-primary transition hover:scale-110"
      aria-label="GitHub"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.38s1.96.13 2.88.38c2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56A11.53 11.53 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
      </svg>
    </a>

    <!-- LinkedIn -->
    <a
      href="https://www.linkedin.com/in/manognamule/"
      target="_blank"
      class="text-gray-400 hover:text-primary transition hover:scale-110"
      aria-label="LinkedIn"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.83v2.12h.05c.53-1 1.83-2.12 3.77-2.12 4.03 0 4.77 2.65 4.77 6.1v9.42h-4v-8.35c0-1.99-.04-4.55-2.77-4.55-2.77 0-3.19 2.16-3.19 4.4v8.5h-4V7.98z"/>
      </svg>
    </a>

    <!-- Twitter -->
    <a
      href="https://x.com/Manogna_Mule"
      target="_blank"
      class="text-gray-400 hover:text-primary transition hover:scale-110"
      aria-label="Twitter"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.95 4.57a10 10 0 01-2.83.78 4.94 4.94 0 002.17-2.72 9.9 9.9 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.98 13.98 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 21.54 13.94 13.94 0 007.55 24c9.06 0 14.01-7.5 14.01-14v-.64a9.93 9.93 0 002.44-2.53z"/>
      </svg>
    </a>

  </div>

  <!-- RIGHT : COPYRIGHT -->
  <span class="text-gray-400 text-sm">
    Made with 🩷 © 2026 Manogna
  </span>

</footer>

  `}class p{constructor(t=0,a="Network Error"){this.status=t,this.text=a}}const D=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:D()},v=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},z=(e,t="https://api.emailjs.com")=>{if(!e)return;const a=v(e);o.publicKey=a.publicKey,o.blockHeadless=a.blockHeadless,o.storageProvider=a.storageProvider,o.blockList=a.blockList,o.limitRate=a.limitRate,o.origin=a.origin||t},k=async(e,t,a={})=>{const s=await fetch(o.origin+e,{method:"POST",headers:a,body:t}),r=await s.text(),i=new p(s.status,r);if(s.ok)return i;throw i},S=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},F=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},M=e=>e.webdriver||!e.languages||e.languages.length===0,L=()=>new p(451,"Unavailable For Headless Browser"),O=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},N=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},U=(e,t)=>e instanceof FormData?e.get(t):e[t],j=(e,t)=>{if(N(e))return!1;O(e.list,e.watchVariable);const a=U(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},T=()=>new p(403,"Forbidden"),V=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},G=async(e,t,a)=>{const s=Number(await a.get(e)||0);return t-Date.now()+s},P=async(e,t,a)=>{if(!t.throttle||!a)return!1;V(t.throttle,t.id);const s=t.id||e;return await G(s,t.throttle,a)>0?!0:(await a.set(s,Date.now().toString()),!1)},I=()=>new p(429,"Too Many Requests"),W=async(e,t,a,s)=>{const r=v(s),i=r.publicKey||o.publicKey,l=r.blockHeadless||o.blockHeadless,u=r.storageProvider||o.storageProvider,m={...o.blockList,...r.blockList},g={...o.limitRate,...r.limitRate};return l&&M(navigator)?Promise.reject(L()):(S(i,e,t),F(a),a&&j(m,a)?Promise.reject(T()):await P(location.pathname,g,u)?Promise.reject(I()):k("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},J=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},q=e=>typeof e=="string"?document.querySelector(e):e,K=async(e,t,a,s)=>{const r=v(s),i=r.publicKey||o.publicKey,l=r.blockHeadless||o.blockHeadless,u=o.storageProvider||r.storageProvider,m={...o.blockList,...r.blockList},g={...o.limitRate,...r.limitRate};if(l&&M(navigator))return Promise.reject(L());const b=q(a);S(i,e,t),J(b);const c=new FormData(b);return j(m,c)?Promise.reject(T()):await P(location.pathname,g,u)?Promise.reject(I()):(c.append("lib_version","4.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",i),k("/api/v1.0/email/send-form",c))},h={init:z,send:W,sendForm:K,EmailJSResponseStatus:p};function X(){const e=document.getElementById("contact-form");e&&e.addEventListener("submit",t=>{t.preventDefault();const a=document.getElementById("user_name").value,s=document.getElementById("user_email").value,r=document.getElementById("subject").value,i=document.getElementById("message").value;h.send("manogna_mule","template_q5hx0ql",{name:a,email:s,subject:r,message:i}).then(()=>h.send("manogna_mule","template_usrnv9m",{name:a,email:s,subject:r})).then(()=>{alert("Message sent successfully 🚀"),e.reset()}).catch(l=>{console.error("EmailJS Error:",l),alert("Something went wrong ❌")})})}h.init("Qe63PjyAAw6bxZx6E");const x=document.getElementById("app");function y(){const e=document.querySelectorAll(".nav-link");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),t.classList.add("active")})})}function C(){const e=window.location.hash;if(e==="#/projects"){x.innerHTML=`
      ${f()}
      ${$()}
    `,y(),window.scrollTo({top:0,behavior:"smooth"});return}if(x.innerHTML=`
  <div class="min-h-screen flex flex-col">
    
    <div class="flex-grow">
      ${f()}
      ${H()}
      ${E()}
      ${A()}
      ${R()}
      ${B()}
    </div>

  </div>
`,y(),X(),e==="#/home"||e==="")window.scrollTo({top:0,behavior:"smooth"});else if(e){const t=e.replace("#/",""),a=document.getElementById(t);a==null||a.scrollIntoView({behavior:"smooth"})}}window.addEventListener("hashchange",C);C();document.addEventListener("click",e=>{e.target.id==="view-all-projects"&&(window.location.hash="#/projects")});document.addEventListener("click",e=>{e.target.id==="back-to-projects"&&(window.location.hash="#/home",setTimeout(()=>{var a;(a=document.getElementById("projects"))==null||a.scrollIntoView({behavior:"smooth"})},200))});document.addEventListener("click",e=>{e.target.id==="hero-view-projects"&&(window.location.hash="#/projects")});
