import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '@constants';
import { height, width } from '@helpers';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
    paddingHorizontal: 4,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    height: 76,
    borderWidth: 1,
    backgroundColor: COLORS.WHITE,
    borderColor: '#b3e8dc',
    borderRadius: 6,
  },
  image: {
    width: 63,
    height: 63,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  title: {
    fontSize: 14,
    fontFamily:FONTS.URBAN_MEDIUM,
    color: '#3C3C3C',
    width: 240,
  },
  price: {
    // color: 'black',
    fontSize: 14,
    // fontWeight: '600',
    fontFamily: FONTS.URBAN_BOLD,
  },
  oldPrice: {
    color: '#A3A3A3',
    fontSize: 14,
    fontFamily: FONTS.URBAN_SEMIBOLD,
    textDecorationLine: 'line-through',
  },
  discount: {
    color: '#00C262',
    fontSize: 14,
    fontFamily: FONTS.URBAN_BOLD,
  },
  shipping: {
    color: '#A3A3A3',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: FONTS.URBAN_MEDIUM,
  },
  countContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  socialButton: {
    borderColor: COLORS.BD_COLOR,
    width: width(10),
    height: height(4),
    alignSelf: 'flex-start',
    marginBottom: 2
  }
});
