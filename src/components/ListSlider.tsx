import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Styles from '../theme/Styles';

const ListSlider = (props: any): JSX.Element => {
  const { data, disabled = false, style = null, activeItem = null, handleRefresh } = props;
  const [selected, setSelected] = useState<number>(!disabled ? activeItem : -1);

  useEffect(() => {
    for (let [index, element] of data.entries()) {
      if (index === selected) {
        element?.getMoviesforTab();
        break;
      }
    }
  }, [handleRefresh]);

  const ListItem = ({ ...list }: any) => {
    const { index, name, getMoviesforTab } = list;
    return (
      <TouchableOpacity
        style={[
          Styles.marginH8,
          Styles.bgGray,
          Styles.paddingH20,
          Styles.paddingV8,
          Styles.alignJustifyCenter,
          Styles.borderRadius20,
          index === selected && Styles.bgGreen,
          !!style && [...style],
        ]}
        activeOpacity={0.8}
        onPress={() => {
          setSelected(index);
          getMoviesforTab();
        }}
        disabled={disabled}
      >
        <Text
          style={[
            Styles.PoppinsMedium,
            Styles.font12,
            Styles.textWhite,
            Styles.lineHeight18,
            Styles.textWhite,
            index === selected && Styles.textBlack,
            Styles.textCapitalize,
          ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[Styles.paddingV16]}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={[Styles.flexRow, Styles.marginH10]}>
        {data.map((li: any, index: any) => (
          <ListItem {...li} index={index} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ListSlider;
