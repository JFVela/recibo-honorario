import * as React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Lima");

export default function CurrentDateTimeLima() {
  const [currentDateTime, setCurrentDateTime] = React.useState(
    dayjs().tz("America/Lima")
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(dayjs().tz("America/Lima"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack spacing={2}>
      <Typography style={{ fontFamily: "Arimo" }} variant="h6">
        <strong>Fecha: {currentDateTime.format("DD/MM HH:mm")}</strong>
      </Typography>
    </Stack>
  );
}
