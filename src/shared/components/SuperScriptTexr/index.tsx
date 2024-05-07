// SuperscriptComponent.tsx
import React from 'react';
import { Text } from 'react-native';
import { COLORS } from '../../utils/theme';
import { vs } from 'react-native-size-matters';
// import Superscript from './Superscript';

interface Props {
  sentence: string;
  superscriptChars?: string[];
  superscriptDigits?: string[];
}

interface PropsTwo {
  children: string;
  style?: any;
}

const Superscript: React.FC<PropsTwo> = ({ children, style }) => {
  const superscriptStyle = {
    ...style,
    fontSize: vs(10),
    position: 'absolute',
    bottom: style?.lineHeight ? style.lineHeight / 2 : undefined,
    left: 0,
    color: COLORS.primary
  };

  return (
    <Text style={superscriptStyle}>
      {children}
    </Text>
  );
};

const SuperscriptComponent: React.FC<Props> = ({ sentence, superscriptChars, superscriptDigits }) => {
  if (!sentence) {
    throw new Error('Sentence prop is required');
  }

  return (
    <Text>
      {sentence.split('').filter((char) => {
        // console.warn('char===>', char)
        if (superscriptChars?.includes(char) || superscriptDigits?.includes(char)) {
          return <Superscript>{char}</Superscript>;
        }
        return char;
      })}
    </Text>
  );
};

export default SuperscriptComponent;