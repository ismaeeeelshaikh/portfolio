"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Nyaya Mitra AI",
    description:
      "Serverless legal AI application short-listed for AI for Bharat ($100 AWS grant). Integrated Amazon Nova Pro for document summarization and legal drafting.",
    tags: ["AWS CDK", "Lambda", "API Gateway", "DynamoDB", "Amazon Nova Pro"],
    category: "Cloud/DevOps",
    featured: true,
  },
  {
    title: "Smart Campus Connect",
    description:
      "AI-powered RAG assistant processing the entire college website into ChromaDB for contextual responses. Uses conversational memory.",
    tags: ["Python", "LangChain", "Groq", "PostgreSQL", "ChromaDB"],
    category: "AI/ML",
    featured: true,
  },
  {
    title: "Nyaab Gifts",
    description:
      "Full-stack personalized e-commerce platform. Managed 15+ registered users securely with complete checkout flow.",
    tags: ["Next.js", "MongoDB", "Cloudinary", "Cashfree"],
    category: "Full-Stack",
    featured: false,
  },
  {
    title: "DevOps Club Official Website",
    description:
      "Architected frontend with real-time event registrations (60+ users). Established automated CI/CD pipelines ensuring zero downtime.",
    tags: ["React", "Firebase", "CI/CD"],
    category: "Full-Stack",
    featured: false,
  },
];

const categories = ["All", "Full-Stack", "AI/ML", "Cloud/DevOps"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            <span className="text-cyber-blue">&lt;</span> Featured Projects <span className="text-cyber-blue">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-aws-orange mx-auto rounded mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-cyber-blue text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-8 rounded-xl border transition-all duration-300 group relative overflow-hidden flex flex-col h-full ${
                  project.featured
                    ? "border-cyber-blue/30 hover:border-cyber-blue hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                    : "border-white/5 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                }`}
              >
                {project.featured && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-transparent"></div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <FolderGit2 className={project.featured ? "text-cyber-blue" : "text-gray-400"} size={36} />
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Code2 size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-mono text-aws-orange mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
