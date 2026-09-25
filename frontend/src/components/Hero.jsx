export default function Hero() {
  return (
    <header className="relative min-h-[80dvh] w-full flex items-center bg-moss/5 py-28 md:py-32">
      {/* Background soft shapes — clipped to the hero bounds so they never bleed
          into other sections, without clipping the real text content below. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-moss/5 rounded-bl-[10rem] -mr-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-clay/5 rounded-tr-[10rem] -ml-32 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl hero-content">
          <h1 className="flex flex-col gap-4">
            <span className="hero-anim text-moss leading-tight text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter">
              Reading, Reimagined
            </span>
            <span className="hero-anim text-clay leading-tight text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tight italic">
              for Every Mind.
            </span>
          </h1>
          <p className="hero-anim text-text-muted md:text-xl leading-relaxed text-base max-w-lg mt-12">
            NeuroRead uses AI to adapt text for your unique mind — making learning a calm and supportive experience.
          </p>
          <div className="hero-anim mt-12 flex flex-wrap gap-4">
            <div className="px-6 py-2 bg-moss/10 rounded-full text-moss text-xs font-bold uppercase tracking-widest border border-moss/10">Child Friendly</div>
            <div className="px-6 py-2 bg-clay/10 rounded-full text-clay text-xs font-bold uppercase tracking-widest border border-clay/10">Accessibility First</div>
          </div>
        </div>
      </div>
    </header>
  );
}

