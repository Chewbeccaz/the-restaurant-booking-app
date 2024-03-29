import { BookingDateTimeGuests } from "./BookingDateTimeGuests";
import { getCurrentDate } from "./CurrentDate";
import "../styles/searchTable.css";

interface ISearchTable {
  onSearch: () => void;
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  persons: number;
  setPersons: (persons: number) => void;
}

export const SearchTable = ({
  onSearch,
  date,
  setDate,
  time,
  setTime,
  persons,
  setPersons,
}: ISearchTable) => {
  const handleSearch = () => {
    onSearch();
  };

  const handleForm = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLSelectElement
    ) {
      const { name, value } = e.target;

      switch (name) {
        case "chooseDate":
          setDate(value);
          break;
        case "chooseTime":
          setTime(value);
          break;
        case "personQuantity":
          setPersons(Number(value));
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleForm}>
        <div className="searchParentDiv">
          <div className="searchInputs">
            <BookingDateTimeGuests
              label="Antal gäster:"
              id="personQuantity"
              name="personQuantity"
              value={persons.toString()}
              options={Array.from({ length: 90 }, (_, i) => i + 1).map((i) => ({
                value: i.toString(),
                text: i.toString(),
              }))}
              onChange={handleForm}
            />

            <BookingDateTimeGuests
              label="Välj datum:"
              id="chooseDate"
              name="chooseDate"
              type="date"
              min={getCurrentDate()}
              value={date}
              onChange={handleForm}
            />

            <BookingDateTimeGuests
              label="Välj tid:"
              id="chooseTime"
              name="chooseTime"
              value={time}
              options={[
                { value: "", text: "Tider" },
                { value: "18:00", text: "18:00" },
                { value: "21:00", text: "21:00" },
              ]}
              onChange={handleForm}
            />
          </div>
          <div id="searchBtn">
            <button onClick={handleSearch}>Sök lediga bord</button>
          </div>
        </div>
      </form>
    </>
  );
};
