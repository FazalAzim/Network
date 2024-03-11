import { ChatHeader, MainWrapper, RowWrapperBasic } from '@commons';
import { COLORS } from '@constants';
import { Back_Caret_Arrow, PlusIcon, SendIcon, Toggle } from '@assets';
import React, { useState } from 'react';
import { View, Button, FlatList, Pressable } from 'react-native';
import { MessageItem } from './components';
import { TextInput } from '@core-ui';
import { height, width } from '@helpers';

export const Chat = ({navigation,route}) => {
    const {chat, user} = route?.params;
    const [messages, setMessages] = useState(chat);
  const [textInput, setTextInput] = useState('');
  const [replyToId, setReplyToId] = useState(null);

  const sendMessage = (message, isImage = false, repliedTo = null) => {
   if(message){
     const newMessage = {
      id:messages.length+1,
      sender: 'currentUser',
      content: message,
      isImage,
      repliedTo,
    };
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setTextInput('');
    setReplyToId(null); // Reset reply state
   }
  };

  const handleReply = (messageId) => {
    setReplyToId(messageId);
  };

  return (
    <MainWrapper style={{flex: 1, backgroundColor: COLORS.WHITE}}>
        <ChatHeader title={user} backArrow={<Back_Caret_Arrow />} onBackPress={() => navigation.goBack()} rightIcon={<Toggle />} onRightPress={() => {}} />
      <FlatList
        inverted
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MessageItem item={item} onReply={handleReply} />
        )}
      />
      {replyToId && <Text>Replying to message ID: {replyToId}</Text>}
      <RowWrapperBasic style={{ alignSelf: 'center', marginTop: height(2)}}>
        <Pressable>
            <PlusIcon />
        </Pressable>
        <TextInput style={{ height: 35, color: COLORS.BLACK, width: width(75), marginHorizontal: width(2), borderRadius: 4, backgroundColor: COLORS._F7F7}} value={textInput} onChangeText={setTextInput} />
        <Pressable onPress={() => sendMessage(textInput, false, replyToId)}>
            <SendIcon />
        </Pressable>
      </RowWrapperBasic>
      
      </MainWrapper>
  );
}
