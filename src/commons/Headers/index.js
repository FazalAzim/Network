import { View, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '@constants';
import { RowWrapper, Text, TextButton, H3, RowWrapperBasic } from '@commons';
import { Back_Caret_Arrow, Toggle } from '@assets';
import { height, width } from '@helpers';

export const HeaderPrimary = ({ title, backArrow, both, menuIcon, navigation,titleColor, backArrowPress,style }) => {
  return (
    <View style={[styles.container, style]}>
      {menuIcon && !both ? (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', flex: 1, }}>
          {backArrow && <TouchableOpacity onPress = {backArrowPress}>
            {backArrow}
            </TouchableOpacity>}
          {/* <View style={styles.centeredTitle}> */}
            {title && <Text style={[styles.title, titleColor]}>{title}</Text>}
          {/* </View> */}
         <TouchableOpacity>
         {menuIcon}
         </TouchableOpacity>
        </View>
      ) : both ? (
        <>
          {backArrow && <TouchableOpacity onPress={backArrowPress}>{backArrow}</TouchableOpacity>}
          <View style={styles.centeredTitle}>
            {title && <Text style={[styles.title, titleColor]}>{title}</Text>}
          </View>
        </>
      ) : (
        <>
          {backArrow && <TouchableOpacity onPress={backArrowPress}>{backArrow}</TouchableOpacity>}
          {!backArrow && title && (
            <View style={styles.centeredTitle}>
              <Text style={[styles.title, titleColor]}>{title}</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export const MessageHeader = ({}) => {
  return(
    <RowWrapper>
      <H3>Messages</H3>
      <TextButton
      text={"New Message"}
      textBtnStyle={{color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_MEDIUM}}
      />
    </RowWrapper>
  )
}

export const ChatHeader = ({title, backArrow, rightIcon, onBackPress, onRightPress}) =>{
  return(
    <RowWrapper style={{height: height(5)}}>
      <RowWrapperBasic style={{alignItems: 'center'}}>
        <Pressable onPress={onBackPress}>
          {backArrow}
        </Pressable>
        <H3 style={{fontFamily: FONTS.URBAN_SEMIBOLD, marginLeft: width(2)}}>{title}</H3>
      </RowWrapperBasic>
      <Pressable onPress={onRightPress}>
        {rightIcon}
      </Pressable>
    </RowWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Updated for spacing between elements
    paddingHorizontal: 10,
  },
  centeredTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.URBAN_REGULAR,
    fontSize: 22,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
});

// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import {DIMENSIONS} from '../../constants/dimensions';
// import { COLORS, FONTS } from '../../constants';

// export const HeaderPrimary = ({title, backArrow, both}) => {
//   return (
//     <View style={styles.container}>
//       {both ? (
//         <>
//           {backArrow && <Text>{backArrow}</Text>}
//           <View style={styles.centeredTitle}>
//             {title && <Text style={styles.title}>{title}</Text>}
//           </View>
//         </>
//       ) : (
//         <>
//           {backArrow && <Text>{backArrow}</Text>}
//           {!backArrow && title && <View style={styles.centeredTitle}>
//             <Text style={styles.title}>{title}</Text>
//             </View>}
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start', // align items to the start
//     paddingHorizontal: 10,
//     // height: DIMENSIONS.HEIGHT * 0.07,
//   },
//   centeredTitle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontFamily:FONTS.POPPINS_MEDIUM,
//     fontSize: 22,
//     color: COLORS.BLACK,
//     textAlign: 'center',
//   },
// });
