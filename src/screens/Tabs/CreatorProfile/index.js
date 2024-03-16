import { MainWrapper, Text, Wrapper } from '@commons'
import { width } from '@helpers'
import { COLORS, FONTS, ICON } from '@constants'
import React from 'react'

export const CreatorProfile = ({ navigation }) => {
    return (
        <MainWrapper style={{ paddingHorizontal: width(3) }}>
            <Wrapper style={{ width: width(95), marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
                <Wrapper style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: COLORS._1E1F, fontSize: 20, fontFamily: FONTS.URBAN_BOLD }}>Checkout</Text>
                </Wrapper>
            </Wrapper>
        </MainWrapper>
    )
}

