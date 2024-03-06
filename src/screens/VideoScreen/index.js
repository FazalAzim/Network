import React from 'react'
import { View, Text } from 'react-native'
import { HeaderPrimary, HomeCard, MainWrapper, VideoCard } from '@commons'
import { COLORS, IMG } from '@constants'
import { Back_Caret_Arrow } from '@assets'

export const VideoScreen = ({ route, navigation }) => {
  const {item} = route?.params;
  
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <VideoCard onClick={() => navigation.goBack()} paramData={item}/>
    </MainWrapper>
  )
}

