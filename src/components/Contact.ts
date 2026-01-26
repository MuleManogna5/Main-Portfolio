export function Contact() {
  return `
<section
    id="contact"
    class="relative px-10 py-32 max-w-7xl mx-auto overflow-hidden"
>

  <!-- Background Glow -->
  <div
    class="absolute inset-0 -z-10
      bg-[radial-gradient(circle_at_20%_20%,rgba(255,47,125,0.18),transparent_55%),
      radial-gradient(circle_at_80%_40%,rgba(120,80,255,0.15),transparent_60%),
      radial-gradient(circle_at_50%_90%,rgba(0,255,200,0.10),transparent_65%)]">
  </div>

  <!-- Ambient Blur -->
  <div
    class="absolute top-0 left-1/2 -translate-x-1/2
      w-[700px] h-[700px]
      bg-primary/20 blur-[160px]
      rounded-full animate-[pulse_10s_ease-in-out_infinite]
      -z-10">
  </div>

  <!-- Heading -->
  <div class="text-center mb-20">
    <span class="text-primary text-sm">Get In Touch</span>
      <h2 class="text-4xl md:text-5xl font-bold mt-3">
        Let's Work <span class="text-primary">Together</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto mt-6">
        Have a project in mind? Send a message and let's create something meaningful.
      </p>
  </div>

  <!-- Content -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

  <!-- Contact Info -->
  <div
    class="p-10 rounded-3xl bg-white/5 border border-white/10">
    <h3 class="text-2xl font-semibold mb-8">Contact Information</h3>
    <div class="space-y-6 text-gray-300">
    <div class="flex items-center gap-4">
    <span class="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">✉</span>
    <span>manognareddymule@gmail.com</span>
  </div>

  <div class="flex items-center gap-4">
    <span class="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">📞</span>
    <span>+91 8374933085</span>
    </div>
    </div>

  <!-- Availability Badge -->
  <div
    class="mt-10 p-6 rounded-2xl border border-primary/30
      bg-primary/10 text-sm text-gray-200">
      <span class="text-primary font-semibold">● Available for work</span><br />
      I usually respond within 24 hours.
      </div>
  </div>

  <!-- Contact Form -->
  <div
    class="p-10 rounded-3xl bg-white/5 border border-white/10">
    <h3 class="text-2xl font-semibold mb-8">Send a Message</h3>
    <form class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      placeholder="Your Name"
      class="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10
      focus:border-primary outline-none"
    />
    <input
      type="email"
      placeholder="Email Address"
      class="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10
      focus:border-primary outline-none"
    />
  </div>
    <input
      type="text"
      placeholder="Subject"
      class="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10
      focus:border-primary outline-none"
    />
    <textarea
      rows="5"
      placeholder="Tell me about your project..."
      class="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/1
      focus:border-primary outline-none resize-none"
    ></textarea>
    <button
      type="submit"
      class="w-full bg-primary text-black py-4 rounded-xl font-semibold
      hover:scale-[1.02] transition"
    >
    Send Message
          </button>

        </form>
      </div>

    </div>

  </section>
  `;
}
