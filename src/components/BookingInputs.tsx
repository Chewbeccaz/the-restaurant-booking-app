interface IBookingInputs {
    label: string;
    id: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const BookingInputs: React.FC<IBookingInputs> = ({label, id, name, type, value, onChange}) => {
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        />  
        </>
    );
};