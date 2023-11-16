import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarStyles from "./СalendarBirthDay.module.css"; 

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
    color: white;    
    }
`;

const CalendarComponent = ({ minDate }) => {
    const [selectedDate, setSelectedDate] = useState(new Date("2000-01-01"));
    const [calendarOpen, setCalendarOpen] = useState(false);

    const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
};

    const dayClassName = (date) => {
    if (date.toDateString() === new Date().toDateString()) {
        return `${CalendarStyles.currentDate}`;
    }
    return null;
};

    const handleCalendarChange = (date) => {
    const currentDate = new Date();
    const minAllowedDate = new Date("1900-01-01");

    if (date > currentDate) {
        console.warn("Selected date for future period");
        return;
    }

    if (date < minAllowedDate) {
        console.warn("Selected date before 1900");
        setSelectedDate(minAllowedDate);
        toggleCalendar();
        return;
    }

    setSelectedDate(date);
    toggleCalendar();
};

    return (
        <div>
            <style>{DatePickerStyles}</style>
        <div className={CalendarStyles.container}>
        <DatePicker
            showYearDropdown
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            onChange={handleCalendarChange}
            minDate={minDate}
            maxDate={new Date()}
            calendarClassName={CalendarStyles.customCalendar}
            dayClassName={dayClassName}
            customInput={<CustomInput />}
        />
        </div>
    </div>);
};

export default CalendarComponent;