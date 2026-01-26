import emailjs from "@emailjs/browser";

export function initContactForm() {
  const form = document.getElementById("contact-form") as HTMLFormElement;
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = (document.getElementById("user_name") as HTMLInputElement).value;
    const userEmail = (document.getElementById("user_email") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    // 1️⃣ SEND MAIL TO YOU (MAIN TEMPLATE)
    emailjs
      .send(
        "manogna_mule",        // ✅ service ID
        "template_q5hx0ql",    // ✅ Contact Us (MAIN)
        {
          name: userName,
          email: userEmail,
          subject: subject,
          message: message,
        }
      )
      .then(() => {
        // 2️⃣ AUTO-REPLY TO USER
        return emailjs.send(
          "manogna_mule",
          "template_usrnv9m",  // ✅ Auto-Reply
          {
            name: userName,
            email: userEmail,
            subject: subject,
          }
        );
      })
      .then(() => {
        alert("Message sent successfully 🚀");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong ❌");
      });
  });
}
