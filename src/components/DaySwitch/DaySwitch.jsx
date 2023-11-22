import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import css from './DaySwitch.module.css';

import DatePicker from 'react-datepicker';
import useAuth from '../../hooks/useAuth';
import 'react-datepicker/dist/react-datepicker.css';

import Icon from '../ComponIcon/Icon';
import DatePickerStyles from './DaySwitchCalendarStyle';

const CustomInput = forwardRef(
  ({ value, onClick, onChange, onKeyDown }, ref) => {
    const handleChange = e => {
      onChange(e.target.value);
    };

    return (
      <div>
        <input
          ref={ref}
          className={css.calendarInput}
          value={value}
          onClick={e => {
            onClick(e);
          }}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          readOnly
        />
      </div>
    );
  }
);

const DaySwitch = ({ handleDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  const { user } = useAuth();
  const userRegistrationDate = new Date(user.registrDate);

  useEffect(() => {
    handleDate(selectedDate);
  }, [selectedDate, handleDate]);

  const handleKeyDown = event => {
    if (event.key === 'Escape' && calendarOpen) {
      setCalendarOpen(false);
    }
  };

  const handlePrevDay = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setHours(0, 0, 0, 0);
    if (prevDate > userRegistrationDate) {
      prevDate.setDate(prevDate.getDate() - 1);
      setSelectedDate(prevDate);
    }
  };

  const handleNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    if (nextDate <= new Date()) {
      setSelectedDate(nextDate);
    }
  };

  const handleCalendarChange = date => {
    setSelectedDate(date);
  };

  const currentDayClassName = date => {
    if (date.toDateString() === new Date().toDateString()) {
      return `${css.currentDate}`;
    }
    return null;
  };

  const handleIconClick = () => {
    const inputElement = document.querySelector(`.${css.calendarInput}`);
    inputElement.click();
  };

  return (
    <div>
      <style>{DatePickerStyles}</style>
      <div className={css.daySwitch}>
        <div className={css.inputWrap} onClick={handleIconClick}>
          <DatePicker
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            onChange={handleCalendarChange}
            onKeyDown={handleKeyDown}
            minDate={userRegistrationDate}
            maxDate={new Date()}
            calendarClassName={css.customCalendar}
            dayClassName={currentDayClassName}
            customInput={<CustomInput />}
            onClickOutside={() => setCalendarOpen(false)}
          />
          <div>
            <Icon className={css.calendarIcon} iconId={'Calendar'} />
          </div>
        </div>
        <div className={css.chevronIconWrap}>
          <Icon
            className={`${css.chevronIcon} ${css.chevronLeftIcon}`}
            iconId={'Chevron'}
            onClick={handlePrevDay}
          />
          <Icon
            className={css.chevronIcon}
            iconId={'Chevron'}
            onClick={handleNextDay}
          />
        </div>
      </div>
    </div>
  );
};

DaySwitch.propTypes = {
  handleDate: PropTypes.func.isRequired,
};

export default DaySwitch;
