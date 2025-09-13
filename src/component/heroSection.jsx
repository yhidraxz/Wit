import { PrimaryButton } from "./primaryButton.jsx";

export function HeroSection() {
  return (
    <section
      className={`
        relative w-full h-screen bg-cover bg-center
        bg-[url('/src/assets/fachadaWitMob.png')] sm:bg-[url('/src/assets/fachadaWit.png')]
      `}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#232323]/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold  drop-shadow-md">
          Wit Boutique Studio
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-primary max-w-2xl mb-8">
          A boutique creative studio for inspired minds ✨
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
