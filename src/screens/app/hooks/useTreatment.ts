import {useState} from 'react';

export default function useTreatment() {
  const [selectDate, setSelectDate] = useState<number>(1);
  const [selectTime, setSelectTime] = useState<string>('');
  const [selectBreakFastTime, setSelectBreakFastTime] = useState<string>('');
  const [selectLunchTime, setSelectLunchTime] = useState<string>('');
  const [selectDinnerTime, setSelectDinnerTime] = useState<string>('');
  const [selectBedTimeSnackTime, setSelectBedTimeSnackTime] =
    useState<string>('');
  const [doseAdministration, setDoseAdministrationsetSelectTime] =
    useState<string>('');
  return {
    selectDate,
    setSelectDate,
    selectTime,
    setSelectTime,
    selectBreakFastTime,
    setSelectBreakFastTime,
    selectLunchTime,
    setSelectLunchTime,
    selectDinnerTime,
    setSelectDinnerTime,
    selectBedTimeSnackTime,
    setSelectBedTimeSnackTime,
  };
}
