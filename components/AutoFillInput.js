import React from "react";
import { AddressAutofill } from "@mapbox/search-js-react";

const AutoFillInput = () => {
  const [value, setValue] = React.useState("");
  const accessToken = process.env.mapbox_key;
  console.log("value", value);
  return (
    <AddressAutofill
      accessToken={accessToken}
      options={{
        language: "en",
        country: "US",
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Location"
        name="address"
        type="text"
        className="max-w-[100px] rounded-full focus:border-none focus:ring-0 flex-shrink flex border-none overflow-hidden"
      />
    </AddressAutofill>
  );
};

export default AutoFillInput;
