import React, { useState } from "react";
import useInput from "./useInput";

const AutoCompleteInput = ({ location }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log(suggestions);

  const handleChange = async (event) => {
    setValue(event.target.value);

   
    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=${process.env.mapbox_key}`;
      const response = await fetch(endpoint);
      const results = await response.json();
      console.log(results);
      setSuggestions(results?.features);
    } catch (error) {
      console.log("Error fetching data, ", error);
    }
  };

  return (
    <>
      <input
        value={value}
        className="max-w-[100px] p-1 capitalize outline-none rounded-full  focus:border-none focus:ring-0 flex-shrink flex border-none overflow-hidden"
        placeholder="location"
        onChange={handleChange}
      />

      {suggestions?.length > 0 && (
        <div className="absolute border max-w-[500px] p-2 bg-white mt-2 rounded-md cursor-pointer">
          {suggestions.map((suggestion, index) => {
            return (
              <p
                className=""
                key={index}
                onClick={() => {
                  setValue(suggestion.place_name);
                  setSuggestions([]);
                }}
              >
                {suggestion.place_name}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AutoCompleteInput;
