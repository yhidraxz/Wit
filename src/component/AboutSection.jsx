// import aboutPhoto from "../assets/macaco.png";

export function AboutSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black/95 to-base-100 to-60% py-20 px-6 md:px-20">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-50%"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            // src={aboutPhoto}
            alt="Studio Facility"
            className="rounded-xl shadow-xl object-cover w-full h-full max-h-[400px]"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-silver-gradient bg-clip-text text-transparent">
            Our Creative Sanctuary
          </h2>
          <p className="text-base-light-100 text-lg md:text-xl leading-relaxed mb-6">
            Wit Boutique Studio is a boutique creative studio designed to
            inspire your mind and elevate your creativity. Whether you're
            exploring new ideas, learning, or simply enjoying the ambiance, our
            space is tailored for unique experiences.
          </p>
          <a
            href="#contact"
            className="inline-block relative overflow-hidden px-8 py-3 rounded-lg font-semibold text-[#232323] shadow-md transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #f9f9f9 0%, #d9d9d9 15%, #a0a0a0 30%, #f9f9f9 50%, #8a8a8a 70%, #e6e6e6 85%, #b0b0b0 100%)",
            }}
          >
            <span className="relative z-10">Book a Visit</span>
            <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/25 to-transparent"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
