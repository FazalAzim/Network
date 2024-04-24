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
        fontFamily: FONTS.URBAN_BOLD,
    },
    deliveryContainer: {
        width: width(90),
        flexDirection: 'column',
        gap: 3,
        paddingTop:10,
        paddingBottom:15,
    },
    deliveryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    deliveryText: {
        color: '#989898',
        fontSize: 12,
        // fontWeight: '400',
        fontFamily: FONTS.URBAN_REGULAR,
    },
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingBottom:15,
    },
    addressText: {
        paddingLeft: 18,
        color: '#1E1F3D',
        fontSize: 14,
        fontFamily: FONTS.URBAN_MEDIUM,
    },
    subtotalContainer: {
        width: width(90),
        paddingVertical: 10,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EAEAEA',
    },
    subtotalText: {
        color: '#989898',
        fontSize: 13,
        fontFamily: FONTS.URBAN_REGULAR,
    },
    totalAmountText: {
        color: '#1E1F3D',
        fontSize: 14,
        fontFamily: FONTS.URBAN_BOLD,
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
        fontFamily: FONTS.URBAN_REGULAR
    },
    PriceTotal: {
        color: '#1E1F3D',
        fontSize: 14,
        fontFamily: FONTS.URBAN_BOLD
    }
});