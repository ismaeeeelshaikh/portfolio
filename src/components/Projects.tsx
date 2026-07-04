"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Nyaya Mitra AI",
    description:
      "Serverless legal AI application short-listed for AI for Bharat ($100 AWS grant). Integrated Amazon Nova Pro for document summarization and legal drafting.",
    tags: ["AWS CDK", "Lambda", "API Gateway", "DynamoDB", "Amazon Nova Pro"],
    featured: true,
  },
  {
    title: "Smart Campus Connect",
    description:
      "AI-powered RAG assistant processing the entire college website into ChromaDB for contextual responses. Uses conversational memory.",
    tags: ["Python", "LangChain", "Groq", "PostgreSQL", "ChromaDB"],
    featured: true,
  },
  {
    title: "Nyaab Gifts",
    description:
      "Full-stack personalized e-commerce platform. Managed 15+ registered users securely with complete checkout flow.",
    tags: ["Next.js", "MongoDB", "Cloudinary", "Cashfree"],
    featured: false,
  },
  {
    title: "DevOps Club Official Website",
    description:
      "Architected frontend with real-time event registrations (60+ users). Established automated CI/CD pipelines ensuring zero downtime.",
    tags: ["React", "Firebase", "CI/CD"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            <span className="text-cyber-blue">&lt;</span> Featured Projects <span className="text-cyber-blue">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-aws-orange mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-xl border transition-all duration-300 group relative overflow-hidden flex flex-col h-full ${
                project.featured
                  ? "border-cyber-blue/30 hover:border-cyber-blue hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]"
                  : "border-white/5 hover:border-white/20"
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

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                {project.title}
              </h3>
              
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
        </div>
      </div>
    </section>
  );
}
