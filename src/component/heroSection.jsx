import { PrimaryButton } from "./primaryButton.jsx";

export function HeroSection() {
  return (
    <section
      className={`
        relative w-full h-screen bg-cover bg-center
        bg-[url('/MobHeroSection.webp')] lg:bg-[url('/src/assets/fachadaWit.png')]
      `}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#232323]/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent to-60%"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/95  to-transparent to-50%"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 ml:justify-center">
        {/* Title */}
        <h1 className="mt-24 text-4xl md:text-6xl font-extrabold drop-shadow-md ml:mt-9 ml:pb-8">
          <span className="text-primary">Poucos</span> têm acesso.. <br />
          Mas <span className="text-primary">todos</span> percebem o resultado
        </h1>

        {/* Subtitle */}
        <p className="text-base font-sans-serif sm:text-4xl text-base-light-100 max-w-2xl mb-8">
          Tenha uma experiência de performance e bem estar, para a{" "}
          <span className="text-base-light-100">elite</span> que valoriza tempo,
          resultado e saúde
        </p>

        {/* Silver Button with polished effect */}
        <PrimaryButton
          text="Marque uma experiência exclusiva"
          className="bg-primary rounded-xl ml:btn-lg"
        />
      </div>
    </section>
  );
  // return (
  //   <div className="hero min-h-screen bg-base-200 px-4">
  //     <div className="hero-content text-center flex-col lg:flex-row">
  //       <div>
  //         <h1 className="text-3xl lg:text-5xl md:text-7xl font-bold leading-tight">
  //           Agência especializada em{" "}
  //           <span className="text-accent block lg:inline">
  //             Crescimento estratégico
  //           </span>
  //         </h1>
  //         <p className="py-6 opacity-70 text-base lg:text-lg md:text-xl">
  //           Se você quer aumentar suas vendas e escalar{" "}
  //           <br className="hidden lg:block" />a Ace é a solução
  //         </p>
  //         <PrimaryButton
  //           text="Começar agora"
  //           className="bg-accent text-black btn-md lg:btn-xl"
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
