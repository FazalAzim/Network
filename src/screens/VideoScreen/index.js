import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { MainWrapper, ProductCard, VideoCard, CommentCard, InputWithTitle, } from '@commons'
import { COLORS, FONTS, ROUTES, comment_Cards, product_Cards } from '@constants'
import { styles } from './styles'
import { Plane } from '@assets'

export const VideoScreen = ({ route, navigation }) => {
  const { item } = route?.params;

  const [selected, setSelected] = useState(0);
  const [activeTab, setActiveTab] = useState('Products');
  // const [activeTab, setActiveTab] = useState('Products');

  // const handleTabPress = (tab) => {
  //   setActiveTab(tab);
  // };

  const sections = [
    { title: 'Products' },
    { title: 'Live Comments' },
  ];

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <VideoCard onClick={() => navigation.goBack()} paramData={item} navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {sections.map((data, index) => {
            return (
              <TouchableOpacity key={index}
                style={[styles.button, activeTab === data.title ? styles.activeButton : null]}
                onPress={() => {
                  setSelected(index);
                  setActiveTab(data.title)
                }}>
                <Text style={styles.buttonText}>{data.title}</Text>
                {activeTab === data.title && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <View style={{ flex: 1, marginHorizontal: 18, marginTop: 12 }}>
        <View style={{ flexDirection: 'column' }}>
          {selected === 0 ? (
            <FlatList
              data={product_Cards}
              renderItem={({ item }) => {
                return <ProductCard item={item} onClick={() => navigation.navigate(ROUTES.PRODUCT_DETAIL)} />;
              }}
            />
          ) : (
            <FlatList
              data={comment_Cards}
              renderItem={({ item }) => {
                return <CommentCard item={item} />;
              }}
            />
          )
          }
        </View>
      </View>
      {
        selected === 1 && (
          <KeyboardAvoidingView style={{ marginHorizontal: 18, }} behavior="padding" keyboardVerticalOffset={100}>
            <ScrollView>
              <InputWithTitle placeholder={'Type your comment'} placeholderTextColor={COLORS.DARK_GRAY} right={<Plane />} />
            </ScrollView>
          </KeyboardAvoidingView>
        )
      }
    </MainWrapper>
  )
}
