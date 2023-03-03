import * as React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";
import { height } from "@mui/system";
const styles = {
  input1: {
    height: 50,
  },
  input2: {
    height: 200,
    fontSize: "3em",
  },
};

export default function ResponsiveDateRangePicker(props) {
  const [value, setValue] = React.useState([null, null]);

  console.log(value);

  return (
    <Stack>
      <div className="daterange">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Check In", end: "Check out" }}
        >
          <MobileDateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} style={{ width: "120px" }} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} style={{ width: "120px" }} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
      <div className="daterangedesktop">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Check In", end: "Check out" }}
        >
          <DesktopDateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} style={{ width: "120px" }} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} style={{ width: "120px" }} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
    </Stack>
  );
}
