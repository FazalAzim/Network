import { MainWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON } from '@constants'
import { width } from '@helpers'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ExternalVendor, OwnProduct } from './components'
import { styles } from './styles'

export const MyProduct = ({ navigation }) => {
  const [selected, setSelected] = useState(0);
  const [activeTab, setActiveTab] = useState('Own Product');

  const sections = [
    { title: 'Own Product', component: <OwnProduct /> },
    { title: 'External Vendors', component: <ExternalVendor /> },
  ]
  return (
    <MainWrapper style={{ paddingHorizontal: width(3) }}>
      <RowWrapperBasic style={{ marginVertical: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Text style={{ flex: 1, textAlign: 'center', fontFamily: FONTS.URBAN_BOLD, fontSize: 20, color: COLORS._1E1F }}>Add Products</Text>
      </RowWrapperBasic>
      <Wrapper style={styles.container}>
        <Wrapper style={styles.buttonContainer}>
          {sections.map((data, index) => {
            return (
              <TouchableOpacity key={index}
                style={[styles.button, activeTab === data.title ? styles.activeButton : null]}
                onPress={() => {
                  setSelected(index);
                  setActiveTab(data.title)
                }}>
                <Text style={[styles.buttonText, activeTab === data.title ? { color: COLORS.PINK_COLOR, fontFamily: FONTS.URBAN_BOLD } : { color: COLORS._1E1F }]}>{data.title}</Text>
                {activeTab === data.title && <Wrapper style={styles.activeIndicator} />}
              </TouchableOpacity>
            )
          })}
        </Wrapper>
      </Wrapper>
      <Wrapper style={{ marginTop: 14, flex: 1 }}>{sections[selected].component}</Wrapper>
    </MainWrapper >
  )
}
