export function Contact() {
  return `
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

  `;
  
}
