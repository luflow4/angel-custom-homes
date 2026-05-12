'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const projects = [
  {
    name: 'Park Cities Estate',
    location: 'Highland Park / University Park',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90',
    text: 'A timeless residence concept with warm stone, generous entertaining spaces, and estate-level detailing.'
  },
  {
    name: 'Preston Hollow Residence',
    location: 'Dallas, TX',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90',
    text: 'A refined custom home direction centered on scale, comfort, architectural restraint, and everyday livability.'
  },
  {
    name: 'Westlake Retreat',
    location: 'Westlake, TX',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90',
    text: 'A quiet luxury home environment with layered materials, soft light, and a strong indoor-outdoor relationship.'
  }
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-14">
        <div className="absolute left-0 top-2 h-8 w-10 skew-x-[-28deg] rounded-sm bg-achGold" />
        <div className="absolute left-7 top-4 h-4 w-8 rounded-sm bg-achGold" />
        <div className="absolute left-8 top-7 h-3 w-7 rounded-sm bg-achGold" />
      </div>
      <span className="hidden text-[11px] uppercase tracking-[0.32em] text-achWhite/90 md:block">Angel Custom Homes</span>
    </div>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1.16, 0.52]);
  const imageX = useTransform(scrollYProgress, [0, 0.2], [0, -280]);
  const imageY = useTransform(scrollYProgress, [0, 0.2], [0, 120]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -85]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.72]);
  const panelOpacity = useTransform(scrollYProgress, [0.11, 0.2], [0, 1]);
  const panelX = useTransform(scrollYProgress, [0.11, 0.2], [120, 0]);

  return (
    <section className="relative h-[205vh] bg-achBlack">
      <div className="sticky top-0 h-screen overflow-hidden">
        <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-10">
          <LogoMark />
          <div className="flex gap-8 text-xs uppercase tracking-[0.24em] text-white/80">
            <a href="#portfolio">Portfolio</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </header>

        <motion.div style={{ scale: imageScale, x: imageX, y: imageY }} className="absolute inset-0 origin-center">
          <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90" alt="Luxury custom home" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

        <motion.h1 style={{ y: titleY, scale: titleScale }} className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[120vw] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[17vw] font-light leading-none tracking-[-0.08em] text-white">
          Angel Custom Homes
        </motion.h1>

        <motion.div style={{ opacity: panelOpacity, x: panelX }} className="absolute bottom-[10%] right-[8%] z-30 hidden max-w-xl bg-achWhite p-10 text-achBlack shadow-2xl md:block">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-achGold">Luxury custom homes · DFW Metro</p>
          <p className="text-lg leading-8">
            Angel Custom Homes builds refined custom residences across Dallas-Fort Worth, with a core focus on luxury new construction and select high-end remodels.
          </p>
        </motion.div>

        <p className="absolute bottom-9 left-9 z-40 text-[11px] uppercase tracking-[0.35em] text-white/70">Scroll</p>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-achWhite px-6 py-24 text-achBlack md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.34em] text-achGold">Portfolio</p>
            <h2 className="font-serif text-6xl font-light leading-none md:text-8xl">Timeless homes for discerning clients.</h2>
          </div>
          <p className="max-w-xl self-end text-base leading-8 text-black/65">
            Placeholder imagery is used for now. Final photography will shift this section into a true project showcase for Highland Park, Preston Hollow, Southlake, Westlake, and the broader DFW luxury market.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article key={project.name} initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.9, ease: 'easeOut' }} className={`grid items-end gap-8 md:grid-cols-2 ${index % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="relative h-[520px] overflow-hidden bg-achBlack">
                <Image src={project.image} alt={project.name} fill className="object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="pb-5">
                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-achGold">{project.location}</p>
                <h3 className="mb-5 font-serif text-5xl font-light">{project.name}</h3>
                <p className="max-w-md leading-8 text-black/65">{project.text}</p>
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
  const blueprint = useTransform(scrollYProgress, [0.55, 0.66], [1, 0.15]);
  const frame = useTransform(scrollYProgress, [0.61, 0.72], [0, 1]);
  const home = useTransform(scrollYProgress, [0.69, 0.82], [0, 1]);
  const homeScale = useTransform(scrollYProgress, [0.69, 0.82], [0.92, 1]);

  return (
    <section id="process" className="relative h-[250vh] bg-achBlack text-achWhite">
      <div className="sticky top-0 grid h-screen items-center gap-10 overflow-hidden px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
        <div className="mx-auto max-w-md">
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-achGold">Build process</p>
          <h2 className="mb-6 font-serif text-6xl font-light leading-none md:text-8xl">From vision to residence.</h2>
          <p className="leading-8 text-white/60">A scroll-driven architectural sequence: planning, structure, exterior character, and finished custom home.</p>
        </div>

        <div className="relative mx-auto h-[62vh] w-full max-w-4xl">
          <motion.div style={{ opacity: blueprint }} className="absolute inset-0 border border-achGold/35 bg-white/[0.03]">
            <svg viewBox="0 0 900 520" className="h-full w-full">
              <rect x="115" y="105" width="670" height="315" fill="none" stroke="#C9A45C" strokeWidth="4" />
              <line x1="115" y1="220" x2="785" y2="220" stroke="#C9A45C" strokeWidth="2" />
              <line x1="275" y1="105" x2="275" y2="420" stroke="#C9A45C" strokeWidth="2" />
              <line x1="520" y1="105" x2="520" y2="420" stroke="#C9A45C" strokeWidth="2" />
              <path d="M115 105 L450 40 L785 105" fill="none" stroke="#C9A45C" strokeWidth="3" />
              <text x="120" y="465" fill="#C9A45C" fontSize="20" letterSpacing="7">ARCHITECTURAL PLAN</text>
            </svg>
          </motion.div>

          <motion.div style={{ opacity: frame }} className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[55%] w-[78%] border-4 border-achGold">
              <div className="absolute left-0 top-0 h-full w-[18%] border-r-4 border-achGold" />
              <div className="absolute right-0 top-0 h-full w-[18%] border-l-4 border-achGold" />
              <div className="absolute left-[18%] top-[18%] h-[64%] w-[64%] border-4 border-achGold" />
              <div className="absolute -top-14 left-0 h-14 w-full border-x-4 border-t-4 border-achGold" />
            </div>
          </motion.div>

          <motion.div style={{ opacity: home, scale: homeScale }} className="absolute inset-0 overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=90" alt="Finished luxury home" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-achWhite px-6 py-24 text-achBlack md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-achGold">Start the conversation</p>
          <h2 className="mb-8 font-serif text-6xl font-light leading-none md:text-8xl">Build something enduring.</h2>
          <div className="space-y-4 text-black/70">
            <p className="flex items-center gap-3"><Phone size={17} /> 214.957.9137</p>
            <p className="flex items-center gap-3"><Mail size={17} /> angel@acustomhomes.com</p>
          </div>
        </div>
        <form className="grid gap-4 bg-achBlack p-7 text-achWhite md:grid-cols-2" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="REPLACE_WITH_WEB3FORMS_KEY" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none" name="first_name" placeholder="First name" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none" name="last_name" placeholder="Last name" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" name="email" placeholder="Email" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" name="phone" placeholder="Phone" />
          <textarea className="min-h-36 border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" name="message" placeholder="Tell us about your lot, timeline, budget, and vision" />
          <button className="inline-flex w-fit items-center gap-3 bg-achGold px-6 py-4 text-xs uppercase tracking-[0.24em] text-achBlack md:col-span-2">Send inquiry <ArrowRight size={16} /></button>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <BuildProcess />
      <CTA />
      <footer className="bg-achBlack px-6 py-8 text-achWhite/50 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.22em] md:flex-row">
          <span>Angel Custom Homes</span>
          <span>angelcustomhomes.com · DFW Metro</span>
        </div>
      </footer>
    </main>
  );
}
