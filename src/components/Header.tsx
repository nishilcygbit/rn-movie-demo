import React from "react";
import { View, Text } from "react-native";
import Styles from "../theme/Styles";


const Header = (props: any): JSX.Element => {
  const { title } = props;
  return (
    <View style={[Styles.paddingT50, Styles.paddingB10]}>
      <Text style={[Styles.PoppinsBold, Styles.font36, Styles.textWhite, Styles.lineHeight54]}>
        {title}
      </Text>
    </View>
  );
}

export default Header;