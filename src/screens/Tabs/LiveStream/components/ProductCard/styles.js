import { StyleSheet } from 'react-native';
import { height, width } from '@helpers';
import { COLORS, FONTS } from '@constants';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingVertical: height(2),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width(50),
    height: width(50),
    borderWidth: 1,
    backgroundColor: '#edf5f2',
    borderColor: '#b3e8dc',
    borderRadius: 0,
  },
  image: {
    width: width(49),
    height: width(49),
    resizeMode: 'cover',
    borderRadius: 0,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.URBAN_MEDIUM,
    color: COLORS._3C3C,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  price: {
    fontSize: 14,
    fontFamily: FONTS.URBAN_SEMIBOLD,
  },
  actualPrice: {
    color: COLORS.GRAY,
    fontSize: 14,
    fontFamily: FONTS.URBAN_SEMIBOLD,
    textDecorationLine: 'line-through',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  viewPriceButton: {
    borderColor: COLORS.BD_COLOR,
    width: width(22),
    height: 22,
    alignSelf: 'flex-start',
    marginBottom: 2,
  },
  viewPriceButtonText: {
    fontSize: 10,
  },
  vendorInfo: {
    color: COLORS._6262,
    fontSize: 10,
    fontFamily: FONTS.URBAN_REGULAR,
  },
});