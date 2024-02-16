import { useEffect, useState } from "react";

interface IFormInputs {
    firstName: string;
    lastName: string;
    mail: string;
    phoneNumber: string;
    date: string;
    time: string;
    isChecked: boolean;
}

export const BookingValidation = ({formInputs}: {formInputs: IFormInputs}) => {
    const [formValidation, setFormValidation] = useState(false);

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
    }, [formInputs]);

    return formValidation;
};