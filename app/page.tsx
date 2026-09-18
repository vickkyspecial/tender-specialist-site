"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Award, FileText, ChevronDown, MessageCircle, X, Search, Globe, Menu, MoreHorizontal } from "lucide-react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => { const t = setTimeout(onComplete, 2000); return () => clearTimeout(t); }, [onComplete]);
  return (
    <motion.div exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">Initializing Creative System</span>
      </div>
    </motion.div>
  );
};

const TopMarquee = () => (
  <div className="w-full bg-[#0d0d0d] border-b border-white/[0.08] overflow-hidden py-2 text-[11px] text-zinc-400 font-mono tracking-wide flex">
    <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }} className="flex whitespace-nowrap">
      {Array(4).fill("Brand Transformation for Businesses Growing Across Asia — Up to 50% EDG Support for Eligible Projects • ").map((text, i) => (
        <span key={i} className="mx-4 text-emerald-400">{text}</span>
      ))}
    </motion.div>
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeService, setActiveService] = useState<number | null>(0);

  const services = [
    { title: "Branding", tagline: "Strategic Identity", desc: "We forge enduring brand identities that articulate authority and trust.", color: "#964032" },
    { title: "UI/UX Design", tagline: "High-Performance Interfaces", desc: "Engineered digital interfaces that marry micro-animation finesse.", color: "#12372A" },
    { title: "Communication Design", tagline: "Persuasive Narratives", desc: "Catalyzing public and private sector resonance via bid decks.", color: "#6B21A8" }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-cyan-500/30 overflow-x-hidden">
      <AnimatePresence>{loading && <Preloader onComplete={() => setLoading(false)} />}</AnimatePresence>
      
      <TopMarquee />
      
      <header className="sticky top-0 z-40 w-full px-6 py-4 backdrop-blur-xl bg-black/40 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[10px] flex items-center justify-center">
                <span className="font-serif font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors">CREATIVE®</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-zinc-900/80 border border-white/10 rounded-full px-4 py-1.5">
            <span className="text-xs font-medium text-zinc-300 hover:text-white cursor-pointer px-3">Works</span>
            <span className="text-xs font-medium text-zinc-300 hover:text-white cursor-pointer px-3">Solutions</span>
            <span className="text-xs font-medium text-zinc-300 hover:text-white cursor-pointer px-3">About</span>
          </div>
          <button className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span>Start Project</span><ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      <section className="relative flex flex-col justify-center pt-24 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">Enterprise Brand & Tender Strategy</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-sans font-black tracking-tight text-white leading-[1.03]">
            Build A Brand <br/><span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-purple-300">That Matters</span><span className="text-cyan-400">.</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /><span>£5.3M+ Procured Tender Value</span></div>
            <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-400" /><span>Accredited NHS & Commercial Delivery</span></div>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="lg:col-span-5">
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-emerald-300 font-semibold uppercase">Available For Q2 Partnerships</span>
            </div>
            <p className="text-base text-zinc-300 leading-relaxed mb-8">
              We reposition ambitious enterprises to command industry authority, out-pitch incumbents, and secure transformative multi-million pound government and private tenders across Asia and the UK.
            </p>
            <button className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-cyan-400 transition-all group">
              <span>How We Build Brands</span><ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </motion.div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">Verified Track Record</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-6">Winning Tender Awards</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group rounded-3xl bg-zinc-900 border border-white/10 hover:border-cyan-400/40 transition-all duration-500 p-8 flex flex-col justify-between h-[400px]">
            <div>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">NHS Contract</span>
              <h3 className="text-3xl font-bold text-white mt-5 group-hover:text-cyan-300 transition-colors">Healthcare Construction</h3>
              <p className="text-sm text-zinc-400 mt-2">Medcare Healthcare Solutions Ltd • Birmingham NHS Trust</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 flex justify-between items-center backdrop-blur-md">
              <span className="text-xs font-mono text-zinc-400 uppercase">Contract Value</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">£3,245,780.00</span>
            </div>
          </div>
          <div className="group rounded-3xl bg-zinc-900 border border-white/10 hover:border-amber-400/40 transition-all duration-500 p-8 flex flex-col justify-between h-[400px]">
            <div>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">Private Sector</span>
              <h3 className="text-3xl font-bold text-white mt-5 group-hover:text-amber-300 transition-colors">Commercial Development</h3>
              <p className="text-sm text-zinc-400 mt-2">Buildcore Contractors Ltd • 120 Broad Street</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 flex justify-between items-center backdrop-blur-md">
              <span className="text-xs font-mono text-zinc-400 uppercase">Contract Value</span>
              <span className="text-2xl font-bold font-mono text-emerald-400">£1,845,620.00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <h2 className="text-4xl font-black text-white mb-10">Capabilities</h2>
        <div className="space-y-4">
          {services.map((item, idx) => (
            <div key={idx} style={{ backgroundColor: item.color }} className="rounded-3xl border border-white/10 overflow-hidden shadow-xl">
              <button onClick={() => setActiveService(activeService === idx ? null : idx)} className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-white/50 font-bold">0{idx + 1}</span>
                  <h3 className="text-2xl font-extrabold text-white">{item.title}</h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-white transition-transform ${activeService === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeService === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-8 pb-8">
                    <p className="text-white/90 text-lg mb-4">{item.desc}</p>
                    <span className="text-xs font-mono font-semibold bg-black/30 px-3 py-1.5 rounded-full text-white">{item.tagline}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <aside className="fixed bottom-6 inset-x-0 mx-auto w-fit z-50 px-3">
        <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-black/70 backdrop-blur-2xl border border-white/20 shadow-2xl">
          <a href="#" className="text-xs text-zinc-300 hover:text-white font-medium">Solutions</a>
          <a href="#" className="text-xs text-zinc-300 hover:text-white font-medium">About</a>
          <div className="w-[1px] h-5 bg-white/20" />
          <button className="p-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </aside>
    </main>
  );
}