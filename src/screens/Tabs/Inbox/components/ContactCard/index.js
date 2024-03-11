import { View, Image, Pressable } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { RowWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { height, width } from '@helpers'
import moment from 'moment';
import { COLORS, FONTS } from '@constants'
import { CheckMarkIcon } from '@assets'

export const ContactCard = ({chat, onPress}) => {
    // console.log(username)
function formatLastMessageTime(timestamp) {
  const now = moment();
  const date = moment(timestamp);
  const diffDays = now.diff(date, 'days');

  if (diffDays === 0) {
    // If the message was sent today
    return `${date.format('hh:mm A')}`;
  } else {
    // If the message was sent more than two days ago
    return `${diffDays} days ago`;
  }
}
  return (          
   <Pressable onPress={onPress}>
     <RowWrapper style={{marginHorizontal: width(0), marginVertical: height(1)}}>
        <Image source={chat.avatar} style={{width: 40, height: 40, borderRadius: 50, resizeMode: 'contain'}} />
        <Wrapper style={{width: width(78), height: height(5), justifyContent:'center',}}>
            <RowWrapper>
                <RowWrapperBasic style={{alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontFamily: FONTS.URBAN_BOLD, marginRight: 4}}>{chat.username}</Text>
                  <CheckMarkIcon />
                </RowWrapperBasic>
                <Text style={{color: COLORS._A3A3}}>{formatLastMessageTime(chat.lastMessageTime)}</Text>
            </RowWrapper>
            <RowWrapper style={{marginTop: 8}}>
                <Text numOfLines={1} multiline={false} style={{color: COLORS._A3A3}}>{chat.lastMessage}</Text>
               {chat.unreadMessages !== 0 &&  
               <Wrapper style={{backgroundColor: COLORS.LIGHT_PINK, width: 18, height: 18, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: COLORS.PRIMARY_COLOR, fontSize: 11}}>{chat.unreadMessages}</Text>
                </Wrapper>}
            </RowWrapper>
        </Wrapper>
    </RowWrapper>
   </Pressable>
  )
}
