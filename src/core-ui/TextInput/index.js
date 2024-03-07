import React from 'react'
import { TextInput as RNTextInput } from 'react-native'

export const TextInput = ({ value, onChangeText, selectionColor, placeholder, placeholderTextColor, editable, autoFocus, keyboardType, style, multiline, secureTextEntry, onEndEditing, onSubmitEditing, onFocus,
    onBlur }) => {
    return(
        <RNTextInput
            selectionColor={selectionColor}
            onEndEditing={onEndEditing}
            style={style}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            autoFocus={autoFocus}
            secureTextEntry={secureTextEntry}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            editable={editable}
            keyboardType={keyboardType}
        />
    )
} 