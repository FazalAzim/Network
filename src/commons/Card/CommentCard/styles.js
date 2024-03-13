import { COLORS } from '@constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal:14,
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
        gap: 6,
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: COLORS.BLACK,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18,
    },
    time: {
        color: '#9E9E9E',
        fontSize: 11,
        fontWeight: '400',
    },
    description: {
        color: COLORS.BLACK,
        fontSize: 13,
        fontWeight: '400',
    },
});