import React, { useState, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarStyles from "./Calendar.module.css";
import calendarIcon from "../../images/calendar.png";

const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <input
        ref={ref}
        className={CalendarStyles.datePicker}
        value={value}
        onClick={(e) => {
          onClick();
          e.preventDefault();
        }}
        onChange={handleChange}
        style={{ backgroundColor: "black", color: "white" }}
      />
    </div>
  );
});

const DatePickerStyles = `
  .react-datepicker__header {
    background-color:  #e6533c;
    color: white;
  }
  .react-datepicker__year-option{
    background-color:  #e6533c;
    color: black;
    
    }
    .react-datepicker__year-read-view{
      display:none;
    }
`;

const ParentComponent = ({ user, registrationDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const userRegistrationDate = new Date(registrationDate);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setCalendarOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []); 

  const handlePrevDay = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    if (nextDate <= new Date()) {
      setSelectedDate(nextDate);
    }
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleCalendarChange = (date) => {
    setSelectedDate(date);
    toggleCalendar();
  };

  return (
    <div>
      <style>{DatePickerStyles}</style>
      <div className={CalendarStyles.container}>
          <img
          src={calendarIcon}
          alt="calendar icon"
          className={CalendarStyles.calendarIcon}
          onClick={toggleCalendar}
        />
        <DatePicker
          showYearDropdown
          dateFormat="dd/MM/yyyy"
          selected={selectedDate}
          onChange={handleCalendarChange}
          minDate={userRegistrationDate}

          maxDate={new Date()}
          onClick={toggleCalendar}
          calendarClassName={CalendarStyles.customCalendar}
          dayClassName={dayClassName}
          customInput={<CustomInput value={selectedDate} onChange={(value) => setSelectedDate(value)} />}
          open={calendarOpen}
        />

        <img
          src={calendarIcon}
          alt="calendar icon"
          className={CalendarStyles.calendarIcon}
          onClick={toggleCalendar}
          style={{ fill: "#ffffff", cursor: "pointer" }}
        />

        <div>
          <span
            className={`${CalendarStyles.arrowSpan} ${CalendarStyles.prevArrow}`}
            onClick={handlePrevDay}
          >
            {"<"}
          </span>
          <span
            className={`${CalendarStyles.arrowSpan} ${CalendarStyles.nextArrow}`}
            onClick={handleNextDay}
          >
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;