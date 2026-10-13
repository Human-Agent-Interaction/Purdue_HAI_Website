import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications, publicationTopics } from "../data/labData";

const Publications = () => {
  const years = useMemo(
    () =>
      Array.from(new Set(publications.map((pub) => pub.year))).sort(
        (a, b) => b - a
      ),
    []
  );

  const [activeTopic, setActiveTopic] = useState<string>("All");
  const [activeYear, setActiveYear] = useState<number | "All">("All");

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const topicMatch = activeTopic === "All" ? true : pub.topic === activeTopic;
      const yearMatch =
        activeYear === "All" ? true : pub.year === Number(activeYear);
      return topicMatch && yearMatch;
    });
  }, [activeTopic, activeYear]);

  return (
    <div className="space-y-18 px-6">
      <section className="mx-auto w-[min(1080px,94%)] space-y-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl text-ink">
            Advancing human-centered AI through peer-reviewed research and open
            toolkits.
          </h1>
          <p className="max-w-3xl text-lg text-inkMuted">
            We publish across HCI, robotics, machine learning, and design. Many
            papers include open artifacts—from code and datasets to speculative
            playbooks.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 rounded-[26px] border border-accentLight/70 bg-surface p-6 pb-6">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTopic("All")}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.35em] transition-all ${
                activeTopic === "All"
                  ? "border-accent bg-accent text-white shadow-glass"
                  : "border-accent/20 bg-white text-ink hover:border-accent hover:text-accent"
              }`}
            >
              All Topics
            </button>
            {publicationTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.35em] transition-all ${
                  activeTopic === topic
                    ? "border-accent bg-accent text-white shadow-glass"
                    : "border-accent/20 bg-white text-ink hover:border-accent hover:text-accent"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-inkMuted">
              Filter by Year
            </span>
            <button
              type="button"
              onClick={() => setActiveYear("All")}
              className={`rounded-full border px-3 py-1 text-xs transition-all ${
                activeYear === "All"
                  ? "border-accent bg-accent text-white"
                  : "border-accent/20 bg-white text-ink hover:border-accent hover:text-accent"
              }`}
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                className={`rounded-full border px-3 py-1 text-xs transition-all ${
                  activeYear === year
                    ? "border-accent bg-accent text-white"
                    : "border-accent/20 bg-white text-ink hover:border-accent hover:text-accent"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-[min(1080px,94%)] space-y-6">
        <AnimatePresence>
          {filteredPublications.map((pub) => (
            <motion.article
              key={pub.title}
              className="group relative overflow-hidden rounded-[24px] border border-accentLight/70 bg-surface p-6 shadow-glass"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent to-accentLight opacity-70" />
              <div className="flex flex-col gap-4 pl-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-inkMuted">
                    <span>{pub.venue}</span>
                    <span className="rounded-full border border-accent/20 px-2 py-[2px] text-[10px]">
                      {pub.year}
                    </span>
                    <span>{pub.topic}</span>
                  </div>
                  <h2 className="font-display text-2xl text-ink">{pub.title}</h2>
                  <p className="text-sm text-inkMuted">{pub.authors}</p>
                </div>
                <div className="flex flex-col items-start gap-3 text-xs uppercase tracking-[0.35em] text-accent md:items-end">
                  <div className="flex flex-wrap gap-2">
                    {pub.links.pdf && (
                      <a
                        href={pub.links.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-accent/20 px-3 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        PDF
                      </a>
                    )}
                    {pub.links.video && (
                      <a
                        href={pub.links.video}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-accent/20 px-3 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        Video
                      </a>
                    )}
                    {pub.links.code && (
                      <a
                        href={pub.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-accent/20 px-3 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        Code
                      </a>
                    )}
                  </div>
                  <p className="text-[10px] text-inkMuted">
                    Artifact badges indicate available resources.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        {filteredPublications.length === 0 && (
          <motion.div
            className="rounded-[24px] border border-accentLight/70 bg-surface p-10 text-center text-sm text-inkMuted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No publications match the current filters. Try broadening the query.
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Publications;
