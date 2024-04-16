import { InputWithTitle, MainWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON } from '@constants'
import { width, height } from '@helpers'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const CheckBoxCard = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <RowWrapperBasic>
         {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          // style={styles.checkbox}
        /> */}
    </RowWrapperBasic>
  )
}
export const SelectProduct = ({ navigation }) => {
  const [selected, setSelected] = useState(0);

  return (
    <MainWrapper style={{ paddingHorizontal: width(3), backgroundColor: COLORS.WHITE }}>
      <RowWrapperBasic style={{ marginVertical: 20, gap: 4 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Wrapper style={{ flex: 1, }}>
          <InputWithTitle placeholder='Search Product' placeholderTextColor={COLORS._C4C4} inputStyle={{ backgroundColor: COLORS._F8F8, borderRadius: 7, height: height(6) }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
      </RowWrapperBasic>
      <Wrapper>
        <CheckBoxCard />
      </Wrapper>
    </MainWrapper >
  )
}
