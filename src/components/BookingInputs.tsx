interface IInputs {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ISelect {
  label: string;
  id: string;
  name: string;
  value: string;
  options: { value: string; text: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface ICheckbox {
  label: string;
  id: string;
  type: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BookingInputs: React.FC<IInputs | ISelect | ICheckbox> = (
  props
) => {
  if ("options" in props) {
    const { label, id, name, value, options, onChange } = props as ISelect;

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void
          }
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </>
    );
  } else if ("type" in props) {
    const { label, id, name, type, value, onChange } = props as IInputs;

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
          }
        />
      </>
    );
  } else {
    const { label, id, type, checked, onChange } = props as ICheckbox;

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          checked={checked}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
          }
        />
      </>
    );
  }
};
