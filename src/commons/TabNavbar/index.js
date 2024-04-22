import { Text } from '@commons'
import { width } from '@helpers';
import { COLORS, FONTS } from '@constants';
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
  
  export const TabNavbar = ({routes,tabs,tabStyles}) => {
    const [index, setIndex] = useState(0);
    const renderScene = SceneMap(tabs);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: width(100) }}
      renderTabBar={props => <TabBar {...props} renderLabel={({ route, color, focused }) => (
        <Text style={{ color: focused ? tabStyles.focusText : COLORS.BLACK, fontSize: 15, fontFamily:  FONTS.URBAN_REGULAR }}>
          {route.title}
        </Text>
      )} indicatorStyle={{ backgroundColor: tabStyles.indicatorStyle, borderRadius: 16, marginBottom: -2, padding: 1.5, }} style={{
        backgroundColor: COLORS.WHITE, borderBottomWidth: 1,
        borderColor: COLORS._D7D7, elevation: 0
      }} />}
    />
  )
}
