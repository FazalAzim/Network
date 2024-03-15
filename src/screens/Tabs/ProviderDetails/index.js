import React from 'react'
import { CommentCard,H3, MainWrapper, PrimaryButton, RowWrapper, VideoCard, Wrapper } from '@commons'
import { IMG, comment_Cards } from '@constants'
import { FlatList } from 'react-native'
import {styles} from './styles'

export const ProviderDetails = ({ navigation }) => {
  const data = {
    key: '1',
    title: 'Melia Elix',
    description: 'PC $ Gaming Gears',
    image: IMG.SLIDE1,
    imageIcon: IMG.SLIDE2,
    status: 'Verfied',
    stream: 'LIVE',
    watching: '2.6k',
    likes: '2.1k',
    comments: '1k',
  };

  return (
    <MainWrapper>
      <VideoCard onClick={() => navigation.goBack()} paramData={data} navigation={navigation} services={true} />
      <Wrapper style={styles.wrapper}>
        <H3 style={styles.headerText}>
          Live Comments
        </H3>
      </Wrapper>
      <Wrapper style={styles.commentWrapper}>
        <FlatList
          data={comment_Cards}
          renderItem={({ item }) => {
            return <CommentCard item={item} />;
          }}
        />
      </Wrapper>
      <RowWrapper style={styles.subscriptionRow}>
        <H3 style={styles.subscriptionText}>
          You must be subscribed in to chat.
        </H3>
        <Wrapper style={styles.subscribeButtonWrapper}>
          <PrimaryButton text={'Subscribe'} style={{ width: 90, height: 35 }} />
        </Wrapper>
      </RowWrapper>
    </MainWrapper>
  )
}