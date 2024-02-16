export const BookingFormError = ({errorValidation}: {errorValidation: boolean}) => {

    return errorValidation && <p>Du måste fylla i alla fält för att kunna boka</p>
};