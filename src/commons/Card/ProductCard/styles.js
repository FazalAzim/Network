import { COLORS, FONTS } from "@constants"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        marginHorizontal:14,
        height: 97,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 20,
        padding: 4,
        borderBottomWidth: 1,
        borderColor: COLORS._B3E8,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 76,
        height: 76,
        borderWidth: 1,
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS._B3E8,
        borderRadius: 6,
    },
    titleContainer: {
        height: 36,
        width: 240,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceText: {
        // color: COLORS.BLACK,
        fontSize: 14,
        fontFamily:FONTS.URBAN_BOLD
    },
    discountedPriceText: {
        color: COLORS.DARK_GRAY,
        fontSize: 14,
        fontFamily:FONTS.URBAN_SEMIBOLD,
        textDecorationLine: 'line-through',
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    viewPriceContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    vendorText: {
        color: COLORS._6262,
        fontSize: 10,
        fontFamily:FONTS.URBAN_REGULAR,
    },
})