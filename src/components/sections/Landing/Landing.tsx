const Landing = () => {
  return (
    <section id="landing" className="h-screen min-h-screen flex flex-col justify-center mb-12">
        <div className="mb-4">
          <h1 className="text-lg text-electric-yellow">
            Hello, my name is
          </h1>
        </div>
        <div className="mb-1">
          <h2 className="text-landingClamp leading-none">
            Alex Kennedy.
          </h2>
        </div>
        <div className="mb-4">
          <h3 className="text-landingClamp leading-none text-slate-400">
            I build web applications.
          </h3>
        </div>
    </section>
  );
};

export default Landing;
