import React from "react";

export function Footer() {
  return (
    <footer className="bg-base-200 py-10 px-6 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-base-light-100">
            Ace marketing - Agência de Crescimento Estratégico
          </h3>
          <p className="text-gray-500">
            Conectando você com clientes prontos para fechar negócio.
          </p>
        </div>

        {/* Links */}
        {/* <div className="flex gap-6">
          <a href="#processo" className="hover:text-orange-500">
            
          </a>
          <a href="#bullet" className="hover:text-orange-500">
            Como funciona
          </a>
          <a href="#contato" className="hover:text-orange-500">
            Contato
          </a>
        </div> */}

        {/* Socials (placeholders) */}
        {/* <div className="flex gap-4">
          <a href="#" className="hover:text-orange-500">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="hover:text-orange-500">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="hover:text-orange-500">
            <i className="fab fa-whatsapp" />
          </a>
        </div> */}
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Ace. Todos os direitos reservados.
      </div>
    </footer>
  );
}
