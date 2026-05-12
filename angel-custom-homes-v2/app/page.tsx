'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Menu, Phone, X } from 'lucide-react';
import { useMemo, useState } from 'react';

const site = {
  brand: 'ANGEL CUSTOM HOMES',
  phone: '214.957.9137',
  email: 'angel@acustomhomes.com',
};

const projects = [
  {
    name: 'Highland Park Estate',
    type: 'Transitional Luxury',
    location: 'Park Cities / DFW',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90',
  },
  {
    name: 'Preston Hollow Residence',
    type: 'Modern European',
    location: 'Dallas, TX',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90',
  },
  {
    name: 'Southlake Custom Home',
    type: 'Warm Contemporary',
    location: 'DFW Metro',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90',
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = useMemo(() => [
    ['Portfolio', '#portfolio'],
    ['Process', '#process'],
    ['Contact', '#contact'],
  ], []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 py-6 text-white mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="text-xs tracking-[0.34em]">{site.brand}</a>
        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.28em] md:flex">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[80] bg-black p-8 text-white">
          <div className="mb-16 flex items-center justify-between">
            <div className="text-xs tracking-[0.34em]">{site.brand}</div>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <div className="flex flex-col gap-8 font-serif text-5xl">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.12, 0.52]);
  const imageX = useTransform(scrollYProgress, [0, 0.2], [0, -260]);
  const imageY = useTransform(scrollYProgress, [0, 0.2], [0, 140]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.72]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);
  const panelOpacity = useTransform(scrollYProgress, [0.11, 0.2], [0, 1]);
  const panelX = useTransform(scrollYProgress, [0.11, 0.2], [120, 0]);

  return (
    <section id="top" className="relative h-[210vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute left-1/2 top-8 z-40 -translate-x-1/2 border border-[#c9a45c]/60 bg-black/45 px-5 py-4 text-center text-[10px] uppercase leading-tight tracking-[0.24em] text-[#c9a45c] backdrop-blur">
          <div className="mx-auto mb-2 text-3xl font-bold leading-none">A</div>
          ANGEL<br />HOMES
        </div>
        <motion.div style={{ scale: imageScale, x: imageX, y: imageY }} className="absolute inset-0 z-10 origin-center">
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2600&q=90" alt="Luxury custom home" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
        <motion.h1 style={{ scale: titleScale, y: titleY }} className="pointer-events-none relative z-30 whitespace-nowrap font-serif text-[16vw] font-light leading-none tracking-[-0.08em] text-white">
          Angel Custom Homes
        </motion.h1>
        <motion.p style={{ opacity: panelOpacity }} className="absolute bottom-[18%] right-[9%] z-40 max-w-xl font-serif text-4xl italic leading-tight text-white md:text-5xl">
          Luxury custom homes shaped around the way you live.
        </motion.p>
        <motion.div style={{ opacity: panelOpacity, x: panelX }} className="absolute bottom-[7%] right-[10%] z-20 hidden w-[44vw] max-w-[660px] bg-[#f7f3ea] p-12 text-black md:block">
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#c9a45c]">DFW Luxury Custom Builder</p>
          <p className="text-base leading-8">Angel Custom Homes creates refined custom residences across the Dallas-Fort Worth metro. Our core work is luxury new construction: thoughtful architecture, disciplined project management, elevated finishes, and homes designed around the way each family lives.</p>
        </motion.div>
        <div className="absolute bottom-9 left-10 z-40 text-xs uppercase tracking-[0.35em] text-white/70">Scroll</div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f7f3ea] px-6 py-28 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a45c]">Portfolio</p>
            <h2 className="font-serif text-6xl font-light leading-none md:text-8xl">Timeless homes. Quietly exceptional.</h2>
          </div>
          <p className="max-w-2xl self-end text-sm leading-8 text-black/65">A mixed portfolio of transitional, modern European, warm contemporary, and estate-inspired homes for clients across Highland Park, Preston Hollow, Southlake, Westlake, and the greater DFW metro.</p>
        </div>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article key={project.name} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20%' }} transition={{ duration: 0.8 }} className={`grid gap-8 md:grid-cols-2 ${index % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="h-[62vh] overflow-hidden bg-black">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="flex flex-col justify-end border-t border-black/15 pb-8 pt-8">
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#c9a45c]">{project.type}</p>
                <h3 className="mb-5 font-serif text-5xl font-light">{project.name}</h3>
                <p className="mb-10 text-sm uppercase tracking-[0.24em] text-black/50">{project.location}</p>
                <p className="max-w-md text-sm leading-8 text-black/65">Placeholder project imagery for the first launch. Final photography will replace these images and make this section feel fully custom to Angel Custom Homes.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildProcess() {
  const { scrollYProgress } = useScroll();
  const blueprint = useTransform(scrollYProgress, [0.48, 0.58], [1, 0.25]);
  const frame = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const house = useTransform(scrollYProgress, [0.64, 0.76], [0, 1]);
  const houseScale = useTransform(scrollYProgress, [0.64, 0.76], [0.92, 1]);

  return (
    <section id="process" className="relative h-[240vh] bg-black text-white">
      <div className="sticky top-0 grid h-screen items-center overflow-hidden px-6 md:grid-cols-[0.82fr_1.18fr]">
        <div className="z-20 mx-auto max-w-md">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a45c]">Build Process</p>
          <h2 className="mb-6 font-serif text-6xl font-light leading-none md:text-8xl">From vision to residence.</h2>
          <p className="text-sm leading-8 text-white/62">The custom home comes to life as you scroll: plan, structure, exterior character, and finished residence. This section will later use actual Angel project drawings and renders.</p>
        </div>
        <div className="relative mx-auto h-[62vh] w-full max-w-4xl">
          <motion.div style={{ opacity: blueprint }} className="absolute inset-0 border border-[#c9a45c]/35 bg-white/[0.03]">
            <svg viewBox="0 0 900 520" className="h-full w-full">
              <rect x="110" y="100" width="680" height="320" fill="none" stroke="#c9a45c" strokeWidth="4" />
              <line x1="110" y1="220" x2="790" y2="220" stroke="#c9a45c" strokeWidth="2" />
              <line x1="260" y1="100" x2="260" y2="420" stroke="#c9a45c" strokeWidth="2" />
              <line x1="520" y1="100" x2="520" y2="420" stroke="#c9a45c" strokeWidth="2" />
              <rect x="570" y="260" width="150" height="100" fill="none" stroke="#c9a45c" strokeWidth="2" />
              <path d="M110 100 L450 35 L790 100" fill="none" stroke="#c9a45c" strokeWidth="3" />
              <text x="125" y="455" fill="#c9a45c" fontSize="20" letterSpacing="6">BLUEPRINT</text>
            </svg>
          </motion.div>
          <motion.div style={{ opacity: frame }} className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[58%] w-[78%] border-4 border-white">
              <div className="absolute left-0 top-0 h-full w-[18%] border-r-4 border-white" />
              <div className="absolute right-0 top-0 h-full w-[18%] border-l-4 border-white" />
              <div className="absolute left-[18%] top-[18%] h-[64%] w-[64%] border-4 border-white" />
              <div className="absolute -top-14 left-0 h-14 w-full border-x-4 border-t-4 border-white" />
            </div>
          </motion.div>
          <motion.div style={{ opacity: house, scale: houseScale }} className="absolute inset-0 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90" alt="Finished custom residence" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-[#f7f3ea] px-6 py-28 text-black">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a45c]">Begin</p>
          <h2 className="mb-8 font-serif text-6xl font-light leading-none md:text-8xl">Build something enduring.</h2>
          <div className="space-y-4 text-sm text-black/65">
            <p className="flex items-center gap-3"><Phone size={16} /> {site.phone}</p>
            <p className="flex items-center gap-3"><Mail size={16} /> {site.email}</p>
            <p>Luxury custom homes across the DFW metro.</p>
          </div>
        </div>
        <form className="grid gap-4 bg-black p-7 text-white md:grid-cols-2">
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none" placeholder="First name" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none" placeholder="Last name" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" placeholder="Email" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" placeholder="Phone" />
          <textarea className="min-h-36 border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" placeholder="Tell us about your lot, timeline, budget, and vision" />
          <button className="inline-flex w-fit items-center gap-3 bg-[#c9a45c] px-6 py-4 text-xs uppercase tracking-[0.25em] text-black md:col-span-2">Send inquiry <ArrowRight size={16} /></button>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <BuildProcess />
      <CTA />
      <footer className="bg-black px-6 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><div className="text-xs tracking-[0.34em]">{site.brand}</div><div className="text-xs uppercase tracking-[0.22em] text-white/50">angelcustomhomes.com · DFW Metro</div></div></footer>
    </main>
  );
}
