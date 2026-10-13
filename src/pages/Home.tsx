import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  heroShowcase,
  newsItems,
  researchPillars,
  statHighlights
} from "../data/labData";

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activePillar, setActivePillar] = useState<string | null>(
    researchPillars[0]?.id ?? null
  );
  const tickerItems = [...newsItems, ...newsItems];
  const handleNavigateToProjects = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  return (
    <div ref={containerRef} className="relative space-y-24">
      <section className="relative px-6">
        <div className="mx-auto w-[min(1080px,94%)] space-y-12">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative flex w-full items-center overflow-hidden rounded-full border border-accentLight/80 bg-gradient-to-r from-white/95 via-accentLight/40 to-white/95 px-5 py-3 text-xs shadow-glass md:px-6">
              <span className="flex shrink-0 items-center gap-2 rounded-full border border-accent/30 bg-white/85 px-3.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 5h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" />
                  <path d="M8 5V3h12" />
                  <path d="M8 9h8" />
                  <path d="M8 13h6" />
                </svg>
                <span>Lab Headlines</span>
              </span>
              <div className="ml-4 flex-1 overflow-hidden">
                <div className="news-ticker-track text-sm">
                  {tickerItems.map((item, index) => (
                    <span
                      key={`${item.title}-${index}`}
                      className="flex items-center gap-3"
                    >
                      <span className="whitespace-nowrap font-medium text-ink">
                        {item.title}
                      </span>
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-accent/45"
                        aria-hidden
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-14 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <h1 className="font-display text-5xl font-semibold leading-tight text-ink md:text-6xl">
                We design and develop interactive AI agents that improve people's lives.
              </h1>
              <p className="max-w-xl text-lg text-inkMuted">
                Our agents provide personalized support based on each person's needs, traits, and behaviors, and we study how they build rapport over time to improve wellbeing, health, and learning.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  to="/projects"
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-glass transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  Explore Projects
                </Link>
                <Link
                  to="/join"
                  className="rounded-full border border-accent/20 px-6 py-3 font-semibold text-ink transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                >
                  Connect with Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              style={{ y: parallaxY }}
              className="grid gap-5 md:pt-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            >
              {heroShowcase.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-accentLight/70 bg-surface px-6 pt-5 pb-6 shadow-glass transition-shadow duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * index + 0.2, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onFocus={() => setHoveredProject(index)}
                  onBlur={() => setHoveredProject(null)}
                  onClick={handleNavigateToProjects}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " " || event.key === "Space") {
                      event.preventDefault();
                      handleNavigateToProjects();
                    }
                  }}
                  role="link"
                  tabIndex={0}
                >
                  <div className="absolute inset-x-6 top-3 h-24 rounded-3xl bg-gradient-to-br from-accentLight/80 via-white to-white opacity-60 blur-xl transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="pointer-events-none absolute inset-x-6 top-3 flex items-center">
                    <motion.span
                      className="h-px flex-1 bg-accent"
                      animate={{
                        scaleX: hoveredProject === index ? 1 : 0,
                        opacity: hoveredProject === index ? 1 : 0
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left center" }}
                    />
                    <motion.span
                      className="ml-2 text-sm text-accent"
                      animate={{
                        x: hoveredProject === index ? 0 : -8,
                        opacity: hoveredProject === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden
                    >
                      →
                    </motion.span>
                  </div>
                  <div className="relative space-y-2">
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent transition-colors hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    >
                      Project
                    </Link>
                    <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                    <p className="text-sm text-inkMuted">{item.blurb}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex w-[min(1080px,94%)] flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <motion.div
            className="max-w-md space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-accent">
              By the numbers
            </p>
            <h2 className="font-display text-4xl text-ink">
              Research collaborations centered on human impact.
            </h2>
            <p className="text-inkMuted">
              We partner with clinics, classrooms, cultural institutions, and
              civic organizations to prototype responsible, relational AI in the
              world.
            </p>
          </motion.div>
          <motion.div
            className="grid w-full max-w-lg grid-cols-2 gap-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            {statHighlights.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-3xl border border-accentLight/80 bg-surface p-6 text-center shadow-glass transition-transform duration-300 hover:-translate-y-2"
              >
                <p className="font-display text-4xl text-ink">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.4em] text-inkMuted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto w-[min(1080px,94%)] space-y-16">
          <motion.div
            className="space-y-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-accent">
              Research Vision
            </p>
            <h2 className="font-display text-5xl text-ink">
              We design relational AI agents that improve people's lives through personalized support.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-inkMuted">
              Our work examines how agents continue to learn about each person's unique needs, traits, and preferences through long-term interactions, offering social support, timely information, and intervention in real-world contexts.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {researchPillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <motion.article
                  key={pillar.id}
                  className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-accentLight/70 bg-surface p-8 shadow-glass transition-transform duration-300"
                  onMouseEnter={() => setActivePillar(pillar.id)}
                  onFocus={() => setActivePillar(pillar.id)}
                  whileHover={{ y: -6 }}
                  tabIndex={0}
                >
                  <div className="absolute inset-x-6 top-0 h-24 rounded-b-full bg-gradient-to-b from-accentLight/80 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="relative space-y-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-accent">
                      Pillar
                    </p>
                    <h3 className="font-display text-2xl text-ink md:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-inkMuted">{pillar.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-ink">
                      {pillar.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-accentLight/80 bg-accentLight/40 px-3 py-1"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="active-outline"
                        className="absolute inset-0 rounded-[28px] border-2 border-accent/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          <div className="space-y-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-accent">
                  Long-Term Engagements
                </p>
                <h3 className="font-display text-4xl text-ink">
                  Relational technologies become helpful companions.
                </h3>
              </div>
              <p className="max-w-lg text-inkMuted">
                We close gaps in care, education, and daily living by pairing qualitative
                insight with longitudinal evaluation to understand how supportive AI sustains
                relationships over time.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                className="relative overflow-hidden rounded-[28px] border border-accentLight/70 bg-surface p-8 shadow-glass"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accentLight/60 blur-3xl" />
                <div className="relative space-y-4 text-ink">
                  <h4 className="font-display text-2xl">
                    Relational Ethnography + AI Simulation
                  </h4>
                  <p className="text-sm text-inkMuted">
                    We combine participatory observation with simulation sandboxes to evaluate
                    how agents negotiate voice, agency, and trust across cultures and expertise
                    levels.
                  </p>
                  <ul className="space-y-2 text-sm text-inkMuted">
                    <li>• Community immersion labs in healthcare and education</li>
                    <li>• Scenario authoring with domain experts and storytellers</li>
                    <li>• Multi-modal sensing and co-interpretation workshops</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-[28px] border border-accentLight/70 bg-gradient-to-br from-accentLight/70 via-white to-white p-8 shadow-glass"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-white/60" />
                <div className="relative space-y-4 text-ink">
                  <h4 className="font-display text-2xl">
                    Resonant Metrics for Human-AI Flourishing
                  </h4>
                  <p className="text-sm text-inkMuted">
                    Beyond accuracy and efficiency, we co-design evaluation toolkits that track
                    trust, inclusion, and relational wellbeing. Our lab open-sources these measures
                    for the wider community.
                  </p>
                  <div className="grid gap-3 text-sm text-ink">
                    <div className="rounded-2xl border border-accentLight/70 bg-surface p-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-inkMuted">
                        Observatory
                      </p>
                      <p>Realtime dashboards for collaborative sensemaking.</p>
                    </div>
                    <div className="rounded-2xl border border-accentLight/70 bg-surface p-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-inkMuted">
                        Studio
                      </p>
                      <p>Immersive prototyping pods with responsive volumetric media.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="rounded-[30px] border border-accentLight/70 bg-surface p-10 shadow-glass"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-accent">
                Collaboration Streams
              </p>
              <h4 className="font-display text-3xl text-ink">
                We invite partnerships that push human-centered AI futures.
              </h4>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Co-Design Residencies",
                    copy:
                      "Host our researchers on-site to co-create interventions and evaluate AI systems in real environments."
                  },
                  {
                    title: "Living Labs",
                    copy:
                      "Deploy prototypes with embedded evaluators, observation suites, and inclusive feedback loops."
                  },
                  {
                    title: "Open Toolkits",
                    copy:
                      "Leverage open-source datasets, evaluation libraries, and design playbooks curated by our lab."
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-accentLight/70 bg-surface p-6 text-ink"
                  >
                    <h5 className="font-display text-xl">{item.title}</h5>
                    <p className="mt-3 text-sm text-inkMuted">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <motion.div
          className="mx-auto flex w-[min(1080px,94%)] flex-col gap-10 rounded-[32px] border border-accentLight/70 bg-surface p-10 shadow-glass md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-lg space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-accent">
              Collaboration
            </p>
            <h3 className="font-display text-3xl text-ink">
              We co-design with educators, clinicians, artists, and civic
              innovators.
            </h3>
            <p className="text-inkMuted">
              From workshops to living labs, we invite partners to shape
              responsible AI futures and measure their impact with us.
            </p>
          </div>
          <div className="rounded-3xl border border-accent/10 bg-gradient-to-br from-accent/90 via-accentSoft to-accentLight px-8 py-6 text-white shadow-glow">
            <div className="space-y-4">
              <p className="font-display text-xl">
                “The HAI Lab translated complex autonomy into intuitive workflows
                our teams trust.”
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-white/80">
                Partner reflection · 2024
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
