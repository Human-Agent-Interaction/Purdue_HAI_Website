const SubtleBackdrop = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,210,150,0.4),transparent_65%),radial-gradient(circle_at_80%_15%,rgba(214,185,112,0.3),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(247,232,200,0.28),transparent_70%)]" />
      <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(214,171,96,0.42),transparent_65%)] blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(176,138,51,0.38),transparent_65%)] blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(243,225,191,0.35),transparent_60%)] blur-3xl" />
    </div>
  );
};

export default SubtleBackdrop;
