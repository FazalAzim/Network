import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { HeaderPrimary, HomeCard, MainWrapper, ProductCard, VideoCard, CommentCard, TextButton } from '@commons'
import { COLORS, IMG, product_Cards } from '@constants'
import { Back_Caret_Arrow } from '@assets'

export const VideoScreen = ({ route, navigation }) => {
  const { item } = route?.params;

  const [selected, setSelected] = useState(0);
  const [activeTab, setActiveTab] = useState('Products');

  const sections = [
    {
      title: 'Products',
      component: (
        <View style={{ flexDirection: 'column' }}>
          <ScrollView>

            {
              product_Cards.map((item) => {
                return <ProductCard item={item} />
              })
            }
          </ScrollView>
        </View>
      ),
    },
    {
      title: 'Live Comments',
      component: (
        <CommentCard />
      ),
    },
  ];

  return (
    <MainWrapper style={{ backgroundColor: COLORS.WHITE }}>
      <VideoCard onClick={() => navigation.goBack()} paramData={item} />
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, activeTab === 'Products' && styles.activeButton]}
          onPress={() => setActiveTab('Products')}
        >
          <Text style={styles.buttonText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeTab === 'Live Comment' && styles.activeButton]}
          onPress={() => setActiveTab('Live Comment')}
        >
          <Text style={styles.buttonText}>Live Comment</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {sections.map((item, index) => {
          return (
            <View>
              <TextButton text={item.title} onPress={() => setSelected(index)} />
            </View>
          )
        })}
      </View> */}
      <View style={{ flex: 1, marginHorizontal: 18, marginTop: 12 }}>
        {sections[selected].component}
      </View>
    </MainWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"blue",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    // paddingBottom: 5,
  },
  button: {
    flex:1
    // paddingVertical: 8,
  },
  buttonText: {
    fontSize: 15,
    color: '#555',
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 4, // Adjust this value to control the height of the half underline
  },
});