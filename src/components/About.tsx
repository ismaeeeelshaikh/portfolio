"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Cloud, Terminal, Database, BrainCircuit, Shield } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Languages",
      icon: <Code2 className="text-cyber-blue mb-2" size={28} />,
      items: ["Python", "TypeScript", "Java", "C/C++", "JavaScript"],
    },
    {
      category: "Frameworks",
      icon: <Terminal className="text-aws-orange mb-2" size={28} />,
      items: ["React", "Node.js", "FastAPI", "Vite"],
    },
    {
      category: "Cloud",
      icon: <Cloud className="text-cyber-blue mb-2" size={28} />,
      items: ["AWS (Lambda, API Gateway, S3, Cognito, Bedrock)", "AWS CDK", "Vercel", "Netlify"],
    },
    {
      category: "DevOps",
      icon: <Terminal className="text-aws-orange mb-2" size={28} />,
      items: ["Git", "GitHub", "Docker", "Jenkins", "Ansible"],
    },
    {
      category: "Databases",
      icon: <Database className="text-cyber-blue mb-2" size={28} />,
      items: ["PostgreSQL", "DynamoDB", "MongoDB", "MySQL", "ChromaDB"],
    },
    {
      category: "AI",
      icon: <BrainCircuit className="text-aws-orange mb-2" size={28} />,
      items: ["RAG", "LangChain", "Groq", "Claude 3.5 Sonnet", "Amazon Nova Pro"],
    },
    {
      category: "Security",
      icon: <Shield className="text-cyber-blue mb-2" size={28} />,
      items: ["Wireshark", "Nmap", "Hashing", "Firewalls", "IDS"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">
            <span className="text-cyber-blue">&lt;</span> About Me <span className="text-cyber-blue">/&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-aws-orange mx-auto rounded"></div>
        </motion.div>

        {/* Top Row: Bio & Education */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-xl h-full border border-white/5 relative overflow-hidden group hover:border-cyber-blue/30 transition-colors">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-aws-orange/5 rounded-full blur-3xl -z-10 group-hover:bg-aws-orange/10 transition-colors"></div>
              <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate <span className="text-cyber-blue font-semibold">Full-Stack Developer</span> and <span className="text-aws-orange font-semibold">Cloud & DevOps Enthusiast</span> currently pursuing my B.E. in Information Technology. 
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I specialize in building scalable web applications, optimizing cloud infrastructure, and leveraging AI/ML technologies to solve complex problems. With a strong foundation in both frontend aesthetics and backend architecture, I thrive in environments that challenge me to learn, innovate, and build highly efficient systems.
              </p>
            </div>
          </motion.div>

          {/* Education Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card p-8 rounded-xl h-full border border-white/5 relative overflow-hidden group hover:border-cyber-blue/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/5 rounded-bl-full -z-10 group-hover:bg-cyber-blue/10 transition-colors"></div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-aws-orange" size={28} />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              
              <div className="space-y-8 mt-4">
                <div className="relative pl-5 border-l-2 border-white/10">
                  <div className="absolute w-3 h-3 bg-cyber-blue rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_var(--cyber-blue)]"></div>
                  <h4 className="font-semibold text-white text-lg">B.E. in Information Technology</h4>
                  <p className="text-gray-400 text-sm mt-1">A. P. Shah Institute of Technology</p>
                  <p className="text-cyber-blue font-mono text-sm mt-2 font-medium">CGPA: 9.66 (Current)</p>
                </div>
                
                <div className="relative pl-5 border-l-2 border-white/10">
                  <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="font-semibold text-gray-200 text-lg">HSC</h4>
                  <p className="text-gray-400 text-sm mt-1">Ramanand Arya D.A.V College</p>
                  <p className="text-gray-500 font-mono text-sm mt-2">Percentage: 73%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white inline-block relative">
              Technical Arsenal
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-aws-orange to-transparent opacity-50"></div>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card-bg p-6 rounded-xl border border-border-color hover:border-cyber-blue/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all group"
              >
                <div className="mb-4 bg-background w-12 h-12 rounded-lg flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-white font-medium mb-3 text-lg">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-cyber-blue/60 mt-0.5 font-bold">&gt;</span>
                      <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
