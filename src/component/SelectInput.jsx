export function SelectField({
  options,
  placeholder,
  value,
  onChange,
  className = "",
  label,
  disabled = false,
  inputClassName,
}) {
  return (
    <div className={`mb-4 ${inputClassName}`}>
      {label && (
        <label className="block text-base-300 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <select
        className={`w-full h-8 px-4 bg-white border border-gray-300 rounded-lg text-base-300 focus:outline-none focus:ring-2 focus:ring-primary appearance-none ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: "right 12px center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "16px",
        }}
      >
        <option value="" disabled className="text-gray-400">
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-base-300"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
