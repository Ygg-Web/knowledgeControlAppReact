import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRange, DesktopDateRangePicker } from "@mui/x-date-pickers-pro";
import { Box, SxProps } from "@mui/material";
import "dayjs/locale/ru";
import { Theme } from "@emotion/react";

interface Props {
  sx?: SxProps<Theme>;
}

export default function DykDatePicker({ sx }: Props) {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  const onChangeDate = (e: DateRange<Dayjs>) => {
    console.log("test", e);
    setValue(e);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DesktopDateRangePicker
          value={value}
          onChange={onChangeDate}
          format="DD.MM.YYYY"
          slotProps={{ textField: { size: "small" } }}
          sx={sx}
        />
      </LocalizationProvider>
    </Box>
  );
}
