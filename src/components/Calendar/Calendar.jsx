import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DayDashboard from "./DayDashboard";
import DayExercises from "./DayExercises";
import DayProducts from "./DayProducts";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CalendarIcon = styled.span`
  margin-right: 10px;
  cursor: pointer;
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
    setSelectedDate(nextDate);
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  return (
    <div>
      <Container>
        <CalendarIcon onClick={handlePrevDay}>{"<"}</CalendarIcon>
        <CalendarIcon onClick={handleNextDay}>{">"}</CalendarIcon>
        <div onClick={toggleCalendar}>
          <span>{selectedDate.toLocaleDateString("en-GB")}</span>
          {calendarOpen && (
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                toggleCalendar();
              }}
              minDate={userRegistrationDate}
              maxDate={new Date()}
            />
          )}
        </div>
      </Container>

      <DayDashboard selectedDate={selectedDate} />
      <DayExercises selectedDate={selectedDate} />
      <DayProducts selectedDate={selectedDate} />
    </div>
  );
};

export default ParentComponent;