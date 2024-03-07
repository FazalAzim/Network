import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { MainWrapper, MessageHeader, SeparatorBasic, Wrapper } from '@commons'
import { COLORS, users } from '@constants'
import { height, width } from '@helpers'
import { ContactCard } from './components'

export const Inbox = () => {
  return (
    <MainWrapper style={{backgroundColor: COLORS.WHITE}}>
      <MessageHeader />
      <Wrapper style={{marginHorizontal: width(5), marginTop: height(2)}}>
        <SeparatorBasic />
        <FlatList
        data={users}
        renderItem={({item}) => (
        <>
          <ContactCard
          chat={item}
          />
          <SeparatorBasic />
        </>
        )}
        />
      </Wrapper>
    </MainWrapper>
  )
}
