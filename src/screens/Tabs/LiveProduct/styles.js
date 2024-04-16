import { COLORS, FONTS } from "@constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    borderBottomWidth: 2,
    borderColor: COLORS._D7D7,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    position: 'relative',
  },
  activeButton: {
    borderBottomWidth: 2,
    borderColor: COLORS.PRIMARY_COLOR,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: FONTS.URBAN_REGULAR,
  },
});