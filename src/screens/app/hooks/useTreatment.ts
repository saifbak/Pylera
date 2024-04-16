import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

export interface ITreatmentData {
  selectDate: number;
  selectTime: string;
  selectBreakFastTime: string;
  selectLunchTime: string;
  selectDinnerTime: string;
  selectBedTimeSnackTime: string;
  doseAdministration: string;
}

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

  const [treatmentData, setTreatmentData] = useState<ITreatmentData>({
    selectDate: 1,
    selectTime: '',
    selectBreakFastTime: '',
    selectLunchTime: '',
    selectDinnerTime: '',
    selectBedTimeSnackTime: '',
    doseAdministration: '',
  });

  const fetchData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('treatmentData');
      if (jsonValue !== null) {
        setTreatmentData(JSON.parse(jsonValue));
        console.log('treatment jsonnnnnn', JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error fetching treatment data:', error);
    }
  };

  const saveTreatmentData = async (data: ITreatmentData) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('treatmentData', jsonValue);
      setTreatmentData(data);
    } catch (error) {
      console.error('Error saving treatment data:', error);
    }
  };

  // console.log('selectTime', selectTime);
  return {
    fetchData,
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
    treatmentData,
    setTreatmentData,
    saveTreatmentData,
  };
}
