import React, { useState } from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import moment from "moment";

// Define the Search component
export default  function Search({ data }) {
  // Initialize the state for location, date range, and number of guests
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState(null);
  const [guests, setGuests] = useState(0);

  // Handle changes to the location input
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  // Handle changes to the date range input
  function handleDateRangeChange(range) {
    setDateRange(range);
  }

  // Handle changes to the number of guests input
  function handleGuestsChange(event) {
    setGuests(event.target.value);
  }

  // Filter the events based on the search criteria
  const filteredEvents = data.filter((event) => {
    // Check if the event location contains the search input
    const isLocationMatch =
      location === "" ||
      event.location.toLowerCase().includes(location.toLowerCase());

    // Check if the event date is within the selected range
    const isDateMatch =
      !dateRange ||
      (moment(event.date).isSameOrAfter(dateRange.start) &&
        moment(event.date).isSameOrBefore(dateRange.end));

    // Check if the event has enough guests
    const isGuestsMatch = guests === 0 || event.guests >= guests;

    // Return true if the event matches all the search criteria
    return isLocationMatch && isDateMatch && isGuestsMatch;
  });

  return (
    <>
      <div>
        {/* Render the location input */}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />

        {/* Render the date range input */}
        <DateRangePicker
          value={dateRange}
          onSelect={handleDateRangeChange}
          numberOfCalendars={2}
          minimumDate={new Date()}
        />

        {/* Render the number of guests input */}
        <input
          type="number"
          placeholder="Number of Guests"
          value={guests}
          onChange={handleGuestsChange}
        />

        {/* Render the event list */}
        {filteredEvents.map((event) => (
          <div key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>Date: {event.date}</p>
            <p>Number of Guests: {event.guests}</p>
          </div>
        ))}
      </div>
    </>
  );
}
