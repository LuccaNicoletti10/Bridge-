"use client";
import { motion } from "framer-motion";

export const TechCredibility = () => {
  return (
    <section aria-labelledby="tech-cred" className="relative z-20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-center"
        >
          <h2 id="tech-cred" className="text-3xl md:text-4xl font-semibold tracking-tight">
            Powered by proven technologies
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Bridge combines computer vision, local embeddings, and secure inference to create the first truly proactive copilot.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center"
        >
          <div className="w-36 h-14 sm:w-32 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" aria-label="Electron">
            <svg viewBox="0 0 24 24" className="w-full h-full object-contain" fill="currentColor">
              <path d="M12 0L2.09 4.23v7.54C2.09 18.27 12 24 12 24s9.91-5.73 9.91-12.23V4.23L12 0zm-1.41 20.09V5.33l7.58 3.15v7.54l-7.58 4.07z"/>
            </svg>
          </div>
          <div className="w-36 h-14 sm:w-32 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" aria-label="SQLite">
            <svg viewBox="0 0 24 24" className="w-full h-full object-contain" fill="currentColor">
              <path d="M17.74 18.04c-.4.86-.88 1.66-1.44 2.38-.75.96-1.36 1.62-1.84 1.96-.73.67-1.51.99-2.35.98-.6 0-1.32-.18-2.16-.53-.84-.36-1.61-.53-2.31-.53-.73 0-1.52.18-2.36.53-.84.36-1.51.54-2.02.56-.8.03-1.6-.31-2.39-.99-.52-.38-1.16-1.07-1.92-2.07-.82-1.07-1.49-2.31-2.01-3.73-.56-1.54-.84-3.03-.84-4.48 0-1.66.36-3.09 1.08-4.27.64-1.02 1.49-1.82 2.55-2.4.81-.44 1.68-.67 2.61-.69.62 0 1.43.21 2.42.61.99.41 1.66.61 2.01.61.26 0 1.01-.24 2.24-.71.67.29 1.47.43 2.4.42 1.37-.02 2.46-.56 3.27-1.63-.69-.41-1.24-.92-1.66-1.53-.42-.61-.63-1.27-.63-1.98 0-.62.16-1.22.48-1.78.32-.56.74-1.02 1.27-1.38.53-.36 1.1-.54 1.71-.54.05 0 .13.01.24.02.11.01.2.02.27.03-.23.53-.34 1.03-.34 1.51 0 .56.13 1.1.39 1.61.26.51.61.94 1.04 1.29.43.35.91.59 1.43.72-.12.35-.18.69-.18 1.02 0 .38.07.76.21 1.13.14.37.34.71.6 1.02.26.31.56.58.91.81.35.23.73.41 1.14.54-.41.96-.94 1.84-1.58 2.64z"/>
            </svg>
          </div>
          <div className="w-36 h-14 sm:w-32 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" aria-label="ChromaDB">
            <svg viewBox="0 0 24 24" className="w-full h-full object-contain" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <div className="w-36 h-14 sm:w-32 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" aria-label="Vercel">
            <svg viewBox="0 0 24 24" className="w-full h-full object-contain" fill="currentColor">
              <path d="M12 2L2 19h20L12 2zm0 3.5L18.5 17h-13L12 5.5z"/>
            </svg>
          </div>
          <div className="w-36 h-14 sm:w-32 sm:h-12 opacity-80 hover:opacity-100 transition-opacity" aria-label="Tailwind CSS">
            <svg viewBox="0 0 24 24" className="w-full h-full object-contain" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
