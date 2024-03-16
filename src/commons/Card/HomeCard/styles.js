import { COLORS } from "@constants"
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
        borderRadius: 100,
    },
    backgroundImage_stream: {
        paddingHorizontal: 8,
        marginRight: 24,
        marginTop: 12,
        borderRadius: 2
    },
    backgroundImage_status: {
        color: COLORS.WHITE,
        fontSize: 12
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
