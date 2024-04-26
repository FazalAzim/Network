import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { MainWrapper, MessageHeader, SeparatorBasic, Wrapper } from '@commons'
import { COLORS, ROUTES, users } from '@constants'
import { height, width } from '@helpers'
import { ContactCard } from './components'

export const Inbox = ({ navigation }) => {
  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <Wrapper style={{ marginTop: 6 }}>
        <MessageHeader />
      </Wrapper>
      <Wrapper style={{ marginHorizontal: width(5), marginTop: height(2) }}>
        <SeparatorBasic />
        <FlatList
          // style={{flex: 1, borderWidth: 1}}
          showsVerticalScrollIndicator={false}
          data={users}
          renderItem={({ item }) => (
            <>
              <ContactCard
                onPress={() => navigation.navigate(ROUTES.CHAT, { chat: item.messages, user: item.username, timeStamp: item.lastMessageTime, })}
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
