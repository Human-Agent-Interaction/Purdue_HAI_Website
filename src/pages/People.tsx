import { useCallback, useEffect, useMemo, useState, type SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { peopleGroups, type Person } from "../data/labData";
import sooeyeonJeongPortrait from "../../assets/people/SooyeonJeong.jpg";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

type SocialLinkKey = "website" | "scholar" | "github" | "linkedin";

const SOCIAL_LINK_ORDER: SocialLinkKey[] = [
  "website",
  "scholar",
  "github",
  "linkedin"
];

const SOCIAL_LINK_META: Record<
  SocialLinkKey,
  { label: string; Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element }
> = {
  website: {
    label: "Website",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
        <path
          d="M12 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z"
          stroke="currentColor"
        />
        <path
          d="M12 2.75c2.5 0 4.5 4.15 4.5 9.25s-2 9.25-4.5 9.25-4.5-4.15-4.5-9.25 2-9.25 4.5-9.25Zm-8.5 9.25h17M4.43 7.25h15.14m-15.14 9h15.14"
          stroke="currentColor"
        />
      </svg>
    )
  },
  scholar: {
    label: "Google Scholar",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
        <path
          d="m3.25 9.5 8.75-4.5 8.75 4.5-8.75 4.5-8.75-4.5Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 11.05v3.4c0 2.1 2.55 3.8 5.5 3.8s5.5-1.7 5.5-3.8v-3.4"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M20.75 9.5v5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  github: {
    label: "GitHub",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.65.5.5 5.72.5 12.2c0 5.17 3.37 9.56 8.05 11.11.6.12.82-.27.82-.59 0-.29-.01-1.05-.02-2.06-3.27.73-3.97-1.63-3.97-1.63-.55-1.43-1.35-1.81-1.35-1.81-1.1-.77.08-.76.08-.76 1.21.09 1.85 1.27 1.85 1.27 1.08 1.89 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.61-.3-5.36-1.34-5.36-5.97 0-1.32.46-2.39 1.22-3.23-.12-.3-.53-1.52.12-3.16 0 0 .99-.32 3.25 1.23a11.03 11.03 0 0 1 2.96-.41c1.01 0 2.03.14 2.97.41 2.25-1.55 3.24-1.23 3.24-1.23.66 1.64.25 2.86.12 3.16.76.84 1.22 1.91 1.22 3.23 0 4.64-2.75 5.66-5.37 5.96.43.38.82 1.12.82 2.27 0 1.64-.02 2.96-.02 3.36 0 .32.22.71.82.59a11.73 11.73 0 0 0 8.04-11.1C23.5 5.72 18.35.5 12 .5Z" />
      </svg>
    )
  },
  linkedin: {
    label: "LinkedIn",
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55Zm-11.8 15h-2.7V9.67h2.7V18Zm-1.35-9.36a1.56 1.56 0 1 1 0-3.11 1.56 1.56 0 0 1 0 3.11Zm11.35 9.36h-2.7v-4.4c0-1.05-.02-2.39-1.46-2.39-1.47 0-1.7 1.15-1.7 2.32V18h-2.7V9.67h2.6v1.15h.04c.36-.67 1.23-1.37 2.53-1.37 2.7 0 3.2 1.78 3.2 4.1V18Z" />
      </svg>
    )
  }
};

const principalInvestigator: Person = {
  name: "Sooyeon Jeong",
  image: sooeyeonJeongPortrait,
  role: "Principal Investigator · Human-Agent Interaction Lab",
  focus: "Relational AI, social robotics, community-centered design",
  bio: "Sooyeon Jeong is an Assistant Professor in Computer Science at Purdue University and the Director of the Human-Agent Interaction Laboratory. Her research focuses on designing and deploying interactive AI agents that can improve people’s lives by providing personalized support based on each user’s needs, traits, and behaviors. She deploys these agents “in-the-wild” to evaluate how they build relationships and rapport with people over time to improve their wellbeing, health and learning. Sooyeon received a S.B. and a M.Eng. from the Department of Electrical Engineering and Computer Science (EECS), and a S.M. and a Ph.D in Media Arts and Sciences from Massachusetts Institute of Technology. Prior to joining Purdue, she spent one year as a NIH National Research Service Award (NRSA) Postdoctoral Fellow at the Center for Behavioral Intervention Technologies (CBITs) in Northwestern University Feinberg School of Medicine.",
  links: {
    website: "https://www.sooyeonjeong.com/",
    scholar: "https://scholar.google.com/citations?user=obVs9ZAAAAAJ"
  }
};

