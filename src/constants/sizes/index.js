import { Dimensions, Platform, StatusBar } from 'react-native'

const handleSize = (num) => {
  if (num <= 0) return 0;
  if (num > 100) return 1;
  return num / 100;
};
const { width, height } = Dimensions.get('window')
export const totalCal = (num) => Math.sqrt((height * height) + (width * width)) * handleSize(num);


const statusBarHeight = Platform.select({
  ios: 22,
  android: StatusBar.currentHeight
})
const headerHeight = Platform.select({
  ios: height * 0.08,
  android: height * 0.1
})
const tabBarHeight = Platform.select({
  ios: height * 0.08,
  android: height * 0.08
})

// Used via Metrics.baseMargin
const sizes = {
  marginBottom: height * 0.025,
  marginTop: height * 0.025,
  marginHorizontal: width * 0.05,
  marginVertical: height * 0.025,
  section: 25,
  TinyMargin: totalCal(0.5),
  smallMargin: totalCal(1),
  baseMargin: totalCal(2),
  doubleBaseMargin: totalCal(5),
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 10,
  buttonSmallRadius: 5,
  buttonMiniRadius: 7,
  modalRadius: 15,
  cardRadius: 15,
  ModalRadius: 25,
  inputRadius: 8,
  smallImageRadius: 10,
  statusBarHeight: statusBarHeight,
  headerHeight: headerHeight,
  tabBarHeight: tabBarHeight,
  cameraBgHeight: 80,
  cameraBgWeidth: 80,
  CamBgRadius: 40,
  icons: {
    tiny: totalCal(1.5),
    small: totalCal(2),
    medium: totalCal(2.5),
    large: totalCal(3),
    xl: totalCal(4),
    xxl: totalCal(5),
    xxxl: totalCal(6)
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export { sizes }