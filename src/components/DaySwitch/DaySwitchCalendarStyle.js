const DatePickerStyles = `
  .react-datepicker__month-container{
    border-radius: 8px;
    background: #EF8964;
  }
  .react-datepicker__header {
    background-color:  #EF8964;
    color: #EFEDE8;
  }
    .react-datepicker__year-read-view{
      display:none;
    }
  .react-datepicker__day-name{
     color:rgba(239, 237, 232, 0.50);
}
.react-datepicker__day--disabled{
  color:rgba(239, 237, 232, 0.50) !important;
}

.react-datepicker__day--disabled:hover{
  background-color:inherit !important;
}
   .react-datepicker__current-month {
     color:#EFEDE8;
}
.react-datepicker__day--selected{
  border-radius: 50px;
  background-color: black;
}
.react-datepicker__day {
  color:#EFEDE8;
}
.react-datepicker__day:hover{
 background-color:black;
border-radius: 50px;
transition: all 150ms linear;
}
`;

export default DatePickerStyles;