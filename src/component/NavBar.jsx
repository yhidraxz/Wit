import logo from "../assets/witLogo.png";
import { PrimaryButton } from "./primaryButton";

export function NavBar() {
  return (
    <div className="navbar bg-transparent shadow-sm fixed z-10">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <img
            src={logo}
            alt="ACE Logo"
            className="-translate-x-4 mb-2 h-12 w-12 sm:h-20 sm:w-20 sm:mt-8"
          />
        </a>
      </div>
      <div className="navbar-end">
        {/* <PrimaryButton
          className="bg-silver-grandient btn-sm"
          text="Entrar em contato"
          href="#formulario"
        /> */}
      </div>
    </div>
  );
}
