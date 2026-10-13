import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "Contact", to: "/join", internal: true },
    { label: "Press", to: "/news", internal: true },
    {
      label: "Directions",
      to: "https://maps.google.com/?q=Purdue+University",
      internal: false
    }
  ];

  return (
    <footer className="relative z-10 border-t border-accentLight/70 bg-gradient-to-t from-accentLight/25 via-white to-white py-12">
      <div className="mx-auto flex w-[min(1040px,90%)] flex-col gap-6 text-sm text-inkMuted md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          viewport={{ once: true }}
          className="max-w-sm"
        >
          <p className="font-display text-base text-ink">
            HAI Lab @ Purdue University
          </p>
          <p className="mt-3">
            We design and deploy interactive AI agents that offer personalized support and grow alongside the people they accompany.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.label}
                to={link.to}
                className="rounded-full px-4 py-2 text-inkMuted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 text-inkMuted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
      <div className="mx-auto mt-8 h-px w-[min(1040px,90%)] neon-divider opacity-80" />
      <p className="mt-6 text-center text-xs uppercase tracking-[0.35em] text-inkMuted">
        © {new Date().getFullYear()} Human-Agent Interaction Laboratory
      </p>
    </footer>
  );
};

export default Footer;
