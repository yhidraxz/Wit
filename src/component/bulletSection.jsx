// BulletSection.jsx
import {
  FaAppleAlt,
  FaHeartbeat,
  FaMusic,
  FaDumbbell,
  FaLeaf,
  FaSpa,
} from "react-icons/fa";
import React from "react";

export function BulletSection() {
  const benefits = [
    {
      icon: <FaAppleAlt />,
      title: "Energia e saúde",
      text: "Melhore sua saúde e energia com a nossa nutricionista",
    },
    {
      icon: <FaHeartbeat />,
      title: "Avaliações físicas",
      text: "Garanta seu progresso com avaliações periódicas",
    },
    {
      icon: <FaLeaf />,
      title: "Higiene garantida",
      text: "Oferecemos toalhas aromatizadas e individuais",
    },
    {
      icon: <FaMusic />,
      title: "Ambiente luxuoso",
      text: "Experiência premium com sistema de som de cinema e climatização",
    },
    {
      icon: <FaDumbbell />,
      title: "Conforto e segurança",
      text: "Atenção individual para técnica, segurança e evolução",
    },
  ];

  return (
    <div className="relative bg-base-100 flex flex-col">
      <div className="absolute top-0 left-0 w-full h-28 z-20 pointer-events-none">
        <svg
          className="w-full h-full block"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 100,0 100,90" fill="#000" />
        </svg>
      </div>

      <div className="relative z-10 pt-20 pb-6 px-6 md:px-20 bg-gradient-to-tr from-black to-base-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-3xl font-extrabold text-left mb-6 text-primary bg-gold-gradient bg-clip-text text-transparent">
            Não está convencido?..
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-lg border border-slate-800/30 p-4 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-11 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="url(#goldGradient)"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="goldGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#f6e27a" />
                          <stop offset="25%" stopColor="#e7c74d" />
                          <stop offset="50%" stopColor="#d4af37" />
                          <stop offset="75%" stopColor="#b8860b" />
                          <stop offset="100%" stopColor="#f6e27a" />
                        </linearGradient>
                      </defs>
                      {React.cloneElement(b.icon, {
                        fill: "url(#goldGradient)",
                      })}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base-light-100">
                      {b.title}
                    </h4>
                    <p className="text-sm text-primary/80 mt-1">{b.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-[#232323] shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, #fff1b8 0%, #f6e27a 20%, #d4af37 45%, #b8860b 65%, #e7c74d 80%, #fff8d0 100%)",
              }}
            >
              Reservar visita
            </a>
          </div>
          <div>
            <h2 className="mt-20 text-3xl md:text-4xl font-extrabold mb-6">
              Seu treino, nosso cuidado
            </h2>
            <p className="text-lg text-primary/80 mb-12">
              Cada cliente acompanha sua evolução com um personal trainer
              dedicado e todo o suporte da nossa equipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
