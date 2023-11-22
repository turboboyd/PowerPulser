import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import Icon from '../ComponIcon/Icon';
import CalendarStyles from './СalendarBirthDay.module.css';
import DatePickerStyles from './DatePickerStyles';

const CustomInput = forwardRef(
  ({ value, onClick, onChange, onKeyDown }, ref) => {
    const handleChange = e => {
      onChange(e.target.value);
    };

    return (
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <input
          ref={ref}
          className={CalendarStyles.datePicker}
          value={value}
          onClick={e => {
            onClick();
            onClick(e);
          }}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          readOnly
          style={{ backgroundColor: 'black', color: 'white' }}
        />
      </div>
    );
  }
);

const CalendarComponent = ({ onBirthdayChange }) => {
  const user = useSelector(selectUser);
  const initialDate = user?.profileSettings?.birthday
    ? new Date(user.profileSettings.birthday)
    : new Date();
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const dayClassName = date => {
    if (date.toDateString() === new Date().toDateString()) {
      return `${CalendarStyles.currentDate}`;
    }
    return null;
  };

  const handleCalendarChange = date => {
    const today = new Date();

    if (today.getFullYear() - date.getFullYear() < 18) {
      setValidationError('You must be at least 18 years old.');
    } else {
      setValidationError(null);
      setSelectedDate(date);
    }
    onBirthdayChange(date);
    toggleCalendar();
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setCalendarOpen(false);
    }
  };
  const handleIconClick = () => {
    const inputElement = document.querySelector(
      `.${CalendarStyles.datePicker}`
    );
    inputElement.click();
  };

  return (
    <div>
      <style>{DatePickerStyles}</style>
      <div className={CalendarStyles.container}>
        {validationError && (
          <div style={{ color: 'red' }}>{validationError}</div>
        )}
        <DatePicker
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          dateFormat="dd.MM.yyyy"
          selected={selectedDate}
          onChange={handleCalendarChange}
          onClickCapture={toggleCalendar}
          maxDate={new Date()}
          calendarClassName={CalendarStyles.customCalendar}
          dayClassName={dayClassName}
          customInput={<CustomInput onKeyDown={handleKeyDown} />}
        />
        <Icon
          className={CalendarStyles.iconCalendar}
          iconId="icon-calendar-white"
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
