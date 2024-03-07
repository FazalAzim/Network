import { StyleSheet } from 'react-native'
import { width, height, totalSize } from '@helpers'
import { COLORS, FONTS } from '@constants'

export const stylez = () => {
    const styles = StyleSheet.create({
        title: {
            fontFamily: FONTS.URBAN_REGULAR,
            fontSize: 15,
            // marginHorizontal: width(5),
            color: COLORS.BLACK,
            marginBottom: height(0.5)
        },
        inputContainer: {
            borderBottomWidth: 1,
            borderColor: COLORS.BD_COLOR,
            // marginHorizontal: width(1),
            height: height(6),
            marginBottom:height(2),
            backgroundColor: COLORS.INPUT_COLOR,
            borderRadius: 8,
        },
        inputField: {
            flex:1,
            fontFamily: FONTS.URBAN_REGULAR,
            color: "#494746",
            fontSize: 14,
            backgroundColor: COLORS.INPUT_COLOR,
            // textAlignVertical:'center',
            // borderWidth: 1,
            height:height(6),
            paddingLeft: 10,
            borderRadius:8,
        },
        rightIcon: {
            marginEnd: width(3)
        }
    })
    return { styles }
}