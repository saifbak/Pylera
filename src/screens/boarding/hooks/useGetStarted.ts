import React, {useState} from 'react';

const useGetStarted = () => {
  const [select, setSelected] = useState<string>('english');

  return {
    select,
    setSelected,
  };
};

export default useGetStarted;
