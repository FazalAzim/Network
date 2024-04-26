import { COLORS } from "@constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderColor: COLORS.PRIMARY_COLOR,
  },
});