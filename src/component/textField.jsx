export function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  inputClassName = "",
}) {
  return (
    <div className={`mb-4 ${inputClassName}`}>
      {label && (
        <label className="block text-base-300 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full h-8 px-4 bg-white border border-gray-300 rounded-lg text-base-300 focus:outline-none focus:ring-2 focus:ring-primary ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
}
