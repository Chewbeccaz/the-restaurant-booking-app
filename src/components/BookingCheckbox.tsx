interface ICheckbox {
    label: string;
    id: string;
    type: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export const BookingCheckbox = (props: ICheckbox) => {
    const { label, id, type, checked, onChange } = props;
  
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          checked={checked}
          onChange={onChange}
        />
      </>
    );

}