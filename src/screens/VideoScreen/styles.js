import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#C0C0C0',
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 15,
        color: '#555',
    },
    activeButton: {
        borderBottomWidth: 3,
        borderBottomColor: '#303030',
        paddingBottom: 12,
    },
    
});