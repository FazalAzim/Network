import { COLORS, FONTS } from "@constants"
import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
      slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70
  },
 image: {
    width: 262, // Adjust as needed
    height: 408, // Adjust as needed
    resizeMode:'contain'
  },
  title: {
    fontSize: 28,
    fontFamily:FONTS.URBAN_BOLD,
    marginTop: 30,
    textAlign: 'center',

  },
  description: {
    marginTop: 15,
    fontSize: 14,
    fontFamily:FONTS.URBAN_REGULAR,
    color: COLORS.GRAY,
    textAlign: 'center',
    paddingHorizontal: 19,
  },
  activeDot:{
    backgroundColor: COLORS.LIGHT_GRAY, 
    width: 20, 
    height: 8, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  },
  skipButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  nextButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    // left: 10,
  },
})