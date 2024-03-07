import { StyleSheet } from 'react-native'
import { width, height } from '@helpers'

export const stylez = () => {
    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
        },
        fullScreenWrapper: {
            flex: 1,
        },
        backgroundWrapper: {
            flex: 1,
            height: height(100),
            width: width(100),

        },
        compContainer: {
            marginHorizontal: width(8),
        },
        rowCompContainer: {
            marginHorizontal: width(5),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        rowView: {
            flexDirection: 'row',
            alignItems: 'center',
        }
    })
    return { styles }
}