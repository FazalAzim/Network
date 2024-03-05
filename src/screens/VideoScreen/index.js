import React from 'react'
import { View,Text } from 'react-native'
import { HeaderPrimary, MainWrapper } from '@commons'
import { COLORS } from '@constants'
import { Back_Caret_Arrow } from '@assets'

export const VideoScreen = ({navigation}) => {
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <View style={{ flexDirection: 'row' }}>
      <HeaderPrimary
          both={false}
          backArrow={<Back_Caret_Arrow />}
          backArrowPress ={() => navigation.goBack()}
          style={{marginTop: 20}}
        />
        <Text style={{ color: COLORS.BLACK }}>Video Screen</Text>
      </View>
    </MainWrapper>
  )
}

