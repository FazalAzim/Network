import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: 227.25,
    position: 'relative',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    flex: 1,
    resizeMode: 'cover',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EBF0FF',
    margin: 3,
  },
  activeDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9344FC',
    margin: 3,
  },
  button: {
    position: 'absolute',
    bottom: 15, right: 15,
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
