import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../theme/Styles';
import LocalImages from '../../assets/images';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = (props: any): JSX.Element => {
  const { back } = LocalImages;
  const insets = useSafeAreaInsets();
  const {
    rightIcon = null,
    rightText = null,
    leftIcon = null,
    leftText = null,
    rightAction,
    leftAction,
    btnLeft = !!leftIcon || !!leftText || false,
    btnRight = !!rightIcon || !!rightText || false,
  }: {
    btnLeft?: Boolean;
    btnRight?: Boolean;
    rightIcon?: JSX.Element | null;
    rightText?: string | null;
    leftIcon?: JSX.Element | null;
    leftText?: string | null;
    rightAction?: () => void;
    leftAction?: () => void;
  } = props;

  const Button = (props: any) => {
    const { style, icon, imgStyles, text = null, btnReverse = false, handlePress } = props;
    return (
      <TouchableOpacity
        style={[
          Styles.paddingV10,
          Styles.paddingH16,
          Styles.borderRadius10,
          Styles.flexRow,
          Styles.alignCenter,
          ...style,
          btnReverse && Styles.flexRowReverse,
        ]}
        onPress={handlePress}
      >
        <Image source={icon} style={[Styles.btnIcon, !!imgStyles && [...imgStyles]]} />
        {text && (
          <Text
            style={[
              Styles.PoppinsMedium,
              Styles.font14,
              Styles.textCenter,
              btnReverse ? Styles.textBlack : Styles.textWhite,
              Styles.textCapitalize,
              btnReverse ? Styles.marginR12 : Styles.marginL12,
              // {
              //   top: 2,
              // },
            ]}
          >
            {text}
          </Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaProvider style={[{ paddingBottom: insets.bottom }]}>
      <View
        style={[
          btnLeft && btnRight ? Styles.flexRow : null,
          Styles.justifySpaceBetween,
          Styles.marginH24,
          Styles.alignFlexEnd,
          Styles.posa,
          Styles.footerPosition,
        ]}
      >
        {btnLeft && (
          <Button
            style={[Styles.bgGray]}
            icon={leftIcon || back}
            imgStyles={[Styles.footerLeftIcon]}
            text={leftText || 'Back'}
            handlePress={leftAction}
          />
        )}
        {btnRight && (
          <Button
            style={[Styles.bgGreen]}
            icon={rightIcon}
            imgStyles={[Styles.footerRightIcon]}
            text={rightText}
            btnReverse
            handlePress={rightAction}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
};

export default Header;
