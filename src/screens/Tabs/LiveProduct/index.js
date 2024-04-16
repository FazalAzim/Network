import { MainWrapper, RowWrapperBasic, Text, Wrapper } from '@commons'
import { COLORS, FONTS, ICON } from '@constants'
import { width } from '@helpers'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { GoLive,Schedule } from './components'
import { styles } from './styles'

export const LiveProduct = ({ navigation }) => {
  const [selected, setSelected] = useState(0);
  const [activeTab, setActiveTab] = useState('Go Live');

  const sections = [
    { title: 'Go Live', component: <GoLive navigation={navigation} /> },
    { title: 'Schedule', component: <Schedule /> },
  ]
  return (
    <MainWrapper style={{ paddingHorizontal: width(3),backgroundColor:COLORS.WHITE }}>
      <RowWrapperBasic style={{ marginVertical: 20 }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
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
                <Text style={[styles.buttonText, activeTab === data.title ? { color: COLORS.PRIMARY_COLOR, fontFamily: FONTS.URBAN_BOLD } : { color: COLORS._1E1F }]}>{data.title}</Text>
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


