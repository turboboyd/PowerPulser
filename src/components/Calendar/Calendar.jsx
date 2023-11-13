import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DayDashboard from '../DayDashboard/DayDashboard';
import DayExercises from '../DayExercises/DayExercises';
import DayProducts from '../DayProducts/DayProducts';
import CalendarIconPNG from '../../images/calendar.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const CalendarIcon = styled.span`
  cursor: pointer;
  color: orange;
  font-size: 1.2em;
  margin-right: 10px;
  background: url(${CalendarIconPNG}) no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
`;

const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #efa082;
  border-radius: 4px;
  padding: 5px;
`;

const ParentComponent = ({ user }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const userRegistrationDate = new Date(user.registrationDate);

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
    console.log("Calendar is toggled");
    setCalendarOpen(!calendarOpen);
  };

  return (
    <div>
      <div onClick={toggleCalendar}>
        <span>{selectedDate.toLocaleDateString("en-GB")}</span>
      </div>
      {calendarOpen && (
        <div>
          <StyledDatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              toggleCalendar();
            }}
            minDate={userRegistrationDate}
            maxDate={new Date()} 
          />
        </div>
      )}
      <div>
        <CalendarIcon onClick={handlePrevDay}>{"<"}</CalendarIcon>
        <CalendarIcon onClick={handleNextDay}>{">"}</CalendarIcon>
      </div>
    </div>
  );
}
export default ParentComponent;