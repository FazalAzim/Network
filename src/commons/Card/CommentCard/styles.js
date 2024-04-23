import { COLORS, FONTS } from '@constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 14,
        height: 55,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
        padding: 4,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    textContainer: {
        flexDirection: 'column',
        gap: 3,
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: COLORS.BLACK,
        fontSize: 14,
        fontFamily: FONTS.URBAN_BOLD,
    },
    time: {
        color: COLORS._9E9E,
        fontSize: 11,
        fontFamily:FONTS.URBAN_REGULAR
    },
    description: {
        color: COLORS.BLACK,
        fontSize: 13,
        fontFamily: FONTS.URBAN_REGULAR,
    },
});