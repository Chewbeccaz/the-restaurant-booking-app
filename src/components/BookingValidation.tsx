import React, { useEffect } from "react";

interface IFormInputs {
  firstName: string;
  lastName: string;
  mail: string;
  phoneNumber: string;
  date: string;
  time: string;
  isChecked: boolean;
}

interface IBookingValidation {
  formInputs: IFormInputs;
  setFormValidation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookingValidation: React.FC<IBookingValidation> = ({
  formInputs,
  setFormValidation,
}) => {
  useEffect(() => {
    const isValid =
      formInputs.firstName.trim() !== "" &&
      formInputs.lastName.trim() !== "" &&
      formInputs.mail.trim() !== "" &&
      formInputs.phoneNumber.trim() !== "" &&
      formInputs.date !== "" &&
      formInputs.time !== "" &&
      formInputs.isChecked;

    setFormValidation(isValid);
  }, [formInputs, setFormValidation]);

  return null;
};
