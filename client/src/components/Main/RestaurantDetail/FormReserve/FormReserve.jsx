import React from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

const FormReserve = () => {
  return <>
  <form>
      <input type="email" placeholder="introduce Email"></input>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="With Time Clock"
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
        <DateTimePicker
          label="Without view renderers"
          viewRenderers={{
            hours: null,
            minutes: null,
            seconds: null,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
      <input type="number" placeholder="introduce Email" max="8"></input>
      <button type="submit">Enviar</button>
  </form>
  
  
  </>;
};

export default FormReserve;
