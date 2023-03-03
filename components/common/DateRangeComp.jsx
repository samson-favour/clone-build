import React, { Component, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

import Moment from "moment";

const DateRangeComp = (props) => {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = useState(`${Moment().format("l")}`);

  console.log(startDate)

  const [showModal, setShowModal] = React.useState(false);

  const handleEvent = (event, picker) => {
    console.log(picker);
  };
  const handleCallback = (start, end, label) => {
    // console.log(start, end, label);
  };

  return (
    <div>
      <DateRangePicker
        initialSettings={{
          startDate: startDate,
          endDate: `${Moment().format("l")}`,
        }}
        onEvent={handleEvent}
        onCallback={handleCallback}
      >
        <input type="text " className="form-control outline-none" />
      </DateRangePicker>
    </div>
  );
};

export default DateRangeComp;
