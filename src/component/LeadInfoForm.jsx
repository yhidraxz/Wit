import { SelectField } from "./SelectInput";

export function LeadInfoForm({ form, children }) {
  return (
    <div className="flex bg-base-light-100 px-10 rounded-t-3xl mt-4 flex-col">
      <h1 className="text-base-300 text-3xl my-10 text-center ">
        {form.title}
      </h1>
      {form.selects?.map((select, idx) => (
        <SelectField
          key={select.name || idx}
          label={select.label}
          placeholder={select.placeholder}
          value={select.value}
          onChange={select.onChange}
          options={select.options}
          className="w-[18rem]"
          inputClassName={idx === 0 ? "" : ""}
        />
      ))}

      {children}
    </div>
  );
}
