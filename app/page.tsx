"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Award, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-cyan-500/30">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full px-6 py-4 backdrop-blur-xl bg-black/40 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[10px] flex items-center justify-center">
                <span className="font-serif font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-widest text-white uppercase">CREATIVE®</span>
              <span className="text-[9px] font-mono tracking-wider text-zinc-400">BUILDING BRANDS</span>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-cyan-400 transition-all">
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.9 }} 
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">Enterprise Brand & Tender Strategy</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-sans font-black tracking-tight text-white leading-[1.03]">
              Build A Brand <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-purple-300">That Matters</span><span className="text-cyan-400">.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /><span>£5.3M+ Procured Tender Value</span></div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-400" /><span>Accredited NHS & Commercial Delivery</span></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 35 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.9, delay: 0.2 }} 
            className="lg:col-span-5"
          >
            <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono text-emerald-300 font-semibold uppercase">Available For Q2 Partnerships</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                We reposition ambitious enterprises to command industry authority, out-pitch incumbents, and secure transformative multi-million pound government and private tenders.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-cyan-400 transition-all">
                <span>View Track Record</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <h2 className="text-3xl font-black text-white mb-10">Recent Contract Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tender Card 1 */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-cyan-400/40 transition-colors">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">NHS Contract</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-2">Healthcare Construction</h3>
            <p className="text-sm text-zinc-400 mb-6">Medcare Healthcare Solutions Ltd</p>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex justify-between items-center">
              <span className="text-[11px] font-mono text-zinc-400 uppercase">Contract Value</span>
              <span className="text-lg font-bold font-mono text-emerald-400">£3,245,780.00</span>
            </div>
          </div>

          {/* Tender Card 2 */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-amber-400/40 transition-colors">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">Private Sector</span>
            <h3 className="text-2xl font-bold text-white mt-4 mb-2">Commercial Development</h3>
            <p className="text-sm text-zinc-400 mb-6">Buildcore Contractors Ltd</p>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex justify-between items-center">
              <span className="text-[11px] font-mono text-zinc-400 uppercase">Contract Value</span>
              <span className="text-lg font-bold font-mono text-emerald-400">£1,845,620.00</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}