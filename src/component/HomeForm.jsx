import { PrimaryButton } from "./primaryButton";

export function HomeForm() {
  return (
    <section className="py-12 bg-gradient-to-b from-black/95 to-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Onde Estamos</h2>
        <p className="text-lg text-base-light-100 mb-6">
          O WIT Boutique está localizado em Imperatriz, Maranhão.
        </p>
        <div className="relative w-full h-96 mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.55248432309!2d-46.2597581!3d-23.9891239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92cf8b03da4747eb%3A0x92080bcbdfd2cffd!2sWIT%20Boutique!5e0!3m2!1spt-BR!2sbr!4v1633012345678"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            title="Localização do WIT Boutique"
          ></iframe>
        </div>
        <div className="text-center">
          <PrimaryButton
            text="Agendar experiência exclusiva"
            className="bg-primary items-center rounded-xl ml:btn-lg w-4/5 mt-8"
          />
        </div>
      </div>
    </section>
  );
}
