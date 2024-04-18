import { height, width } from "@helpers";
import { COLORS } from "@constants";
import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mainContent: {
    position: 'absolute',
    top: height(50),
    transform: "rotate(90deg)",
  },
  centerButton: {
    flexDirection: 'row',
    justifyContent: "center",
    width: width(35),
    gap: 4,
    backgroundColor: COLORS.WHITE,
    paddingTop: 6,
    borderTopStartRadius: 8,
    borderTopRightRadius: 8,
  },
  sideView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width(60),
    backgroundColor: COLORS.WHITE,
    padding: 20,
  },
});