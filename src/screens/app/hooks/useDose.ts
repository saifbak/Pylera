import AsyncStorage from '@react-native-async-storage/async-storage';
import {ITreatmentData} from './useTreatment';
import {useState} from 'react';

const useDose = () => {
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
        // console.log('treatment jsonnnnnn', JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error fetching treatment data:', error);
    }
  };
  return {
    fetchData,
    treatmentData,
  };
};

export default useDose;
