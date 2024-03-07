import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { RowWrapperBasic, Wrapper } from '@commons';
import { COLORS } from '@constants';
import { stylez } from './styles';


export const PrimaryButton = ({ onPress, text, disabled, loading, style }) => {
    const { styles } = stylez()
    return (
        <TouchableOpacity
            disabled={disabled || loading}
            onPress={onPress}
            style={[styles.primaryBtnContainer, style]}>
            <Wrapper>
                {loading ?
                    <ActivityIndicator color={COLORS.WHITE} />
                    : <Text style={styles.primaryBtnTxt}>{text}</Text>}
            </Wrapper>
        </TouchableOpacity>
    )
}

export const SocialButton = ({ onPress, icon, text, disabled, loading, style, productText }) => {
    const { styles } = stylez()
    return (
        <TouchableOpacity
            disabled={disabled || loading}
            onPress={onPress}
            style={[styles.socialBtnContainer, style]}
        >
            {text ?
                <RowWrapperBasic>
                    <Wrapper style={styles.socialIcon}>
                        {icon}
                    </Wrapper>
                    <Wrapper style={styles.socialBtnTxt}>
                        {loading ? <ActivityIndicator color={COLORS.PRIMARY_COLOR} />
                            : <Text style={[styles.socialBtnTxt, { fontSize: productText && 10 }]}>{text}</Text>}
                    </Wrapper>
                </RowWrapperBasic> :
                <Wrapper style={styles.socialIcon}>
                    {icon}
                </Wrapper>
            }
        </TouchableOpacity>
    )
}

export const TextButton = ({ style, onPress, text, textBtnStyle }) => {
    const { styles } = stylez()
    return (
        <TouchableOpacity activeOpacity={.8}
            style={style}
            hitSlop={{ right: 10, left: 10, top: 10, bottom: 10 }}
            onPress={onPress}>
            <Text style={[styles.btnText, textBtnStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}
