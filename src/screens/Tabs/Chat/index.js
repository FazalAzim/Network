import { ChatHeader, MainWrapper, RowWrapperBasic } from '@commons';
import { COLORS } from '@constants';
import { Back_Caret_Arrow, PlusIcon, SendIcon, Toggle } from '@assets';
import React, { useState } from 'react';
import { View, Button, FlatList, Pressable } from 'react-native';
import { MessageItem } from './components';
import { TextInput } from '@core-ui';
import { height, width } from '@helpers';
import ImagePicker from 'react-native-image-crop-picker';

export const Chat = ({ navigation, route }) => {
  const { chat, user, timeStamp } = route?.params;
  const [messages, setMessages] = useState(chat);
  const [imageUri, setImageUri] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [replyToId, setReplyToId] = useState(null);

  const sendMessage = (message, repliedTo = null) => {
    // console.log("object")
    if (message) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'currentUser',
        content: message || '',
        media: !imageUri === null && imageUri,
        repliedTo,
      }
      // console.log("New Message ===>>", newMessage)
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      setTextInput('');
      setReplyToId(null); // Reset reply state
    } else if (imageUri) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'currentUser',
        media: imageUri,
        repliedTo,
      }
      // console.log("New Message ===>>", newMessage)
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      setTextInput('');
      setReplyToId(null); // Reset reply state
    }
  };

  const handleReply = (messageId) => {
    setReplyToId(messageId);
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      // console.log(image.path);
      setImageUri(image.path);

    });
  }

  return (
    <MainWrapper style={{ flex: 1, backgroundColor: COLORS.WHITE,paddingTop:4}}>
      <ChatHeader title={user} backArrow={<Back_Caret_Arrow />} onBackPress={() => navigation.goBack()} rightIcon={<Toggle />} onRightPress={() => { }} />
      <FlatList
        inverted
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MessageItem item={item} onReply={handleReply} lastMessageTime={timeStamp} />
        )}
      />
      {replyToId && <Text>Replying to message ID: {replyToId}</Text>}
      <RowWrapperBasic style={{ alignSelf: 'center', marginTop: height(2) }}>
        <Pressable onPress={pickImage}>
          <PlusIcon />
        </Pressable>
        <TextInput style={{ height: 35, color: COLORS.BLACK, width: width(75), marginHorizontal: width(2), borderRadius: 4, backgroundColor: COLORS._F7F7 }} value={textInput} onChangeText={setTextInput} />
        <Pressable onPress={() => sendMessage(textInput, replyToId)}>
          <SendIcon />
        </Pressable>
      </RowWrapperBasic>

    </MainWrapper>
  );
}
