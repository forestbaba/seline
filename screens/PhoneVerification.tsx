import React, { ReactNode,useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PhoneInput from 'react-native-phone-input';
// import CountryPicker from 'react-native-country-picker-modal';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { OFFICIAL_RED, PHONE_INSTRUCTION } from '../utility/constants';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStackProp } from 'react-navigation-stack';


interface codeVerifyProps {
  CELL_COUNT: number,
  navigation: NavigationStackProp<{}>;
  route: NavigationStackProp<{}>;

}

const CodeVerification: React.FC<codeVerifyProps> = ({route, navigation }) => {

 
  const aceEditorRef = useRef();
  const [cca2, setCca2] = useState('')

  useEffect(()=>{
    let { phoneNumber } = route.params;

  },[])

const handleVerify=()=>{
  // navigation.navigate('accountcarousel')
  dispatch(authenticatePhone(data));

}
  return (
    <View style={styles.parent}>
      <Text style={styles.question}>What's your number?</Text>
      <Text style={styles.instruc}>{PHONE_INSTRUCTION}</Text>
      <View style={styles.phoneContainer}>
        <PhoneInput
          ref={aceEditorRef} />
        <KeyboardAwareScrollView
          style={styles.keyboard}
          keyboardShouldPersistTaps="always">
          <TextInput placeholder="phone" />
        </KeyboardAwareScrollView>
      </View>
      <WhiteRoundCornerButton
        title={"Use phone number"}
        color={OFFICIAL_RED}
        textcolor={"#fff"}
        marginTop={40}
        handlePress={() => navigation.navigate('accountcarousel')}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    marginTop: 40,
    paddingLeft: 30,

  },
  question: {
    fontSize: 40,
    paddingRight: 20,
    width: 350,
    color: "#E7000E",
    lineHeight: 50
  },
  instruc: {
    fontSize: 17,
    paddingRight: 20,
    //lineHeight:20,
    paddingTop: 40,
    paddingBottom: 20,
    // letterSpacing:2
  },
  //////
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    color: '#000',
    fontSize: 25,
    marginBottom: 25,
    fontWeight: 'bold',
  },
  pickerTitleStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  pickerStyle: {
    height: 60,
    width: 250,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#303030',
    backgroundColor: 'white',
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    textAlign: 'right',
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },

  searchBarStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 10,
  },
  phoneContainer: {
    flexDirection: "row"
  },
  keyboard: {
    flex: 1,
    width: '100%'
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },

})
export default CodeVerification;