import { FlatList } from 'react-native'
import React from 'react'
import { H3, HomeCard, MainWrapper, ProfileCard, Wrapper } from '@commons'
import { COLORS, cards, } from '@constants'
import { styles } from './styles'
import { height, width } from '@helpers'

export const ProviderProfile = ({ navigation }) => {

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <ProfileCard navigation={navigation} />
      <Wrapper style={{ marginHorizontal: width(3), marginVertical: height(2) }}>
        <H3 >Videos</H3>
      </Wrapper>

      <Wrapper style={{ flex: 1, flexDirection: 'column' }}>
        <FlatList
          data={cards}
          renderItem={({ item }) => {
            return <HomeCard item={item} provider={true} navigation={navigation} />;
          }}
        />
      </Wrapper>
    </MainWrapper>
  )
}