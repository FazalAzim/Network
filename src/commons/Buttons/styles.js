import { StyleSheet } from 'react-native'
import { width, height } from '@helpers'
import { COLORS } from '@constants'

export const stylez = () => {
    const styles = StyleSheet.create({
        primaryBtnContainer: {
            backgroundColor: COLORS.PRIMARY_COLOR,
            width: width(90),
            height: height(6),
            borderRadius: 6,
            marginBottom: height(1.5),
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center'
        },
        primaryBtnTxt: {
            fontSize: 14,
            color: COLORS.WHITE,
            // fontFamily: FONT.nunitoMedium
        },
        socialBtnContainer: {
            width: width(90),
            height: height(6),
            borderWidth: 1,
            borderRadius: 6,
            marginBottom: height(1.5),
            justifyContent: 'center',
            alignItems:'center',
            alignSelf: 'center',
        },
        socialIcon: {
            width: width(10),
        },
        socialBtnTxt: {
            alignItems: 'center',
            fontSize: 16,
            color: COLORS.BLACK,
            // fontFamily: FONT.nunitoSemiBold
        },
        btnText:{
            alignItems: 'center',
            fontSize: 16,
            color: COLORS.BLACK,
            // fontFamily: FONT.nunitoSemiBold
        }
    })
    return { styles }
}