const SocialLinks = ({
  person,
  className = "",
  iconSize = "md"
}: {
  person: Person;
  className?: string;
  iconSize?: "sm" | "md";
}) => {
  const links = SOCIAL_LINK_ORDER.flatMap((key) => {
    const href = person.links?.[key];
    return href ? [{ key, href }] : [];
  });

  if (!links.length) return null;

  const containerClasses = [
    "flex flex-wrap gap-3",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const buttonSize =
    iconSize === "sm"
      ? "h-9 w-9"
      : "h-10 w-10";
  const iconDimension =
    iconSize === "sm"
      ? "h-4 w-4"
      : "h-5 w-5";

  return (
    <div className={containerClasses}>
      {links.map(({ key, href }) => {
        const { label, Icon } = SOCIAL_LINK_META[key];
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonSize} flex items-center justify-center rounded-full border border-accentLight/70 bg-white text-accent transition hover:-translate-y-[2px] hover:border-accent/80 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70`}
            aria-label={`${person.name} ${label}`}
            onClick={(event) => event.stopPropagation()}
          >
            <Icon className={`${iconDimension}`} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

const PersonCard = ({
  person,
  onSelect
}: {
  person: Person;
  onSelect: (person: Person) => void;
}) => {
  const hasBio = Boolean(person.bio);

  const handleClick = useCallback(() => {
    if (hasBio) {
      onSelect(person);
    }
  }, [hasBio, onSelect, person]);

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={`group relative flex flex-col items-center rounded-[26px] border border-accentLight/70 bg-surface p-6 text-center shadow-glass transition-transform duration-300 ${hasBio ? "cursor-pointer hover:shadow-[0_22px_46px_rgba(176,138,51,0.18)]" : "cursor-default"}`}
      whileHover={hasBio ? { y: -6 } : undefined}
    >
      {person.image ? (
        <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border border-accent/20 bg-white shadow-[0_16px_34px_rgba(176,138,51,0.18)]">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <motion.div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-accent/20 bg-gradient-to-br from-accent via-accentSoft to-accentLight text-lg font-semibold text-white shadow-glow"
          animate={{ rotate: [0, 6, -4, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        >
          {getInitials(person.name)}
        </motion.div>
      )}
      <div className="space-y-2">
        <h3 className="font-display text-lg text-ink">{person.name}</h3>
      </div>
      <SocialLinks
        person={person}
        iconSize="sm"
        className="mt-4 justify-center"
      />
    </motion.button>
  );
};

const PrincipalInvestigatorCard = ({
  person,
  onSelect
}: {
  person: Person;
  onSelect: (person: Person) => void;
}) => {
  const hasBio = Boolean(person.bio);
  const roleTitle = person.role.includes("·")
    ? person.role.split("·")[0].trim()
    : person.role;
  const handleClick = useCallback(() => {
    if (hasBio) {
      onSelect(person);
    }
  }, [hasBio, onSelect, person]);

  return (
    <motion.button
      type="button"
      className={`mx-auto flex w-full max-w-md flex-col items-center rounded-[32px] border border-accentLight/70 bg-surface p-10 text-center shadow-glass transition-transform duration-300 ${hasBio ? "cursor-pointer hover:shadow-[0_22px_46px_rgba(176,138,51,0.18)]" : "cursor-default"}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={hasBio ? { y: -6 } : undefined}
      onClick={handleClick}
    >
      <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border border-accent/30 bg-white shadow-[0_18px_40px_rgba(176,138,51,0.18)]">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent via-accentSoft to-accentLight text-4xl font-semibold text-white">
            {getInitials(person.name)}
          </div>
        )}
      </div>
      <h2 className="mt-3 font-display text-3xl text-ink">{person.name}</h2>
      <p className="mt-1 text-sm uppercase tracking-[0.28em] text-accent/80">
        {roleTitle}
      </p>
      <SocialLinks
        person={person}
        className="mt-6 justify-center"
      />
    </motion.button>
  );
};

const PersonModal = ({
  person,
  onClose
}: {
  person: Person;
  onClose: () => void;
}) => (
  <>
    <motion.div
      className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    />
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="relative w-full max-w-3xl rounded-[32px] border border-accentLight/60 bg-surface p-6 shadow-[0_24px_60px_rgba(20,23,29,0.28)] md:p-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-accentLight/60 bg-white text-accent transition hover:border-accent/80 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          onClick={onClose}
          aria-label="Close person details"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth={1.8}
            fill="none"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-accent/80">
              {person.role}
            </p>
            <h3 className="font-display text-3xl text-ink">{person.name}</h3>
          </div>
          {person.bio && (
            <p className="text-sm leading-relaxed text-inkMuted">
              {person.bio}
            </p>
          )}
          <p className="text-sm text-inkMuted/90">
            <span className="font-medium">Focus:</span>{" "}
            <span className="italic">{person.focus}</span>
          </p>
          <SocialLinks
            person={person}
            className="mt-2 justify-start"
          />
        </div>
      </motion.div>
    </motion.div>
  </>
);

const People = () => {
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  const sections = useMemo(
    () => [
      {
        title: "Research Staff",
        people:
          peopleGroups.find((group) => group.title === "Research Staff")?.members ??
          []
      },
      {
        title: "PhD Students",
        people:
          peopleGroups
            .find((group) => group.title === "Graduate Researchers")
            ?.members.filter((member) =>
              member.role.toLowerCase().includes("phd")
            ) ?? []
      },
      {
        title: "Undergrad Students",
        people:
          peopleGroups.find((group) => group.title === "Undergraduate Fellows")
            ?.members ?? []
      }
    ],
    []
  );

  const handleSelectPerson = useCallback((person: Person) => {
    if (person.bio) {
      setActivePerson(person);
    }
  }, []);

  useEffect(() => {
    if (!activePerson) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePerson(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePerson]);

  return (
    <div className="space-y-20 px-6">
      <section className="mx-auto w-[min(1080px,94%)] space-y-8">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl text-ink">
            Co-creating futures with designers, scientists, storytellers, and
            community partners.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-inkMuted">
            Our lab thrives on interdisciplinary collaboration—melding human
            factors, machine learning, social sciences, and creative practice.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto w-[min(1080px,94%)]">
        <PrincipalInvestigatorCard
          person={principalInvestigator}
          onSelect={handleSelectPerson}
        />
      </section>

      <section className="mx-auto w-[min(1080px,94%)] space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className="space-y-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">
                {section.title}
              </p>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent/80" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.people.map((person) => (
                <PersonCard
                  key={person.name}
                  person={person}
                  onSelect={handleSelectPerson}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto w-[min(1080px,94%)] rounded-[28px] border border-accentLight/70 bg-surface p-10 text-center shadow-glass">
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-accent">
            Culture of Care
          </p>
          <h3 className="font-display text-3xl text-ink">
            We mentor through co-creation, reflective practice, and collective
            storytelling.
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-inkMuted">
            Fellows contribute to open-source tools, co-design research with
            partner communities, and gather weekly for shared learning rituals.
          </p>
        </motion.div>
      </section>
      <AnimatePresence>
        {activePerson && (
          <PersonModal
            person={activePerson}
            onClose={() => setActivePerson(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default People;
