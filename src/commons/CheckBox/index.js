import { Wrapper } from '@commons';
import { ICON } from '@constants';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const CheckBox = ({ checked,toggleCheckbox }) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
      <Wrapper style={[styles.checkbox, checked && styles.checked]}>
        {checked && <ICON.FontAwesome name="check" size={18} color="#fff" />}
      </Wrapper>
    </TouchableOpacity>
  )
}
