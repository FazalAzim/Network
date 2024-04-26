import { Chat } from '@assets';
import { COLORS, FONTS } from '@constants';
import { height, width } from '@helpers';
import { ComponentWrapper, Seperator, Text, Wrapper } from '@commons';
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ImageGallery } from '@georstat/react-native-image-gallery';
import moment from 'moment';

export const MessageItem = ({ item, onReply, lastMessageTime }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  const [image, setImage] = useState([]);
  const rightSwipeActions = () => {
    return (
      <TouchableOpacity
        onPress={() => onReply(item.id)}
        style={styles.replyButton}>
        <Text style={styles.replyText}>Reply</Text>
      </TouchableOpacity>
    );
  };
  const imageClickHandler = imageUri => {
    // console.log("Image Uri ===>>", imageUri)
    setImage([
      {
        id: image?.length + 1,
        url: item.media,
      },
    ]);
    setIsOpen(true);
  };
  console.log('image', image);

  return (
    <>
      {item.sender === 'currentUser' && !item.media ? (
        <Wrapper>
          <ComponentWrapper>
            <Seperator text={(moment(lastMessageTime).format('dddd'))} />
            {/* <Text style={[styles.messageText, styles.currentUserMessageText, { paddingTop: 4, fontSize: 12, textAlign: 'right',color:'black' }]}>{moment(item.timestamp).format("hh:mm A")}</Text> */}
          </ComponentWrapper>
          <ComponentWrapper
            style={[styles.messageContainer, styles.currentUserMessageContainer]}>
            <Text style={[styles.messageText, styles.currentUserMessageText]}>
              {item.content}
            </Text>
            <Text style={[styles.messageText, styles.currentUserMessageText, { paddingTop: 4, fontSize: 12, textAlign: 'right' }]}>{moment(item.timestamp).format("hh:mm A")}</Text>
          </ComponentWrapper>
        </Wrapper>
      ) : item.sender === 'currentUser' &&
        item.media &&
        item.media !== undefined &&
        item.media !== false ? (
        // <ComponentWrapper style={[styles.messageContainer, styles.currentUserMessageContainer]}>
        <Pressable onPress={() => imageClickHandler(item.media)}>
          <Image
            source={{ uri: item.media }}
            style={{
              width: width(40),
              height: height(20),
              resizeMode: 'contain',
              margin: 10,
              alignSelf: 'flex-end',
            }}
          />
        </Pressable>
      ) : (
        // </ComponentWrapper>
        item?.replies &&
        item.replies[0].sender === 'currentUser' &&
        item.replies[0].repliedTo === item.id && (
          <ComponentWrapper
            style={[
              styles.messageContainer,
              styles.currentUserMessageContainer,
            ]}>
            <ComponentWrapper style={styles.replyContainer}>
              <Text style={[styles.messageText, styles.currentUserMessageText, { paddingTop: 4, fontSize: 12, textAlign: 'left', color: COLORS.PRIMARY_COLOR, paddingBottom: 4 }]}>{item.sender}</Text>
              <Text
                multiLines={true}
                numOfLines={4}
                style={styles.replyTextContent}>
                {item.content}
              </Text>
            </ComponentWrapper>
            <Text style={[styles.messageText, styles.currentUserMessageText]}>
              {item?.replies[0].content}
            </Text>
            <Text style={[styles.messageText, styles.currentUserMessageText, { paddingTop: 4, fontSize: 12, textAlign: 'left' }]}>{moment(item.replies.timestamp).format("hh:mm A")}</Text>
          </ComponentWrapper>
        )
      )}
      {item.sender !== 'currentUser' && (
        <ComponentWrapper style={styles.messageContainer}>
          <Text style={styles.messageText}>{item.content}</Text>
          <Text style={[styles.messageText, { paddingTop: 4, fontSize: 12, textAlign: 'left', color: '#ADB5BD' }]}>{moment(item.timestamp).format("hh:mm A")}</Text>
        </ComponentWrapper>
      )}
      <ImageGallery
        close={closeGallery}
        isOpen={isOpen}
        images={image && image !== null}
      />
      {/* <Image source={{uri: item.media}} style={{width: 200, height: 200}} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    // borderRadius: 5,
    marginVertical: 5,
    width: width(70),
    marginLeft: width(3),
    backgroundColor: '#fff', // Default background color
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  currentUserMessageContainer: {
    alignSelf: 'flex-end',
    marginRight: width(3),
    backgroundColor: COLORS.PRIMARY_COLOR, // Background color for current user
  },
  messageText: {
    fontSize: 16,
    color: '#000', // Default text color
  },
  currentUserMessageText: {
    color: COLORS.WHITE, // Text color for current user
  },
  replyContainer: {
    backgroundColor: COLORS.LIGHT_PINK,
    padding: 5,
    width: width(60),
    borderRadius: 5,
    marginHorizontal: 0,
  },
  replyTextContent: {
    color: COLORS.WHITE,
    // fontStyle: 'italic',
    fontSize: 14,
  },
  replyButton: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 75,
  },
  replyText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
