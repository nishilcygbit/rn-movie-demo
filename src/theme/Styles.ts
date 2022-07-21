import { StyleSheet } from 'react-native';
import Colors from './Colors';
import fontMaker from './fontMaker';
// import { Platform } from 'react-native';
// import { ifIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex0: {
    flex: 0,
  },
  flex2: {
    flex: 2,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  flexWrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignFlexStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignFlexEnd: {
    alignItems: 'flex-end',
  },
  posr: {
    position: 'relative',
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  posa: {
    position: 'absolute',
  },
  width100: {
    width: '100%',
  },
  height100: {
    height: '100%',
  },
  // Montserrat
  PoppinsBold: {
    ...fontMaker({ family: 'Poppins', weight: 'Bold' }),
  },
  PoppinsMedium: {
    ...fontMaker({ family: 'Poppins', weight: 'Medium' }),
  },
  PoppinsRegular: {
    ...fontMaker({ family: 'Poppins', weight: 'Regular' }),
  },
  // PoppinsMedium500: {
  //   ...fontMaker({ family: 'Poppins', weight: 'Medium500' }),
  // },
  fontWeight500: {
    fontWeight: '500'
  },
  font8: {
    fontSize: 8,
  },
  font10: {
    fontSize: 10,
  },
  font11: {
    fontSize: 11,
  },
  font12: {
    fontSize: 12,
  },
  font13: {
    fontSize: 13,
  },
  font14: {
    fontSize: 14,
  },
  font15: {
    fontSize: 15,
  },
  font16: {
    fontSize: 16,
  },
  font17: {
    fontSize: 17,
  },
  font18: {
    fontSize: 18,
  },
  font20: {
    fontSize: 20,
  },
  font22: {
    fontSize: 22,
  },
  font24: {
    fontSize: 24,
  },
  font26: {
    fontSize: 26,
  },
  font28: {
    fontSize: 28,
  },
  font30: {
    fontSize: 30,
  },
  font32: {
    fontSize: 32,
  },
  font34: {
    fontSize: 34,
  },
  font36: {
    fontSize: 36,
  },
  font39: {
    fontSize: 39,
  },
  font47: {
    fontSize: 47,
  },
  font48: {
    fontSize: 48,
  },
  marginT0: {
    marginTop: 0,
  },
  marginT4: {
    marginTop: 4,
  },
  marginL5: {
    marginLeft: 5,
  },
  marginL12: {
    marginLeft: 12,
  },
  marginL30: {
    marginLeft: 24,
  },
  marginR10: {
    marginRight: 10,
  },
  marginR12: {
    marginRight: 12,
  },
  marginR14: {
    marginRight: 14,
  },
  marginR100: {
    marginRight: 100,
  },
  marginB12: {
    marginBottom: 12,
  },
  marginB4: {
    marginBottom: 4,
  },
  marginB10: {
    marginBottom: 10,
  },
  marginB16: {
    marginBottom: 16,
  },
  marginB18: {
    marginBottom: 18,
  },
  marginB24: {
    marginBottom: 24,
  },
  marginB32: {
    marginBottom: 32,
  },
  marginB126: {
    marginBottom: 126,
  },

  marginT24: {
    marginTop: 24,
  },
  marginT32: {
    marginTop: 32,
  },
  marginT36: {
    marginTop: 36,
  },
  marginT12: {
    marginTop: 12,
  },
  marginT16: {
    marginTop: 16,
  },

  marginV10: {
    marginVertical: 10,
  },
  marginV16: {
    marginVertical: 16,
  },
  marginV24: {
    marginVertical: 24,
  },
  marginV32: {
    marginVertical: 32,
  },
  marginV36: {
    marginVertical: 36,
  },
  marginH0: {
    marginHorizontal: 0,
  },
  marginH6: {
    marginHorizontal: 6,
  },
  marginH10: {
    marginHorizontal: 10,
  },

  marginH8: {
    marginHorizontal: 8,
  },
  marginH15: {
    marginHorizontal: 15,
  },
  marginH16: {
    marginHorizontal: 16,
  },
  marginH24: {
    marginHorizontal: 24,
  },
  marginH48: {
    marginHorizontal: 48,
  },

  padding0: {
    padding: 0,
  },
  paddingH0: {
    paddingHorizontal: 0,
  },
  paddingH12: {
    paddingHorizontal: 12,
  },
  paddingH14: {
    paddingHorizontal: 14,
  },
  paddingH16: {
    paddingHorizontal: 16,
  },
  paddingH18: {
    paddingHorizontal: 18,
  },
  paddingH20: {
    paddingHorizontal: 20,
  },
  paddingH24: {
    paddingHorizontal: 24,
  },
  paddingH25: {
    paddingHorizontal: 25,
  },
  paddingH35: {
    paddingHorizontal: 35,
  },
  paddingH36: {
    paddingHorizontal: 36,
  },
  paddingH30: {
    paddingHorizontal: 30,
  },
  paddingH50: {
    paddingHorizontal: 50,
  },
  paddingB25: {
    paddingBottom: 25,
  },
  paddingB36: {
    paddingBottom: 36,
  },
  paddingB80: {
    paddingBottom: 80,
  },

  padding24: {
    padding: 24,
  },
  paddingT0: {
    paddingTop: 0,
  },
  paddingT6: {
    paddingTop: 6,
  },
  paddingT17: {
    paddingTop: 17,
  },
  paddingT14: {
    paddingTop: 14,
  },
  paddingT16: {
    paddingTop: 16,
  },
  paddingT50: {
    paddingTop: 50,
  },
  paddingB10: {
    paddingBottom: 10,
  },
  paddingB12: {
    paddingBottom: 12,
  },
  paddingB14: {
    paddingBottom: 14,
  },
  paddingB24: {
    paddingBottom: 24,
  },
  paddingV4: {
    paddingVertical: 4,
  },
  paddingV8: {
    paddingVertical: 8,
  },
  paddingV10: {
    paddingVertical: 10,
  },
  paddingV12: {
    paddingVertical: 12,
  },
  paddingV14: {
    paddingVertical: 14,
  },
  paddingV16: {
    paddingVertical: 16,
  },
  paddingV20: {
    paddingVertical: 20,
  },
  paddingV24: {
    paddingVertical: 24,
  },
  paddingV32: {
    paddingVertical: 32,
  },
  paddingV36: {
    paddingVertical: 36,
  },

  paddingB16: {
    paddingBottom: 16,
  },
  paddingB0: {
    paddingBottom: 0,
  },
  paddingT24: {
    paddingTop: 24,
  },
  bottom15: {
    bottom: 15,
  },
  bottom5: {
    bottom: 5,
  },
  paddingT12: {
    paddingTop: 12,
  },
  paddingT15: {
    paddingTop: 15,
  },
  paddingL24: {
    paddingLeft: 24,
  },
  paddingL12: {
    paddingLeft: 12,
  },
  paddingL8: {
    paddingLeft: 8,
  },
  paddingR24: {
    paddingRight: 24,
  },
  paddingR30: {
    paddingRight: 30,
  },
  lineHeight30: {
    lineHeight: 30,
  },
  lineHeight54: {
    lineHeight: 54,
  },
  lineHeight24: {
    lineHeight: 24,
  },
  lineHeight22: {
    lineHeight: 22,
  },
  lineHeight18: {
    lineHeight: 18,
  },
  lineHeight14: {
    lineHeight: 14,
  },
  hrLine10: {
    height: 10,
    backgroundColor: '#F4F6F7',
  },
  noPadLeft: {
    paddingLeft: 0,
  },
  textWhite: {
    color: Colors.white,
  },
  textBlack: {
    color: Colors.black,
  },
  textGreen: {
    color: Colors.green,
  },
  bgBlack: {
    backgroundColor: Colors.black,
  },
  bgGray: {
    backgroundColor: Colors.gray,
  },
  bgGreen: {
    backgroundColor: Colors.green,
  },
  borderRadius20: {
    borderRadius: 40
  },

  borderRadius10: {
    borderRadius: 15
  },
  borderText: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 5,
    width: 90
  },
  textCapitalize: {
    textTransform: 'capitalize'
  },
  borderGray: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 4,
    width: 90
  },
  cardImg: {
    height: 120,
    width: 95
  },
  cardIcon: {
    height: 21,
    width: 22,
    resizeMode: 'contain'
  },
  readMore: {
    bottom: 0,
    right: 20
  },
  footerLeftIcon: {
    height: 12,
    width: 16
  },
  footerRightIcon: {
    height: 18,
    width: 13
  },
  bannerImg: {
    height: 220,
    width: '100%',
    resizeMode: 'cover'
  },
  btnIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  footerPosition: {
    bottom: 35,
    left: 0,
    right: 0
  }
});
