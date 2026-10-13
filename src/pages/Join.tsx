import { motion } from "framer-motion";

const Join = () => {
  return (
    <div className="space-y-20 px-6">
      <section className="mx-auto w-[min(1080px,94%)] space-y-8">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl text-ink">
            Join the Human-Agent Interaction Lab
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-inkMuted">
            Whether you are a Purdue student, prospective graduate researcher,
            or collaborator, we&apos;d love to learn about your interests and
            explore how we can work together.
          </p>
          <a
            href="mailto:sooyeonj@purdue.edu"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-6 py-3 text-sm font-semibold text-accent transition duration-300 hover:-translate-y-[2px] hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            Email Prof. Sooyeon Jeong
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </section>

      <section className="mx-auto w-[min(1040px,94%)]">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Current Purdue Students",
              description:
                "Email Prof. Jeong and include a research summary from the HAI group, your proposed improvements, CV/resume with coursework and publications, and optional portfolio links."
            },
            {
              title: "Non-Purdue Students",
              description:
                "Apply through the Purdue CS graduate admissions portal. Mention Prof. Sooyeon Jeong as a potential advisor so your application is routed to our group."
            },
            {
              title: "Collaborations & Partnerships",
              description:
                "We welcome opportunities with other research labs, industry, domain experts, and community partners. Reach out to discuss project ideas or co-created initiatives."
            }
          ].map((card, index) => (
            <motion.article
              key={card.title}
              className="rounded-[28px] border border-accentLight/70 bg-surface p-8 text-left shadow-glass"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h2 className="font-display text-2xl text-ink">{card.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-inkMuted">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(680px,94%)]">
        <motion.div
          className="rounded-[30px] border border-accentLight/70 bg-white p-8 text-center shadow-glass"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            Mailing Address
          </p>
          <h3 className="mt-3 font-display text-2xl text-ink">
            Human-Agent Interaction Lab
          </h3>
          <div className="mt-4 space-y-2 text-sm text-inkMuted">
            <p>Haas G14</p>
            <p>250 N University St.</p>
            <p>West Lafayette, IN 47907</p>
          </div>
          <div className="mt-6 h-px w-16 mx-auto rounded-full bg-accent/40" />
          <p className="mt-4 text-xs uppercase tracking-[0.35em] text-accent">
            Contact
          </p>
          <a
            href="mailto:sooyeonj@purdue.edu"
            className="mt-2 inline-flex items-center justify-center rounded-full border border-accent/30 px-5 py-2 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent hover:text-white"
          >
            sooyeonj@purdue.edu
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Join;
