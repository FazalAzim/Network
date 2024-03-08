import React from 'react'
import { ProductSlider } from '@commons'
import { StyleSheet, Text, View } from 'react-native'
import { IMG } from '@constants'

export const ProductDetail = ({ navigation }) => {
    const images = [IMG.PRODUCT_MOBILE, IMG.SLIDE1, IMG.SLIDE2, IMG.PRODUCT_MOBILE, IMG.SLIDE1]
    return (
        <View style={styles.container}>
            <ProductSlider images={images} onClick={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});