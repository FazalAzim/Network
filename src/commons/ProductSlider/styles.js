import { height, width } from '@helpers';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 227.25,
    position: 'relative',
    backgroundColor: "#fff"
  },
  slide: {
    // flex: 1,
    marginTop: 5,
    // paddingBottom: 38,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 121,
    height: 166,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  dotStyle: {
    width: 8,
    height: 8,
    // borderRadius: 5,
    backgroundColor: '#EBF0FF',
    margin: 3,
  },
  activeDotStyle: {
    width: 8,
    height: 8,
    // borderRadius: 5,
    backgroundColor: '#9344FC',
    // margin: 3,
  },
  button: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    flexDirection: 'column',
    gap: 8
  },
  buttonIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    resizeMode: 'cover',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
