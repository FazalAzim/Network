import { StyleSheet } from 'react-native';
import { FONTS } from '@constants';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    flexDirection: 'column',
    gap: 8,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 48,
    height: 48,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  textContainer: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  textColumn: {
    flexDirection: 'column',
    gap: 2,
  },
  nameText: {
    color: '#262626',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: FONTS.URBAN_REGULAR,
  },
  titleText: {
    color: '#9098B1',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FONTS.URBAN_REGULAR,
  },
  dateText: {
    color: '#9098B1',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: FONTS.URBAN_REGULAR,
  },
});
