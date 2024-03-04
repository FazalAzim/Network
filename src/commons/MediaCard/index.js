import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
// import { styles } from './styles';
import { BarIcon, ChatIcon, Heart, Toggle, Vector } from '@assets';

export const MediaCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 160 }}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          imageStyle={{ borderRadius: 8 }}
          style={styles.backgroundImage}>
          <View style={{ alignItems: 'flex-end'}}>
              <Text
                style={(item.stream === 'Ad') ? {
                  color: '#1D1D1D',
                  backgroundColor: 'white',
                  paddingHorizontal: 8,
                  marginRight: 24,
                  marginTop: 12,
                  borderRadius: 4

                } : {
                  backgroundColor: 'red',
                  paddingHorizontal: 8,
                  marginRight: 24,
                  marginTop: 12,
                  borderRadius: 4
                }
                }>
                {item.stream}
              </Text>
          </View>
          <View
            style={styles.backgroundImage_content}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={item.imageIcon}
                style={styles.backgroundImage_content_image}
              />
              <View style={{ marginLeft: 8 }}>
                <Text style={{ color: 'white' }}>{item.title}</Text>
                < View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>{item.status}</Text>
                  <View style={{ marginLeft: 6, justifyContent: 'center' }}><Vector /></View>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-end', marginRight: 12 }}>
              <Text><BarIcon /></Text>
            </View>
          </View>
        </ImageBackground>
      </View >
      <View
        style={{
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <View style={{}}>
          <Text style={{ color: 'black' }}>{item.description}</Text>
          <Text style={{ color: '#7A7A7A' }}>{item.watching} watching</Text>
        </View>
        <View style={{ marginRight: 10, flexDirection: 'row', gap: 16 }}>
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <View style={{ paddingTop: 2 }}><Heart /></View>
            <View>
              <Text style={{ color: '#626262' }}>
                {item.likes}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 3 }}>
            <View style={{ paddingTop: 2 }}><ChatIcon /></View>
            <View>
              <Text style={{ color: '#626262' }}>
                {item.comments}
              </Text>
            </View>
          </View>
          <View>
            <View style={{ paddingTop: 2 }}><Toggle /></View>
          </View>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18, marginVertical: 14, height: 200
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage_content: {
    marginHorizontal: 12,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backgroundImage_content_image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 100,
  },
})