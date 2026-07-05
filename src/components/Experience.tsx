"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Medal } from "lucide-react";

export default function Experience() {
  const achievements = [
    "Elite NPTEL DBMS Certification (IIT Kharagpur)",
    "First Runner-up - Sparkathon APSIT",
    "Certificate of Achievement - GDG Solution Challenge",
    "Certifications in IBM Agentic AI, Generative AI Mastermind, Python, and Cybersecurity",
  ];

  return (
    <section id="experience" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            <span className="text-aws-orange">&lt;</span> Experience & Achievements <span className="text-aws-orange">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aws-orange to-cyber-blue mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-cyber-blue" /> Professional Journey
            </h3>

            <div className="relative border-l-2 border-white/10 pl-8 ml-3 space-y-12">
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-background border-2 border-aws-orange rounded-full -left-[41px] top-1.5 shadow-[0_0_10px_rgba(255,153,0,0.5)]"></div>

                <h4 className="text-xl font-bold text-white">Technical Co-Head</h4>
                <p className="text-cyber-blue font-medium mb-3">DevOps Club APSIT</p>

                <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-aws-orange/70 mt-1">-</span>
                    <span>Formulated a 16-week technical curriculum from Linux basics to advanced Cloud deployments.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-aws-orange/70 mt-1">-</span>
                    <span>Executed specialized bootcamps for Linux and LaTeX, receiving official Letters of Appreciation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-aws-orange/70 mt-1">-</span>
                    <span>Mentored junior students on foundational DevOps tools including Docker, Jenkins, and Git.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-aws-orange" /> Recognitions
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-lg border border-white/5 flex items-start gap-4 hover:border-aws-orange/30 transition-colors group"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-aws-orange/10 transition-colors shrink-0">
                    <Medal className="text-gray-400 group-hover:text-aws-orange transition-colors" size={24} />
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
