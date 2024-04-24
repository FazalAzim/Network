import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '@constants';
import { width } from '@helpers';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
  },
  header: {
    width: width(95),
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#1E1F3D',
    fontSize: 20,
    fontFamily: FONTS.URBAN_BOLD,
  },
  productList: {
    width: width(95),
    flex: 1,
  },
  totalContainer: {
    width: width(95),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  totalContent: {
    width: width(90),
    paddingVertical: 10,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    color: '#989898',
    fontSize: 13,
    fontFamily: FONTS.URBAN_REGULAR,
  },
  totalTaxes: {
    color: '#989898',
    fontSize: 10,
    fontFamily: FONTS.URBAN_REGULAR,
  },
  totalPrice: {
    color: '#1E1F3D',
    fontSize: 20,
    fontFamily: FONTS.URBAN_BOLD,
  },
});
