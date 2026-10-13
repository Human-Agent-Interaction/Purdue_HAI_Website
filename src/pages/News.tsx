import { motion } from "framer-motion";
import { newsItems } from "../data/labData";

const News = () => {
  return (
    <div className="space-y-20 px-6">
      <section className="mx-auto w-[min(1080px,94%)] space-y-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl text-ink">
            Awards, releases, and stories from the Human-Agent Interaction Lab.
          </h1>
          <p className="max-w-3xl text-lg text-inkMuted">
            Follow our milestones as we launch new collaborations, earn
            recognition, and share prototypes across the globe.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto w-[min(1080px,94%)] space-y-12">
        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-accentSoft to-accentLight md:block" />
          <div className="space-y-10">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="relative flex flex-col gap-6 rounded-[26px] border border-accentLight/70 bg-surface p-6 shadow-glass transition-transform duration-300 hover:-translate-y-3 md:flex-row md:gap-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="absolute left-[22px] top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block" />
                <div className="relative overflow-hidden rounded-[22px] border border-accentLight/70 bg-gradient-to-br from-accentLight/80 via-white to-white px-6 py-4 text-ink shadow-glass md:max-w-[220px]">
                  <div className="absolute inset-0 bg-white/60" />
                  <div className="relative space-y-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-inkMuted">
                      {item.date}
                    </p>
                    <h2 className="font-display text-lg text-ink">{item.title}</h2>
                  </div>
                </div>
                <div className="relative flex-1 space-y-3">
                  <p className="text-sm text-inkMuted">{item.summary}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-accent/20 px-4 py-2 text-xs uppercase tracking-[0.35em] text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                    aria-label={`Read story: ${item.title}`}
                  >
                    Read story →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
