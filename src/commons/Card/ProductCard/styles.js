import { COLORS } from "@constants"
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
        borderColor: '#b3e8dc',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 76,
        height: 76,
        borderWidth: 1,
        backgroundColor: '#edf5f2',
        borderColor: '#b3e8dc',
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
        color: COLORS.BLACK,
        fontSize: 14,
        fontWeight: '600',
    },
    discountedPriceText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '600',
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
        color: '#626262',
        fontSize: 10,
        fontWeight: '400',
    },
})