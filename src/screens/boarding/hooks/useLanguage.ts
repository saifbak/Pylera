import {useState} from 'react';
import {useTranslation} from 'react-i18next';

const useChangeLanguage = () => {
  const {t, i18n} = useTranslation();
  const [checkValue, setCheckValue] = useState<string>(i18n.language);
  // console.log(i18n.language)

  const changeLanguageSelect = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return {
    checkValue,
    setCheckValue,
    changeLanguageSelect,
    t,
    i18n,
  };
};

export default useChangeLanguage;
