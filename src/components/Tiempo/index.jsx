import * as React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Lima');

export default function CurrentDateTimeLima() {
    const [currentDateTime, setCurrentDateTime] = React.useState(dayjs().tz('America/Lima'));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(dayjs().tz('America/Lima'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Stack spacing={2}>
            <Typography variant="h6">
                {currentDateTime.format('YYYY-MM-DD hh:mm:ss A')}
            </Typography>
        </Stack>
    );
}