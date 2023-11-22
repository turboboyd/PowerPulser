const DatePickerStyles = `
 .react-datepicker__header {
    background-color:  #EF8964;
    color: #EFEDE8;
  }
  
  .react-datepicker__year-option {
    background-color:  #e6533c;
    color: white;
  }

  .react-datepicker__year-dropdown {
    margin-top: 0.25rem;
    max-height: 20rem;
  }

   .react-datepicker__month-container{
    border-radius: 8px;
    background: #EF8964;
  }
  
   
  .react-datepicker__day-name{
     color:rgba(239, 237, 232, 0.50);
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
