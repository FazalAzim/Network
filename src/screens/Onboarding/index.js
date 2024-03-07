import { View,Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import { H1, MainWrapper, PrimaryButton, Text } from '@commons'
import { COLORS, ROUTES, slides } from '@constants'
import Swiper from 'react-native-swiper'

export const Onboarding = ({navigation}) => {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);

const goToNextSlide = () => {
      //  if(index < slides.length - 1){
      //   if (swiperRef.current && swiperRef.current.scrollBy) {
      //       swiperRef.current.scrollBy(1);
      //     }
      //     setIndex(index + 1);
      //   // swiperRef.current.scrollBy(1);
      //  }else{
        navigation.replace(ROUTES.LOGIN)
      //  }
      };

   const onIndexChanged = (newIndex) => {
    setIndex(newIndex);
  };
  console.log("Index ==>", index)

  return (
   <MainWrapper style={{alignItems: 'center', justifyContent: 'center'}}>
     <Swiper
      autoplay
      loop={true} 
      showsPagination={true} 
      onIndexChanged={(i) => onIndexChanged(i)}
      dotColor={COLORS.XL_GRAY}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={{ position: 'absolute', bottom: 100 }}
    >
      {slides.map((item, i) => (
        <View key={item.key} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <H1 style={styles.title}>{item.title}</H1>
          <Text style={styles.description}>{item.description}</Text>
          {/* <Text style={styles.title}>{item.title}</Text> */}
          {/* <Text style={styles.description}>{item.description}</Text> */}
          <PrimaryButton text={'Get Started'} onPress={() => goToNextSlide()} style={styles.nextButton} />
        </View>
      ))}
    </Swiper>
   </MainWrapper>
  )
}
