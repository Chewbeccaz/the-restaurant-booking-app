import React from "react";

interface IDate {
    label: string;
    id: string;
    name: string;
    type: string;
    min: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  interface ITimeGuests {
    label: string;
    id: string;
    name: string;
    value: string;
    options: { value: string; text: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }

export const BookingDateTimeGuests: React.FC<IDate | ITimeGuests> = (props) => {
    if ("type" in props) {
    const { label, id, name, type, min, value, onChange } = props as IDate;
  
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          min={min}
          onChange={onChange}
        />
      </>
    );
    } else if ("options" in props) {
    const { label, id, name, value, options, onChange } = props as ITimeGuests;

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
    }


};