"use client";
import { motion } from "framer-motion";
import { CompleteFigmaDesign } from "./dark-ui/complete-figma";
import { IllustrationCardNew } from "./dark-ui/illustration-card-new";
import { DesktopWindows } from "./dark-ui/desktop-windows";

export const ProblemSection = () => {
  return (
    <section id="problem" aria-labelledby="problem-title" className="relative bg-[#1B1A1A] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-center"
        >
          <h2 id="problem-title" className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Why current AI copilots fall short
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Three structural limitations that block real productivity.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.figure 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm hover:border-white/20 hover:translate-y-[-2px] transition-all duration-300"
          >
            <h3 className="text-2xl md:text-[28px] font-semibold text-white">AIs are locked in their apps</h3>
            <p className="mt-3 text-sm text-white/70 max-w-[32ch]">
              They can&apos;t follow your workflow across tools or windows.
            </p>
            <div className="mt-6 h-64 rounded-xl overflow-hidden">
              <DesktopWindows />
            </div>
          </motion.figure>

          {/* Card 2 */}
          <motion.figure 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm hover:border-white/20 hover:translate-y-[-2px] transition-all duration-300"
          >
            <h3 className="text-2xl md:text-[28px] font-semibold text-white">Blind to user activity and context</h3>
            <p className="mt-3 text-sm text-white/70 max-w-[32ch]">
              They don&apos;t see what you&apos;re doing, so they can&apos;t time help well.
            </p>
            <div className="mt-6 h-64 rounded-xl overflow-hidden">
              <IllustrationCardNew />
            </div>
          </motion.figure>

          {/* Card 3 */}
          <motion.figure 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm hover:border-white/20 hover:translate-y-[-2px] transition-all duration-300"
          >
            <h3 className="text-2xl md:text-[28px] font-semibold text-white">Waiting for & limited by the prompt</h3>
            <p className="mt-3 text-sm text-white/70 max-w-[32ch]">
              You must explain everything first—slowing real work.
            </p>
            <div className="mt-6 h-64 rounded-xl overflow-hidden">
              <CompleteFigmaDesign />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};
