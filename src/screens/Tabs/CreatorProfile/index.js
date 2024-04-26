import React, { useState } from 'react'
import { height, width } from '@helpers'
import { COLORS, FONTS, ICON, ROUTES } from '@constants'
import { SelectList } from 'react-native-dropdown-select-list'
import { Upload_Icon } from '@assets'
import ImagePicker from 'react-native-image-crop-picker';
import { InputWithTitle, MainWrapper, PrimaryButton, RowWrapperBasic, ScrollWrapper, SeparatorBasic, Seperator, SocialButton, Text, Wrapper } from '@commons'

export const CreatorProfile = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const data = [
    // { key: '1', value: 'File1', disabled: true },
    { key: '2', value: 'File2' },
    { key: '3', value: 'File3' },
    // { key: '4', value: 'File4', disabled: true },
    { key: '5', value: 'File5' },
    { key: '6', value: 'File6' },
    { key: '7', value: 'File7' },
  ];

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      // console.log(image.path);
      setImageUri(image.path);

    });
  }

  return (
    <MainWrapper style={{ paddingHorizontal: width(3),backgroundColor:COLORS.WHITE}}>
      <Wrapper style={{ width: width(95), marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <ICON.Entypo name='chevron-thin-left' color={COLORS._3838} size={22} onPress={() => navigation.goBack()} />
        <Wrapper style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: COLORS._1E1F, fontSize: 20, fontFamily: FONTS.URBAN_BOLD }}>Verify Account</Text>
        </Wrapper>
      </Wrapper>
      <ScrollWrapper>
        <Wrapper>
          <Text style={{ fontSize: 15, fontFamily: FONTS.URBAN_SEMIBOLD }}>Identify verification</Text>
          <Text style={{ marginTop: height(2), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Document type</Text>
          <Wrapper style={{ marginVertical: height(1) }}>
            <SelectList
              // onSelect={() => alert(selected)}
              placeholder='Select'
              setSelected={setSelected}
              fontFamily={FONTS.URBAN_REGULAR}
              data={data}
              inputStyles={{ color: COLORS.LIGHT_GRAY }} //override default styles
              arrowicon={<ICON.AntDesign name='down' color={COLORS._3C3C} size={20} />}
              search={false}
              boxStyles={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA }}
              dropdownTextStyles={{ color: COLORS._3C3C }}
            // defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}   //default selected option
            />
          </Wrapper>
          <Text style={{ color: COLORS._3C3C, fontSize: 11, fontFamily: FONTS.URBAN_REGULAR }}>Use a valid government-issued document</Text>
          <SocialButton icon={<Upload_Icon />} style={{ marginVertical: height(2), borderStyle: 'dashed', borderColor: COLORS.PRIMARY_COLOR, backgroundColor: COLORS.BD_COLOR, width: width(94), height: height(6) }} text={"Upload document"} styleText={{ paddingLeft: 5, color: COLORS.PRIMARY_COLOR, fontSize: 13, fontFamily: FONTS.URBAN_SEMIBOLD }} onPress={pickImage} />
          <Wrapper style={{ marginVertical: height(1) }}>
            <Text style={{ fontSize: 15, fontFamily: FONTS.URBAN_SEMIBOLD }}>Notability</Text>
            <Text style={{ marginTop: height(1), color: COLORS._3C3C, fontSize: 11, fontFamily: FONTS.URBAN_REGULAR }}>Tell us what your profile represents and talks about.</Text>
          </Wrapper>
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Category</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <SelectList
            // onSelect={() => alert(selected)}
            placeholder='Select'
            setSelected={setSelected}
            fontFamily={FONTS.URBAN_REGULAR}
            data={data}
            inputStyles={{ color: COLORS.LIGHT_GRAY }} //override default styles
            arrowicon={<ICON.AntDesign name='down' color={COLORS._3C3C} size={20} />}
            search={false}
            boxStyles={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA }}
            dropdownTextStyles={{ color: COLORS._3C3C }}
          // defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}   //default selected option
          />
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Country/region</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <SelectList
            // onSelect={() => alert(selected)}
            placeholder='Select'
            setSelected={setSelected}
            fontFamily={FONTS.URBAN_REGULAR}
            data={data}
            inputStyles={{ color: COLORS.LIGHT_GRAY }} //override default styles
            arrowicon={<ICON.AntDesign name='down' color={COLORS._3C3C} size={20} />}
            search={false}
            boxStyles={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA  }}
            dropdownTextStyles={{ color: COLORS._3C3C }}
          // defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}   //default selected option
          />
          <Text style={{ marginTop: height(1), color: COLORS._3C3C, fontSize: 11, fontFamily: FONTS.URBAN_REGULAR }}>Enter the country or region where your target audience is mostly located.</Text>
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Target audience</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA  }} containerStyle={{ marginBottom: height(0) }} />
          <Text style={{ marginTop: height(1), color: COLORS._3C3C, fontSize: 11, fontFamily: FONTS.URBAN_REGULAR }}>Add the type of your audiences. Include who they are, what they're
            interested in and why they subscribe to you.</Text>
        </Wrapper>
        <RowWrapperBasic style={{ marginVertical: height(1), gap: 2 }}>
          <Text style={{ fontSize: 15, fontFamily: FONTS.URBAN_SEMIBOLD }}>Social media accounts</Text>
          <Text style={{ color: COLORS.DARK_GRAY, fontSize: 15, fontFamily: FONTS.URBAN_SEMIBOLD }}>(optional)</Text>
        </RowWrapperBasic>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Facebook</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='https://www.facebook.com/meliavid' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA  }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Instagram</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='https://www.instagram.com/meliauax' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA  }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Twitter</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='https://www.twitter.com/Meliatwitter' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA  }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Youtube</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='https://www.youtube.com/meliavid' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA  }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <SeparatorBasic lineStyle={{ marginVertical: height(2), backgroundColor: COLORS._F1F1 }} />
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Official Website</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='www.melia.com' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(2), fontSize: 15, fontFamily: FONTS.URBAN_SEMIBOLD }}>Contact details</Text>
        <Text style={{ marginTop: height(2), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Official email address</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='meliaofficial@gmail.com' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Contact email address</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='melia@gmail.com' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Phone number</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='+01 985 565 36654' placeholderTextColor={COLORS.BLACK} inputStyle={{ borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA }} containerStyle={{ marginBottom: height(0) }} />
        </Wrapper>
        <Text style={{ marginTop: height(1), fontSize: 13, fontFamily: FONTS.URBAN_REGULAR }}>Address</Text>
        <Wrapper style={{ marginVertical: height(1) }}>
          <InputWithTitle placeholder='Warmwell Leisure Resor Warmwell DT2 8JE' placeholderTextColor={COLORS.BLACK} numberOfLines={10} multiline={true} inputStyle={{ height: height(18), textAlignVertical: 'top', borderRadius: 7, borderColor: COLORS._EBEB, borderWidth: 1, backgroundColor: COLORS._FAFA }} containerStyle={{ marginBottom: height(0), height: height(18) }} />
        </Wrapper>
      </ScrollWrapper>
      <PrimaryButton text={'Submit'} style={{ width: width(95), borderRadius: 6, marginTop: width(2) }} onPress={() => navigation.navigate(ROUTES.VERIFICATION_SUBMIT)} />
    </MainWrapper>
  )
}

