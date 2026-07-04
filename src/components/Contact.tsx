"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    
    // Read the access key from the environment variable
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      alert("Configuration Error: The Web3Forms access key is missing! Please stop your terminal (Ctrl + C) and run 'npm run dev' again to load the new .env.local file.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }
    
    formData.append("access_key", accessKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await res.json();
        console.error("Web3Forms error:", data);
        alert(`Error: ${data.message || "Failed to send email"}`);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert(`Network error: ${String(err)}`);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            <span className="text-cyber-blue">&lt;</span> Get In Touch <span className="text-cyber-blue">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-aws-orange mx-auto rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-aws-orange/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="text-center mb-8">
              <Mail className="mx-auto text-aws-orange mb-4" size={40} />
              <p className="text-gray-300">
                Interested in working together or have a question? Let's connect!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-blue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-blue transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-blue transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {/* Bot Poison / Honeypot (required by Web3Forms) */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full py-4 rounded-lg font-bold tracking-wide flex items-center justify-center gap-2 transition-all ${
                  status === "submitting" ? "bg-cyber-blue/50 text-white/50 cursor-not-allowed" : "bg-cyber-blue text-white hover:bg-cyber-blue/90 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                }`}
              >
                {status === "idle" && <><Send size={20} /> Send Message</>}
                {status === "submitting" && "Sending..."}
                {status === "success" && <><CheckCircle2 size={20} /> Sent Successfully!</>}
                {status === "error" && <><AlertCircle size={20} /> Error Sending</>}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
