import AsyncStorage from '@react-native-async-storage/async-storage';
import {ITreatmentData} from './useTreatment';
import {useEffect, useState} from 'react';
interface MedicineDose {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  bedtimeSnack: boolean;
}

interface MedicineTakingData {
  day: number;
  data: MedicineDose;
}

const useDose = () => {
  const [treatmentProgress, setTreatmentProgress] = useState(0);
  const [breakfastTime, setBreakfastTime] = useState(1);
  const [bedTimeSnack, setBedTimeSnack] = useState(0);
  const [dinnerTime, setDinnerTime] = useState(0);
  const [lunchTime, setLunchTime] = useState(0);
  const [treatmentData, setTreatmentData] = useState<ITreatmentData>({
    selectDate: 1,
    selectTime: '',
    selectBreakFastTime: '',
    selectLunchTime: '',
    selectDinnerTime: '',
    selectBedTimeSnackTime: '',
    doseAdministration: '',
  });
  const [savedTime, setSavedTime] = useState('');
  const [medicineTakingData, setMedicineTakingData] = useState<
    MedicineTakingData[]
  >(() => {
    const initialData: MedicineTakingData[] = [];
    for (let i = 0; i < 10; i++) {
      initialData.push({
        day: i + 1,
        data: {
          breakfast: false,
          lunch: false,
          dinner: false,
          bedtimeSnack: false,
        },
      });
    }
    return initialData;
  });

  const handleDoseCompletion = async (
    day: number,
    dose: keyof MedicineDose,
  ) => {
    const updatedData = medicineTakingData.map(data => {
      if (data.day === day) {
        return {
          ...data,
          data: {
            ...data.data,
            [dose]: true,
          },
        };
      } else {
        return data;
      }
    });

    setMedicineTakingData(updatedData);

    try {
      const jsonValue = JSON.stringify(updatedData);
      await AsyncStorage.setItem('medicineTakingData', jsonValue);
    } catch (e) {
      console.log('Error saving medicine taking data to AsyncStorage:', e);
    }
  };

  const fetchTrackerData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('medicineTakingData');
      if (jsonValue) {
        setMedicineTakingData(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log('Error fetching medicine taking data from AsyncStorage:', e);
    }
  };

  const getProgress = () => {
    const completedDoses = medicineTakingData.reduce((acc, data) => {
      const completedDosesForDay = Object.values(data.data).filter(
        d => d,
      ).length;
      return acc + completedDosesForDay;
    }, 0);
    return completedDoses / (10 * 4);
  };

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

  const fetchSavedTimeData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('savedTime');
      if (jsonValue !== null) {
        setSavedTime(JSON.parse(jsonValue));
        console.log('treatment jsonnnnnn', JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error fetching Saved Time data:', error);
    }
  };

  const saveSavedTimeData = async (time: string) => {
    try {
      const jsonValue = JSON.stringify(time);
      await AsyncStorage.setItem('savedTime', jsonValue);
      setSavedTime(time);
    } catch (error) {
      console.error('Error saving treatment data:', error);
    }
  };
  return {
    treatmentProgress,
    setTreatmentProgress,
    breakfastTime,
    setBreakfastTime,
    bedTimeSnack,
    setBedTimeSnack,
    dinnerTime,
    setDinnerTime,
    lunchTime,
    setLunchTime,
    savedTime,
    setSavedTime,
    fetchData,
    treatmentData,
    handleDoseCompletion,
    fetchTrackerData,
    getProgress,
    fetchSavedTimeData,
    saveSavedTimeData,
    medicineTakingData,
  };
};

export default useDose;
