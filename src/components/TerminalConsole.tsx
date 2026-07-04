"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";

export default function TerminalConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "cmd" | "res"; text: string }[]>([
    { type: "res", text: "IsmaeelOS v1.0.0" },
    { type: "res", text: "Type 'help' to see available commands." },
  ]);
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "cmd" as const, text: input }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "res", text: "Available commands: help, whoami, skills, repo, date, clear, sudo" });
        break;
      case "whoami":
        newHistory.push({ type: "res", text: "visitor@portfolio-ismaeelshaikh.vercel.app" });
        break;
      case "skills":
        newHistory.push({ type: "res", text: "[AWS, Next.js, Python, TypeScript, Docker, LangChain]" });
        break;
      case "repo":
        newHistory.push({ type: "res", text: "GitHub: https://github.com/ismaeeeelshaikh/portfolio" });
        break;
      case "date":
        newHistory.push({ type: "res", text: new Date().toString() });
        break;
      case "sudo":
        newHistory.push({ type: "res", text: "Nice try, but this incident will be reported." });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({ type: "res", text: `Command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-cyber-blue text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-shadow"
          >
            <Terminal size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`fixed z-50 overflow-hidden bg-[#030712]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col font-mono text-sm transition-all duration-300 ${
              isMaximized
                ? "inset-4 rounded-xl"
                : "bottom-6 right-6 w-[90vw] md:w-[500px] h-[400px] rounded-xl"
            }`}
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 select-none">
              <div className="flex items-center gap-2 text-gray-400">
                <Terminal size={16} />
                <span>visitor@ismaeel: ~</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="text-gray-400 hover:text-white transition-colors hidden md:block"
                >
                  {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-aws-orange transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent text-gray-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} className="mb-1">
                  {line.type === "cmd" ? (
                    <span className="text-cyber-blue font-bold">
                      visitor@ismaeel:~$ <span className="text-white font-normal">{line.text}</span>
                    </span>
                  ) : (
                    <span className={line.text.includes("reported") ? "text-aws-orange" : "text-gray-400"}>
                      {line.text}
                    </span>
                  )}
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex mt-1">
                <span className="text-cyber-blue font-bold mr-2">visitor@ismaeel:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white shadow-none focus:ring-0"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
