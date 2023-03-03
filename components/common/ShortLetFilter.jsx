import React, { useState } from "react";
import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import DateRangeComp from "./DateRangeComp";
import DateRange from "./DateRangeComp";
import DateRangePickerComp from "./DateRangePickerComp";
import DateRangePicker from "./DateRangePickerComp";
import ResponsiveDateRangePicker from "./ResponsiveDateRangePicker";
import TailwindDatePicker from "./TailwindDatePicker";

const ShortLetFilter = ({ className = "" }) => {
  // submit handler
  const submitHandler = () => {
    Router.push("/listing-grid-v1");
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <div className="bg-red"></div>
      <ul className="h1ads_1st_list mb0">
        <li className="list-inline-item">
          <div className="form-group placement">
            <input
              type="text"
              className="form-control "
              placeholder="Location"
              onChange={(e) => dispatch(addLocation(e.target.value))}
            />
            <label className="icon-label">
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        <li className="list-inline-item">
          <TailwindDatePicker />
        </li>

        {/* <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
          </div>
        </li> */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default ShortLetFilter;
