import {Chat} from 'assets';
import {COLORS} from '@constants';
import {width} from '@helpers';
import {ComponentWrapper, Text} from '@commons';
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

export const MessageItem = ({item, onReply}) => {
  // const rightSwipeActions = () => {
  //   return (
  //     <TouchableOpacity onPress={() => onReply(item.id)} style={styles.replyButton}>
  //       <Text style={styles.replyText}>Reply</Text>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <>
      {item.sender === 'currentUser' ? (
        <ComponentWrapper
          style={[styles.messageContainer, styles.currentUserMessageContainer]}>
          <Text style={[styles.messageText, styles.currentUserMessageText]}>
            {item.content}
          </Text>
        </ComponentWrapper>
      ) : (
        item?.replies &&
        item.replies[0].sender === 'currentUser' &&
        item.replies[0].repliedTo === item.id && (
          <ComponentWrapper
            style={[
              styles.messageContainer,
              styles.currentUserMessageContainer,
            ]}>
            <ComponentWrapper style={styles.replyContainer}>
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
          </ComponentWrapper>
        )
      )}
      {item.sender !== 'currentUser' && (
        <ComponentWrapper style={styles.messageContainer}>
          <Text style={styles.messageText}>{item.content}</Text>
        </ComponentWrapper>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: width(70),
    marginLeft: width(3),
    backgroundColor: '#fff', // Default background color
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
    borderRadius: 2,
    marginHorizontal: 0,
  },
  replyTextContent: {
    color: COLORS.WHITE,
    fontStyle: 'italic',
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
