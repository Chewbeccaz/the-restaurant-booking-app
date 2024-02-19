interface IInputs {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const BookingInputs = (props: IInputs
) => {

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
    }
