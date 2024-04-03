import React, {useState} from 'react';

const useGetStarted = () => {
  const [select, setSelected] = useState<string>('en');

  return {
    select,
    setSelected,
  };
};

export default useGetStarted;
