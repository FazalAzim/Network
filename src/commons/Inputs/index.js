import { Text, TouchableOpacity } from "react-native";
import { TextInput } from "@core-ui";
import { RowWrapperBasic, Wrapper } from "../Wrappers";
import React from 'react'
import { stylez } from './styles';

export const InputWithTitle = ({ 
    title, titleStyle, onPress, onSubmitEditing, 
    onEndEditing, autoFocus, onChangeText, value, 
    placeholder, editable, keyboardType, multiline, 
    secureTextEntry, right, onPressRight, rightStyles, 
    inputStyle, placeholderTextColor }) => {
  const { styles } = stylez()
    return (
        <Wrapper>
            {title && <Wrapper>
                <Text style={[styles.title, titleStyle]}>
                    {title}
                </Text>
            </Wrapper>}
                <Wrapper style={styles.inputContainer}>
                    <RowWrapperBasic>
                        <TextInput
                            selectionColor="#2378EF"
                            onSubmitEditing={onSubmitEditing}
                            onEndEditing={onEndEditing}
                            autoFocus={autoFocus}
                            onChangeText={onChangeText}
                            value={value}
                            placeholder={placeholder}
                            editable={editable}
                            keyboardType={keyboardType}
                            multiline={multiline}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderTextColor}
                            secureTextEntry={secureTextEntry}
                            style={[styles.inputField, inputStyle]}
                        />
                        {
                            right ?
                                <TouchableOpacity onPress={onPressRight}
                                    style={[styles.rightIcon, rightStyles]}>
                                    {right}
                                </TouchableOpacity>
                                : null
                        }
                    </RowWrapperBasic>
                </Wrapper>
        </Wrapper>
    );
}
