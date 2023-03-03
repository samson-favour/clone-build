import React from "react";
import { AddressAutofill } from "@mapbox/search-js-react";

const AutoFillInput = () => {
  const accessToken = process.env.mapbox_key;
  return (
    <AddressAutofill
      accessToken={accessToken}
      options={{
        language: "en",
        country: "US",
      }}
    >
      <input
        placeholder="Location"
        name="address"
        type="text"
        className="max-w-[100px] rounded-full focus:border-none focus:ring-0 flex-shrink flex border-none overflow-hidden"
      />
    </AddressAutofill>
  );
};

export default AutoFillInput;
