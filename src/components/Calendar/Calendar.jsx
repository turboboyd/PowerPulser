import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarStyles from "./Calendar.module.css";
import DayDashboard from "../DayDashboard/DayDashboard";
import DayExercises from "../DayExercises/DayExercises";
import DayProducts from "../DayProducts/DayProducts";
import calendarIcon from "../../images/calendar.png";

const ParentComponent = ({ user, registrationDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const userRegistrationDate = new Date(registrationDate);

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
          className={CalendarStyles.datePicker}

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

      <DayDashboard selectedDate={selectedDate} />
      <DayExercises selectedDate={selectedDate} />
      <DayProducts selectedDate={selectedDate} />
    </div>
  );
};

export default ParentComponent;
