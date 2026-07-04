import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-sans text-white mb-4">
              Let's Build Something <span className="text-cyber-blue">Great.</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col space-y-4 md:items-end">
            <a
              href="mailto:shaikhismaeel75123@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-cyber-blue transition-colors group"
            >
              <span className="font-mono text-sm group-hover:underline">shaikhismaeel75123@gmail.com</span>
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-cyber-blue/10 transition-colors">
                <Mail size={20} />
              </div>
            </a>
            
            <a
              href="tel:8169347887"
              className="flex items-center gap-3 text-gray-300 hover:text-cyber-blue transition-colors group"
            >
              <span className="font-mono text-sm group-hover:underline">+91 8169347887</span>
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-cyber-blue/10 transition-colors">
                <Phone size={20} />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} Ismaeel Shaikh. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/ismaeel-shaikh-imms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors p-2 hover:bg-[#0A66C2]/10 rounded-full flex items-center justify-center"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/ismaeeeelshaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full flex items-center justify-center"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
