import { width } from '@helpers';
import { COLORS, FONTS } from '@constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
    },
    header: {
        width: width(95),
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#1E1F3D',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: FONTS.URBAN_REGULAR,
    },
    deliveryContainer: {
        width: width(95),
        flexDirection: 'column',
        gap: 3,
    },
    deliveryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    deliveryText: {
        color: COLORS.BLACK,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: FONTS.URBAN_REGULAR,
    },
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addressText: {
        paddingLeft: 18,
        color: '#1E1F3D',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: FONTS.URBAN_REGULAR,
    },
    subtotalContainer: {
        width: width(90),
        paddingVertical: 10,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#b3e8dc',
    },
    subtotalText: {
        color: '#989898',
        fontSize: 13,
        fontWeight: '400',
        fontFamily: FONTS.URBAN_REGULAR,
    },
    totalAmountText: {
        color: '#1E1F3D',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: FONTS.URBAN_REGULAR,
    },
    checkoutButtonContainer: {
        width: width(90),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
    },
    priceTitle: {
        color: '#989898',
        fontSize: 13,
        fontWeight: '400',
        fontFamily: FONTS.URBAN_REGULAR
    },
    PriceTotal: {
        color: '#1E1F3D',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: FONTS.URBAN_REGULAR
    }
});