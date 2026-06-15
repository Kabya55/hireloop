"use client";

import { Globe, Briefcase, ArrowRight } from "@gravity-ui/icons";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const jobs = Array(6).fill({
  title: "Frontend Developer",
  description:
    "Hireloop is a community of tech professionals. We are looking for talented frontend engineers to join our dynamic team.",
  location: "New York, USA",
  type: "Hybrid",
  salary: "$150k - $200k / year",
});

export default function FeaturedJobsSection() {
  return (
    <section className="bg-black py-24 text-white relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 text-violet-500 font-semibold tracking-wider text-sm mb-4 uppercase">
              <span className="w-8 h-[1px] bg-violet-500/50" />
              Featured Jobs
              <span className="w-8 h-[1px] bg-violet-500/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The roles you&apos;d never
              <br />
              find by searching
            </h2>
          </motion.div>
        </div>

        {/* Jobs Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {jobs.map((job, index) => (
            <motion.div
              variants={item}
              key={index}
              className="group relative rounded-3xl bg-white/[0.02] border border-white/5 p-8 transition-all hover:bg-white/[0.04] hover:border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {job.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                  <Globe className="w-3.5 h-3.5" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                  <Briefcase className="w-3.5 h-3.5" />
                  {job.type}
                </span>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <span className="text-sm font-semibold text-white/90">
                  {job.salary}
                </span>
                <button className="flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95">
            View All Jobs
          </button>
        </motion.div>
      </div>
    </section>
  );
}
