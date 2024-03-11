import { FONTS, IMG } from '@constants'
import { StarActive, StarUnactive, CheckMarkIcon } from '@assets'
import React from 'react'
import { Image, Text, View } from 'react-native'

export const RatingCard = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 8 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={IMG.SLIDE1}
          style={{
            width: 48,
            height: 48,
            resizeMode: 'cover',
            borderRadius: 100,
          }}
        />
        <View style={{ marginLeft: 8, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'column', gap: 2 }}>
            <Text style={{ color: '#262626', fontSize: 14, fontWeight: '700', fontFamily: FONTS.URBAN_REGULAR }}>James Lawson</Text>
            <View style={{ flexDirection: 'row', gap: 3 }}><StarActive /><StarActive /><StarActive /><StarActive /><StarUnactive /></View>
          </View>
        </View>
      </View>
      <Text style={{ color: '#9098B1', fontSize: 12, fontWeight: '400', fontFamily: FONTS.URBAN_REGULAR }}>
        air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
      </Text>
      <Text style={{ color: '#9098B1', fontSize: 10, fontWeight: '400', fontFamily: FONTS.URBAN_REGULAR }}>December 10, 2016</Text>

    </View>
  )
}
