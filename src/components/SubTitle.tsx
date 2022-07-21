import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../theme/Styles';

const SubTitle = (props: any): JSX.Element => {
  const { title, numLine = 1 } = props;
  return (
    <View>
      <Text
        style={[Styles.PoppinsMedium, Styles.font18, Styles.textWhite, Styles.lineHeight30]}
        numberOfLines={numLine}
      >
        {title ?? ''}
      </Text>
    </View>
  );
};

export default SubTitle;
