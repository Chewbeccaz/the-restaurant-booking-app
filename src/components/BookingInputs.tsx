interface IBookingInputs {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const BookingInputs: React.FC<IBookingInputs> = ({label, name, type, value, onChange}) => {
    return (
        <>
        <label htmlFor="name">{label}</label>
        <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        />  
        </>
    );
};