export function PrimaryButton({ className = "", text, href }) {
  const handleClick = () => {
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} btn sm:btn-md transform transition-all duration-100 hover:opacity-80 hover:scale-95 ease-in`}
    >
      {text}
    </button>
  );
}
