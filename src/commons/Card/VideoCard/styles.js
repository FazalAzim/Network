import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    backgroundImage: {
        padding: 16,
        flex: 1,
        justifyContent: 'space-between'
    },
    backgroundImage_top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backgroundImage_top_right: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center'
    },
    backgroundImage_stream: {
        paddingHorizontal: 8,
        borderRadius: 4
    },
    backgroundImage_bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backgroundImage_bottom_icon: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    middle_bar: {
        marginHorizontal: 18,
        marginVertical: 14,
        flexDirection: 'column',
        gap: 8
    },
    middle_bar_image: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    middle_bar_status: {
        color: '#8F8F8F',
        fontSize: 11
    },
    middle_bar_status_icon: {
        marginLeft: 6,
        justifyContent: 'center'
    },
    middle_bar_button: {
        justifyContent: 'flex-end',
        marginRight: 12
    },
    middle_bar_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content_description: {
        color: '#3C3C3C',
        fontSize: 17,
        fontWeight: '700'
    },
    card_bottom_bar_content: {
        marginRight: 10,
        flexDirection: 'row',
        gap: 16
    },
    card_bottom_bar_button_common: {
        flexDirection: 'row',
        gap: 3,
    },
})