import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectFilters, Project } from "../data/labData";

const gradientPalette = [
  "from-accentLight via-white to-white",
  "from-white via-accentLight/80 to-white",
  "from-accentSoft/60 via-white to-white",
  "from-white via-accentLight/70 to-accentSoft/40"
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Project["category"] | "All">(
    "All"
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-20 px-6">
      <section className="mx-auto w-[min(1080px,94%)] space-y-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl text-ink">
            Human-centered AI initiatives currently underway in our lab.
          </h1>
          <p className="max-w-3xl text-lg text-inkMuted">
            These efforts pair design, deployment, and evaluation to understand how interactive agents can provide relational support in health, education, and community contexts.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {(["All", ...projectFilters] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  isActive
                    ? "border-accent bg-accent text-white shadow-glass"
                    : "border-accent/20 bg-white text-ink hover:border-accent hover:text-accent"
                }`}
              >
                {filter === "All" ? "All Domains" : filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-[min(1080px,94%)]">
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          layout
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
                className="group relative overflow-hidden rounded-[26px] border border-accentLight/70 bg-surface p-8 shadow-glass transition-transform duration-300 hover:-translate-y-3"
              >
                <div
                  className={`absolute inset-x-6 top-6 h-32 rounded-3xl bg-gradient-to-br ${
                    gradientPalette[index % gradientPalette.length]
                  } opacity-70 blur-xl transition-opacity duration-300 group-hover:opacity-90`}
                />
                <div className="relative flex flex-col gap-6">
                  <div className="text-xs uppercase tracking-[0.35em] text-inkMuted">
                    <span>{project.category}</span>
                  </div>
                  <h2 className="font-display text-2xl text-ink">
                    {project.title}
                  </h2>
                  <p className="text-sm text-inkMuted">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-ink">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accentLight/80 bg-accentLight/40 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 text-sm text-inkMuted">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-white px-4 py-2 font-medium text-accent transition-all duration-300 hover:-translate-y-[2px] hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    >
                      View case study
                      <span aria-hidden>→</span>
                    </a>
                    <motion.div
                      className="h-10 w-10 rounded-full border border-accent/20"
                      animate={{ rotate: [0, 12, -8, 0] }}
                      transition={{ duration: 18, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
