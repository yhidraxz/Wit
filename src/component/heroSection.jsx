import { PrimaryButton } from "./primaryButton.jsx";

export function HeroSection() {
  return (
    <section
      className={`
        relative w-full h-screen bg-cover bg-center
        bg-[url('/MobHeroSection.webp')] sm:bg-[url('/src/assets/fachadaWit.png')]
      `}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#232323]/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent to-60%"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/95  to-transparent to-50%"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4">
        {/* Title */}
        <h1 className="mt-24 text-4xl md:text-6xl font-extrabold  drop-shadow-md">
          <span className="text-primary">Poucos</span> têm acesso.. <br />
          Mas <span className="text-primary">todos</span> percebem o resultado
        </h1>

        {/* Subtitle */}
        <p className="text-base font-bold md:text-xl text-primary max-w-2xl mb-8">
          Tenha uma experiência de performance e bem-estar, para a elite que
          valoriza tempo e resultados.
        </p>

        {/* Silver Button with polished effect */}
        <a
          href="#contact"
          className="relative overflow-hidden px-8 py-3 rounded-lg font-semibold text-[#232323] shadow-md transition-transform hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg, #f9f9f9 0%, #d9d9d9 15%, #a0a0a0 30%, #f9f9f9 50%, #8a8a8a 70%, #e6e6e6 85%, #b0b0b0 100%)",
          }}
        >
          <span className="relative z-10">Book a Visit</span>
          {/* glossy reflection overlay */}
          <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/25 to-transparent"></span>
        </a>
      </div>
    </section>
  );
  // return (
  //   <div className="hero min-h-screen bg-base-200 px-4">
  //     <div className="hero-content text-center flex-col lg:flex-row">
  //       <div>
  //         <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
  //           Agência especializada em{" "}
  //           <span className="text-accent block sm:inline">
  //             Crescimento estratégico
  //           </span>
  //         </h1>
  //         <p className="py-6 opacity-70 text-base sm:text-lg md:text-xl">
  //           Se você quer aumentar suas vendas e escalar{" "}
  //           <br className="hidden sm:block" />a Ace é a solução
  //         </p>
  //         <PrimaryButton
  //           text="Começar agora"
  //           className="bg-accent text-black btn-md sm:btn-xl"
  //           href="#formulario"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}

//        <h1 className="text-5xl md:text-6xl font-extrabold bg-silver-gradient bg-clip-text text-transparent drop-shadow-md">
//            Wit Boutique Studio
//        </h1>
