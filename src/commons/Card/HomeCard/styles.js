import { COLORS, FONTS } from "@constants"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14, marginVertical: 10, height: 200
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'space-between',
    },
    backgroundImage_content: {
        marginHorizontal: 12,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backgroundImage_content_image: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderWidth:1,
        borderColor:COLORS._11FA,
        borderRadius: 100,
    },
    backgroundImage_stream: {
        paddingHorizontal: 10,
        paddingVertical:2,
        marginRight: 24,
        marginTop: 12,
        borderRadius: 2,
        fontFamily:FONTS.URBAN_BOLD,
        fontSize:11,
    },
    backgroundImage_status: {
        fontFamily:FONTS.URBAN_MEDIUM,
        color: COLORS.WHITE,
        fontSize: 11
    },
    backgroundImage_status_icon: {
        marginLeft: 6,
        justifyContent: 'center'
    },
    backgroundImage_barIcon: {
        justifyContent: 'flex-end',
        marginRight: 12
    },
    card_bar: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card_bar_content: {
        marginRight: 10,
        flexDirection: 'row',
        gap: 16
    },
    card_bar_button_common: {
        flexDirection: 'row',
        gap: 3,
    },
})
