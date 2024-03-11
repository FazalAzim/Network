import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { RowWrapper, Wrapper } from '@commons'
import { width } from '@helpers'
import { COLORS, FONTS } from '@constants'

export const Seperator = ({ text }) => {
    return (
        <RowWrapper style={styles.wrapper}>
            <Wrapper style={styles.line} />
            <Text style={styles.text}>{text ?? 'OR'}</Text>
            <Wrapper style={styles.line} />
        </RowWrapper>
    )
}

export const SeparatorBasic = () => {
    return(
        <Wrapper style={styles.lineBasic} />
    )
}

export default Seperator

const styles = StyleSheet.create({
    line: {
        height: 1,
        width: width(35),
        backgroundColor: COLORS.BD_COLOR
    },
    lineBasic:{
        height: 1,
        width: width(90),
        backgroundColor: COLORS._F1F1,
    },
    wrapper: {
        width: width(90),
        alignSelf: 'center',
        marginBottom: 20
    },
    text: {
        fontFamily: FONTS.URBAN_SEMIBOLD,
        color: COLORS.DARK_GRAY
    }
})