import React from 'react';
import { MainWrapper, PrimaryButton, Text, Wrapper } from '@commons';
import { Check_Icon } from '@assets';
import { styles } from './styles'; 
import { ROUTES } from '@constants';

export const VerificationSubmit = ({ navigation }) => {
  return (
    <MainWrapper style={styles.mainWrapper}>
      <Wrapper style={styles.checkIconWrapper}><Check_Icon /></Wrapper>
      <Text style={styles.titleText}>Verification Submitted</Text>
      <Text style={styles.descriptionText}>Thank you for providing your information. SkyyLytes will reach out if additional details are required.</Text>
      <Text style={styles.additionalText}>Your account verification is under review. You will receive a notification and email once verification is complete. Until then you cannot stream any content.</Text>
      <PrimaryButton text={'Back to Home'} style={styles.primaryButton} onPress={() => navigation.navigate(ROUTES.HOME)} />
    </MainWrapper>
  );
};
