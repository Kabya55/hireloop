"use client";

import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white border-t border-white/5">
      {/* Abstract Background - mimicking the wireframe globe */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 mix-blend-screen pointer-events-none">
        <div className="h-[800px] w-[800px] rounded-full border border-violet-500/20" />
        <div className="absolute h-[600px] w-[600px] rounded-full border border-violet-500/20" />
        <div className="absolute h-[400px] w-[400px] rounded-full border border-violet-500/20" />
        {/* Grid lines */}
        <div className="absolute h-[1px] w-full bg-violet-500/10" />
        <div className="absolute h-full w-[1px] bg-violet-500/10" />
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Your next role is
            <br />
            already looking for you
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Join global tech professionals who found their next role using our platform. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95">
              Create a free account
            </button>
            <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95">
              View pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
