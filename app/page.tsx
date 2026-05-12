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
    name: 'French Transitional Estate',
    type: 'Luxury New Construction',
    location: 'Southlake, Texas',
    image: '/projects/french-estate-day.jpg',
  },
  {
    name: 'Private Evening Residence',
    type: 'Custom Stone Estate',
    location: 'Dallas-Fort Worth',
    image: '/projects/night-estate.jpg',
  },
  {
    name: 'Mediterranean Villa',
    type: 'Resort-Style Luxury Home',
    location: 'DFW Metro',
    image: '/projects/mediterranean-villa.jpg',
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = useMemo(
    () => [
      ['Portfolio', '#portfolio'],
      ['Process', '#process'],
      ['Contact', '#contact'],
    ],
    []
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 py-6 text-white mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="text-xs tracking-[0.34em]">
          {site.brand}
        </a>

        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.28em] md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[80] bg-black p-8 text-white">
          <div className="mb-16 flex items-center justify-between">
            <div className="text-xs tracking-[0.34em]">{site.brand}</div>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-8 font-serif text-5xl">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
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

  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.46]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -115]);
  const titleX = useTransform(scrollYProgress, [0, 0.2], [0, 55]);

  const logoOpacity = useTransform(scrollYProgress, [0, 0.08, 0.2], [1, 0.85, 1]);
  const logoScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.82]);

  const panelOpacity = useTransform(scrollYProgress, [0.11, 0.2], [0, 1]);
  const panelX = useTransform(scrollYProgress, [0.11, 0.2], [120, 0]);

  return (
    <section id="top" className="relative h-[210vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ scale: imageScale, x: imageX, y: imageY }}
          className="absolute inset-0 z-10 origin-center"
        >
          <img
            src="/projects/french-estate-day.jpg"
            alt="Angel Custom Homes luxury residence"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>

        <motion.div
          style={{ opacity: logoOpacity, scale: logoScale }}
          className="absolute left-1/2 top-8 z-40 -translate-x-1/2"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a45c]/35 bg-black/35 backdrop-blur">
            <img
              src="/logo/ach-gold-mark.png"
              alt="Angel Custom Homes logo"
              className="h-10 w-auto"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: titleScale, y: titleY, x: titleX }}
          className="pointer-events-none relative z-30 w-full max-w-[92vw] text-center"
        >
          <div className="font-serif text-[18vw] font-light leading-[0.75] tracking-[0.28em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.65)] md:text-[10.5vw]">
            ANGEL
          </div>
          <div className="mt-8 text-[4.8vw] font-light uppercase leading-none tracking-[0.55em] text-[#c9a45c] drop-shadow-[0_5px_18px_rgba(0,0,0,0.75)] md:mt-10 md:text-[3.15vw]">
            Custom Homes
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: panelOpacity, x: panelX }}
          className="absolute bottom-[7%] right-[10%] z-20 hidden w-[44vw] max-w-[660px] bg-[#f7f3ea] p-12 text-black md:block"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#c9a45c]">
            DFW Luxury Custom Builder
          </p>

          <p className="text-base leading-8">
            Angel Custom Homes designs and builds luxury residences throughout the Dallas-Fort Worth metroplex.
            Our work blends timeless architecture, elevated craftsmanship, and highly personalized execution
            to create homes that feel both enduring and deeply individual.
          </p>
        </motion.div>

        <div className="absolute bottom-9 left-10 z-40 text-xs uppercase tracking-[0.35em] text-white/70">
          Scroll
        </div>
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
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a45c]">
              Portfolio
            </p>
            <h2 className="font-serif text-6xl font-light leading-none md:text-8xl">
              Timeless homes. Quietly exceptional.
            </h2>
          </div>

          <p className="max-w-2xl self-end text-sm leading-8 text-black/65">
            A portfolio of estate-inspired homes for clients across Southlake, Highland Park,
            Preston Hollow, Westlake, and the greater DFW metro. Each residence is shaped around
            the client’s lifestyle, architectural vision, and long-term legacy.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.8 }}
              className={`grid gap-8 md:grid-cols-2 ${
                index % 2 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="h-[62vh] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-end border-t border-black/15 pb-8 pt-8">
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#c9a45c]">
                  {project.type}
                </p>
                <h3 className="mb-5 font-serif text-5xl font-light">
                  {project.name}
                </h3>
                <p className="mb-10 text-sm uppercase tracking-[0.24em] text-black/50">
                  {project.location}
                </p>
                <p className="max-w-md text-sm leading-8 text-black/65">
                  Each residence is designed and built around the client’s lifestyle, architectural vision,
                  and long-term legacy. From structural execution to handcrafted finishes, every detail is
                  managed with precision from concept through completion.
                </p>
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

  const foundationOpacity = useTransform(scrollYProgress, [0.46, 0.54], [1, 0.55]);
  const frameOpacity = useTransform(scrollYProgress, [0.52, 0.62], [0, 1]);
  const exteriorOpacity = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);
  const finalOpacity = useTransform(scrollYProgress, [0.74, 0.86], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.74, 0.86], [0.96, 1]);
  const revealClip = useTransform(
    scrollYProgress,
    [0.74, 0.86],
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );

  return (
    <section id="process" className="relative h-[280vh] bg-black text-white">
      <div className="sticky top-0 grid h-screen items-center overflow-hidden px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="z-20 mx-auto max-w-md">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a45c]">
            Build Process
          </p>
          <h2 className="mb-6 font-serif text-6xl font-light leading-none md:text-8xl">
            From plans to presence.
          </h2>
          <p className="text-sm leading-8 text-white/62">
            Every custom residence begins with architectural intent and evolves through engineering,
            foundation, framing, exterior detailing, and final refinement — transforming vision into
            a fully realized luxury home.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.22em] text-white/50">
            <span>01 Foundation</span>
            <span>02 Framing</span>
            <span>03 Exterior</span>
            <span>04 Finish</span>
          </div>
        </div>

        <div className="relative mx-auto h-[64vh] w-full max-w-5xl overflow-hidden border border-white/10 bg-transparent shadow-2xl">
          <motion.img
            style={{ opacity: foundationOpacity }}
            src="/build/foundation-home.png"
            alt="Architectural foundation plan"
            className="absolute inset-0 h-full w-full object-contain"
          />

          <motion.img
            style={{ opacity: frameOpacity }}
            src="/build/frame-home.png"
            alt="Luxury home framing"
            className="absolute inset-0 h-full w-full object-contain"
          />

          <motion.img
            style={{ opacity: exteriorOpacity }}
            src="/build/exterior-home.png"
            alt="Finished exterior structure"
            className="absolute inset-0 h-full w-full object-contain"
          />

          <motion.div
            style={{
              opacity: finalOpacity,
              scale: finalScale,
              clipPath: revealClip,
            }}
            className="absolute inset-0"
          >
            <img
              src="/build/final-home.png"
              alt="Completed Angel Custom Homes residence"
              className="h-full w-full object-contain"
            />
          </motion.div>

          <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur">
            Scroll build sequence
          </div>
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
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a45c]">
            Begin
          </p>
          <h2 className="mb-8 font-serif text-6xl font-light leading-none md:text-8xl">
            Build something enduring.
          </h2>
          <div className="space-y-4 text-sm text-black/65">
            <p className="flex items-center gap-3">
              <Phone size={16} /> {site.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} /> {site.email}
            </p>
            <p>Custom luxury residences throughout Dallas-Fort Worth.</p>
          </div>
        </div>

        <form className="grid gap-4 bg-black p-7 text-white md:grid-cols-2">
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none" placeholder="First name" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none" placeholder="Last name" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" placeholder="Email" />
          <input className="border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" placeholder="Phone" />
          <textarea className="min-h-36 border border-white/20 bg-transparent px-4 py-4 outline-none md:col-span-2" placeholder="Tell us about your lot, timeline, budget, and vision" />
          <button className="inline-flex w-fit items-center gap-3 bg-[#c9a45c] px-6 py-4 text-xs uppercase tracking-[0.25em] text-black md:col-span-2">
            Send inquiry <ArrowRight size={16} />
          </button>
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

      <footer className="bg-black px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="text-xs tracking-[0.34em]">{site.brand}</div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/50">
            angelcustomhomes.com · DFW Metro
          </div>
        </div>
      </footer>
    </main>
  );
}
