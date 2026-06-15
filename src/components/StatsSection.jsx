"use client";

import { Briefcase, Factory, Magnifier, Star, Globe } from "@gravity-ui/icons";
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

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Briefcase className="h-5 w-5" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Factory className="h-5 w-5" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Magnifier className="h-5 w-5" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="h-5 w-5" />,
      value: "97%",
      label: "Satisfaction Rate", // ছবির লেবেল অনুযায়ী পরিবর্তন করা হয়েছে
    },
  ];

  return (
    <>
      {/* মেইন ব্যাকগ্রাউন্ড গ্লোব ইমেজ - পুরো এরিয়া কভার করার জন্য */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      {/* Hero Content Section (কোনো সলিড bg-black নেই) */}
      <div className="relative overflow-hidden pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
        {/* Glow Effect */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            {/* Top badge */}
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
                <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
                Hireloop is now available in beta
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
              Find Your Dream Job Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hireloop provides the tools, job insights and community to help you
              land your perfect career or next opportunity. Join our community
              today.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 rounded-3xl bg-white/5 p-2 border border-white/10 backdrop-blur-md">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 text-gray-400">
                <Magnifier className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="Job title, keyword, or company"
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

              <div className="flex-1 flex items-center gap-3 px-4 py-2 text-gray-400 border-t border-white/10 sm:border-0 w-full sm:w-auto">
                <Globe className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="Location or remote"
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <button className="flex items-center justify-center rounded-2xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 w-full sm:w-auto">
                <Magnifier className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Trending Searches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-sm text-gray-400">Trending Searches:</span>
            {["Remote Job", "Healthcare Job", "IT Job", "Junior Level"].map(
              (term) => (
                <button
                  key={term}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 transition hover:bg-white/10"
                >
                  {term}
                </button>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Stats Section (কোনো bg-black এবং ওভারলে কালার রাখা হয়নি) */}
      <div className="relative overflow-hidden py-28 text-white">
        {/* Glow Effect */}
        <div className="absolute left-1/2 top-[25%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Heading -jsx text এরর এড়াতে কার্লি ব্রেস ব্যবহার করা হয়েছে */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-medium leading-relaxed text-white/90">
              {"Assisting over 15,000 job seekers"}
              <br />
              {"find their dream positions."}
            </h2>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                variants={item}
                key={stat.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30"
              >
                {/* Card Glow */}
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

                {/* Icon */}
                <div className="relative z-10 text-white/90">{stat.icon}</div>

                {/* Number */}
                <h3 className="relative z-10 mt-10 text-5xl font-bold tracking-tight">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="relative z-10 mt-4 text-base text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}