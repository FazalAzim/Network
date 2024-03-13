import { COLORS, FONTS } from "@constants";
import { height, width } from "@helpers";
import { StyleSheet } from "react-native";

export const styles = ({ } = {}) => StyleSheet.create({
  avatarBorder: {
    borderWidth: 1,
    borderRadius: 100,
    width: 134,
    height: 134,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.RED_COLOR,
  },
  userAvatar: {
    width: 122,
    height: 122,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  userStatusButton: {
    width: width(20),
    height: height(3),
    backgroundColor: COLORS.RED_COLOR,
    marginTop: -16,
  },
  count: { color: COLORS._8181, fontSize: 13 },
  subscribersText: {
    color: COLORS._8181,
    fontSize: 13,
    marginHorizontal: width(2)
  },
  videosCount: {
    color: COLORS._8181,
    fontSize: 13,
    marginLeft: width(2),
    marginRight: width(1)
  },
  buttonTabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    borderBottomWidth: 2,
    borderColor: '#C0C0C0',
    marginHorizontal: 14,
  },
  buttonTab: {
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
    borderColor: '#303030',
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
    fontFamily: FONTS.URBAN_REGULAR,
  },
})