export function HomeForm() {
  return (
    <div className="bg-base-100 py-12 px-6 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center">
        Comece a escalar suas vendas!
      </h1>
      <h2 className="text-xl text-accent py-2 font-semibold text-center mb-4">
        em 30 dias, ou receba seu dinheiro de volta
      </h2>
      <form className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <p className="text-sm text-center text-gray-500 mb-6">
          Insira seus dados e entraremos em contato.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome*
          </label>
          <input
            type="name"
            required
            className="w-full input input-bordered"
            placeholder="Seu Nome"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <input
            type="email"
            required
            className="w-full input input-bordered"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefone*
          </label>
          <input
            type="tel"
            required
            className="w-full input input-bordered"
            placeholder="(99) 99999-9999"
          />
        </div>

        <button
          type="submit"
          className="btn w-full bg-primary border-none text-white hover:scale-90"
        >
          Quero começar a escalar!
        </button>
      </form>
    </div>
  );
}
