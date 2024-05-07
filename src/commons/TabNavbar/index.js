import { Text } from '@commons'
import { width } from '@helpers';
import { COLORS, FONTS } from '@constants';
import React, { useState } from 'react'
import { TabView, TabBar } from 'react-native-tab-view';
  
  export const TabNavbar = ({routes,tabs,styles}) => {
    const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={tabs}
      onIndexChange={setIndex}
      initialLayout={{ width: width(100) }}
      renderTabBar={props => <TabBar {...props} renderLabel={({ route, color, focused }) => (
        <Text style={{ color: focused ? styles : COLORS.BLACK, fontSize: 15, fontFamily:  FONTS.URBAN_REGULAR }}>
          {route.title}
        </Text>
      )} indicatorStyle={{ backgroundColor: styles, borderRadius: 16, marginBottom: -1.5, padding: 1, }} style={{
        backgroundColor: COLORS.WHITE, borderBottomWidth: 1,
        borderColor: COLORS._D7D7, elevation: 0
      }} />}
    />
  )
}
