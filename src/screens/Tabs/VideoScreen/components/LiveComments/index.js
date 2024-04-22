import { CommentCard, InputWithTitle, Wrapper } from '@commons'
import { COLORS, comment_Cards } from '@constants';
import { Plane } from '@assets';
import React from 'react'
import { FlatList } from 'react-native';

export const LiveComments = () => {
  return (
    <Wrapper style={{ flex: 1, flexDirection: 'column', marginTop: 12 }}>
      <FlatList
        data={comment_Cards}
        renderItem={({ item }) => {
          return <CommentCard item={item} />;
        }}
      />
      {/* <InputWithTitle placeholder={'Type your comment'} placeholderTextColor={COLORS.DARK_GRAY} right={<Plane />} /> */}
    </Wrapper>
  )
}


