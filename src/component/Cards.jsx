export function Cards({ icon, title, description }) {
  return (
    <div className="card bg-base-300 w-full sm:w-1/3 h-full shadow-sm">
      <figure className="pt-10 pb-4">{icon}</figure>
      <div className="card-body items-center text-center py-10">
        <h2 className="card-title">{title}</h2>
        <p className="opacity-70">{description}</p>
      </div>
    </div>
  );
}
