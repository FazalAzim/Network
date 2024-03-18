import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '@constants';
import { height, width } from '@helpers';

export const styles = StyleSheet.create({
  mainWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIconWrapper: {
    backgroundColor: COLORS.DARK_GREEN,
    borderRadius: 100,
    width: 103,
    height: 103,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginVertical: height(2),
    fontFamily: FONTS.URBAN_BOLD,
    fontSize: 20,
  },
  descriptionText: {
    marginHorizontal: width(2),
    marginVertical: height(1),
    fontFamily: FONTS.URBAN_MEDIUM,
    fontSize: 15,
    textAlign: 'center',
  },
  additionalText: {
    marginHorizontal: width(2),
    marginVertical: height(1),
    fontFamily: FONTS.URBAN_REGULAR,
    fontSize: 13,
    textAlign: 'center',
  },
  primaryButton: {
    width: width(95),
    borderRadius: 6,
    marginTop: width(8),
  },
});
