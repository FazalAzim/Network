import React, { useState } from 'react'
import { styles } from './styles'
import { Dot, MainWrapper, PrimaryButton, RowWrapperBasic, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON, IMG } from '@constants'
import { height, width } from '@helpers'
import { FlatList, Image, Pressable, TouchableOpacity } from 'react-native'
import { CheckIcon } from '@assets'

const SubscribeCard = ({ data, onClick, selected }) => {
  return (
    <Pressable onPress={onClick}>
      <Wrapper style={{ marginBottom: 14, position: 'relative', width: width(80), height: height(16), borderWidth: 1, borderColor: selected=== data.title ? COLORS.PRIMARY_COLOR : COLORS._C4C4, borderRadius: 18 }}>
        {data.button &&
          <PrimaryButton style={{ position: 'absolute', width: width(16), height: height(3), alignSelf: 'flex-end', top: 8, right: 8 }} text={'Best Value'} styleText={{ fontSize: 9, fontFamily: FONTS.URBAN_SEMIBOLD }} />
        }
        <Wrapper style={{ width: '100%', height: '100%', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', color: COLORS.PINK_COLOR, fontSize: 22, fontFamily: FONTS.URBAN_MEDIUM }}>{data.title}</Text>
          <RowWrapperBasic style={{ gap: 6 }}>
            <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM }}>{`$${data.price}/${data.title === 'Monthly' ? 'month' : 'year'}`}</Text>
            {'priceMonth' in data &&
              <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM }}>{`($${data.priceMonth}/month),`}</Text>
            }
          </RowWrapperBasic>
          <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: FONTS.URBAN_MEDIUM }}>Cancel any time</Text>
        </Wrapper>
      </Wrapper>
    </Pressable>
  )
}

export const Subscriptions = ({ navigation }) => {
  const [select, setSelect] = useState()
  const data = [
    { title: 'Monthly', price: 12.99, button: false },
    { title: 'Yearly', price: 69.99, priceMonth: 5.84, button: true }
  ];

  return (
    <MainWrapper style={{ paddingHorizontal: width(3) }}>
      <Wrapper style={{ width: width(95), marginTop: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
      </Wrapper>
      <Wrapper style={{ width: width(80), alignSelf: 'center' }} >
        <Image source={IMG.LOGO} style={{ width: 100, height: 100, alignSelf: 'center' }} />
        <Text style={{ marginVertical: height(1), fontSize: 35, fontFamily: FONTS.URBAN_BOLD, lineHeight: 35 }}>Go Live with SkyyLytes</Text>
        <Wrapper style={{ marginVertical: 12, flexDirection: 'column', gap: 14 }}>
          <RowWrapperBasic style={{ gap: 8 }}>
            <CheckIcon />
            <Text style={{ fontSize: 17, fontFamily: FONTS.URBAN_MEDIUM }}>Broadcast high-quality live videos</Text>
          </RowWrapperBasic>
          <RowWrapperBasic style={{ gap: 8 }}>
            <CheckIcon />
            <Text style={{ fontSize: 17, fontFamily: FONTS.URBAN_MEDIUM }}>Sell products and services</Text>
          </RowWrapperBasic><RowWrapperBasic style={{ gap: 8 }}>
            <CheckIcon />
            <Text style={{ fontSize: 17, fontFamily: FONTS.URBAN_MEDIUM }}>Engage with users in real-time</Text>
          </RowWrapperBasic>
        </Wrapper>
        <Text style={{ marginVertical: 14, fontSize: 18, fontFamily: FONTS.URBAN_MEDIUM, textAlign: 'center' }}>Choose a Subscription Plan</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <SubscribeCard data={item} onClick={()=>setSelect(item.title)} selected={select} />;
          }}
        />
        <RowWrapperBasic style={{ justifyContent: 'center', gap: 4, marginBottom: 14 }}>
          <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontSize: 13, color: COLORS._6262 }}>Restore Purchase</Text>
          <Dot style={{ alignSelf: 'center', width: 4, height: 4, backgroundColor: COLORS._6262 }} />
          <Text style={{ fontFamily: FONTS.URBAN_REGULAR, fontSize: 13, color: COLORS._6262 }}>Terms of Service</Text>
        </RowWrapperBasic>
        <PrimaryButton text={'Subscribe'} style={styles.primaryButton} />
      </Wrapper>
    </MainWrapper >
  )
}
