import { FONTS } from "@constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
      paddingBottom: 14,
      marginHorizontal: 18,
      borderBottomWidth: 1,
      borderColor: '#C0C0C0'
    },
    commentWrapper: {
      flex: 1,
      marginTop: 12,
      flexDirection: 'column'
    },
    subscriptionRow: {
      height: 50,
      backgroundColor: '#F8F8F8',
      marginBottom: 10
    },
    subscriptionText: {
      fontSize: 13,
      fontWeight: '500',
      lineHeight: 18,
      fontFamily: FONTS.URBAN_REGULAR
    },
    subscribeButtonWrapper: {
      paddingTop: 8
    }
  });