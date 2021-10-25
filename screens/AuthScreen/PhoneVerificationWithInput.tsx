import React, { ReactNode, useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator ,TouchableOpacity} from 'react-native';
// import CountryPicker from 'react-native-country-picker-modal';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { OFFICIAL_RED, ENTER_CODE, PHONE_INSTRUCTION, ENTER_4_DIGIT_TEXT } from '../../utility/constants';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { NavigationStackProp } from 'react-navigation-stack';
import {useDispatch, useSelector} from 'react-redux'
import { authenticatePhone } from '../../statemanagement/User/action';

interface PhoneVer {
  CELL_COUNT: number,
  navigation: NavigationStackProp<{}>;
  route: NavigationStackProp<{}>;
  title:String
}
const CELL_COUNT = 4;

const PhoneVerification: React.FC<PhoneVer> = ({route, navigation }) => {
  const { userData:{loading, codeVerifyAuthDetails, autherror}} = useSelector((state) => state);

  const aceEditorRef = useRef();
  const dispatch = useDispatch()

  const [cca2, setCca2] = useState('')
  const [authError, setAuthError] = useState<any>({})

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() =>{

    console.log('XXX', codeVerifyAuthDetails)
    if(autherror){
      console.log('LLL:', autherror)
      setAuthError(autherror)
    }
    if(codeVerifyAuthDetails && Object.keys(codeVerifyAuthDetails).length > 0){
      if(codeVerifyAuthDetails.error === false){
        navigation.navigate('accountcarousel')
      }
     }

  },[codeVerifyAuthDetails, autherror])
  const handleVerify=()=>{
    // navigation.navigate('accountcarousel')
    if(!value || value===""){
      setAuthError({message:"Please enter verification code"})
    }else{

    
    let data={phoneNumber:route.params.phoneNumber, code:value}
    console.log('HHH', data)
      dispatch(authenticatePhone(data));
    }
  //  navigation.navigate('accountcarousel)')

  
  }
  return (
    <View style={styles.parent}>
      <Text style={styles.question}>{ENTER_CODE}</Text>
      <Text style={styles.instruc}>{ENTER_4_DIGIT_TEXT}</Text>
      <View style={styles.phoneContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={styles.error_prompt}>Wrong number?</Text></TouchableOpacity>


        <KeyboardAwareScrollView
          style={styles.keyboard}
          keyboardShouldPersistTaps="always">
        </KeyboardAwareScrollView>
      </View>

      <View >
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
  {authError && authError.message ?  <Text style={styles.errorLabel}>{authError && authError.message}</Text> : null}

      </View>
      <View style={styles.actionButton}>
        <WhiteRoundCornerButton
          title={"Continue"}
          color={OFFICIAL_RED}
          textcolor={"#fff"}
          loading={false}

          // marginTop={40}
          handlePress={handleVerify}


        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    marginTop: 40,
    paddingLeft: 20,

  },
  question: {
    fontSize: 45,
    paddingRight: 20,
    width: 300,
    color: "#E7000E",
    lineHeight: 50,
    fontWeight: 'bold'
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
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 65,
    height: 65,
    lineHeight: 38,
    fontSize: 24,
    fontWeight: '900',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: OFFICIAL_RED,
    textAlign: 'center',
    margin:5,
    padding: 5
  },
  focusCell: {
    borderColor: OFFICIAL_RED,
  },
  actionButton: {
    position: "absolute",
    bottom: 40,
    marginLeft: 20,
    width: "100%"
  },
  error_prompt:{
    color:OFFICIAL_RED,
    fontWeight:"500"
  },
  errorLabel:{
    color:OFFICIAL_RED,
    width:"90%",
    textAlign:"center",
    padding:20
  }
})
export default PhoneVerification;