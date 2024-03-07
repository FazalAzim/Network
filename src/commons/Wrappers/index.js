import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { stylez } from "./styles";

export const FullScreenWrapper = ({ children, style }) => {
    const { styles } = stylez()
    return (
        <View style={[styles.fullScreenWrapper, style]}>
            <StatusBar hidden />
            {children}
        </View>
    )
}

export const MainWrapper = ({ children, style }) => {
    const { styles } = stylez()
    return (
        <SafeAreaView style={[styles.mainContainer, style]}>
            {children}
        </SafeAreaView>
    )
}

export const Wrapper = ({ children, style, flex }) => {
    return (
        <View
            style={[{ flex: flex, }, style]}>
            {children}
        </View>
    );
}

export const RowWrapper = ({ children, style }) => {
    const { styles } = stylez()
    return (
        <View style={[styles.rowCompContainer, style]}>
            {children}
        </View>
    );
}

export const RowWrapperBasic = ({ children, style }) => {
    const { styles } = stylez()
    return (
        <View style={[styles.rowView, style]}>
            {children}
        </View >
    );
}

export const ComponentWrapper = ({ children, style }) => {
    const { styles } = stylez()
    return (
        <View style={[styles.compContainer, style]}>
            {children}
        </View>
    );
}

export const ScrollWrapper = ({ children, style, horizontal, nestedScrollEnabled }) => {
    return (
        <KeyboardAwareScrollView
            horizontal={horizontal}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={nestedScrollEnabled}
            style={[style]}>
            {children}
        </KeyboardAwareScrollView>
    )
}