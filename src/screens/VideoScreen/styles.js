import { FONTS } from "@constants";
import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    borderBottomWidth: 2,
    borderColor: '#C0C0C0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
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
    borderColor: '#303030',
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
    fontFamily: FONTS.URBAN_REGULAR,
  },
});