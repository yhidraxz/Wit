export function InputField ({name, label, type = "text", value, onChange, placeholder, inputcss, labelcss}) {
    return (
        <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className={`block ${labelcss} text-base-100 mb-1`}
        >
          {label}
        </label>
      )}
      <div className="w-full min-w-[200px]">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={` ${inputcss} w-full bg-transparent placeholder:text-base-100 text-base-100 text-sm border border-slate-200 rounded-md px-3 py-2
             transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow`}
        />
      </div>
    </div>
    );
};