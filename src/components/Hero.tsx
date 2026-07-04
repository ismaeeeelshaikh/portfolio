"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-top w-full h-full opacity-100"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-aws-orange">Ismaeel Shaikh</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-200 font-medium mb-10 max-w-2xl drop-shadow-md">
            Full-Stack Developer | Cloud & DevOps Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-cyber-blue text-white rounded font-semibold tracking-wide hover:bg-cyber-blue/90 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all"
          >
            View Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            className="px-8 py-3 glass-card text-white rounded font-semibold tracking-wide hover:bg-white/10 transition-all border border-white/10"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
