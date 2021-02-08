import React, { ReactNode, useRef, useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PhoneInput from 'react-native-phone-input';
// import CountryPicker from 'react-native-country-picker-modal';
import WhiteRoundCornerButton from '../components/WhiteRoundCornerButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {OFFICIAL_RED,ENTER_CODE, PHONE_INSTRUCTION,ENTER_4_DIGIT_TEXT} from '../utility/constants';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { NavigationStackProp } from 'react-navigation-stack';

interface PhoneVer{
  CELL_COUNT:number,
  navigation: NavigationStackProp<{}>;
}
const CELL_COUNT = 4;

const PhoneVerification:React.FC<PhoneVer> =({navigation})=> {
    const aceEditorRef = useRef();

    const [cca2, setCca2] = useState('')

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
   
    return (
        <View style={styles.parent}>
            <Text style={styles.question}>{ENTER_CODE}</Text>
    <Text style={styles.instruc}>{ENTER_4_DIGIT_TEXT}</Text>
           <View style={styles.phoneContainer}>
           
                <KeyboardAwareScrollView
                style={styles.keyboard}
                keyboardShouldPersistTaps="always">
                </KeyboardAwareScrollView>
                </View>
            
            <View style={{marginLeft:40, marginRight:40}}>
            <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
              />
              </View>
              <View style={styles.actionButton}>
                <WhiteRoundCornerButton 
              title={"Continue"} 
              color={OFFICIAL_RED} 
              textcolor={"#fff"}
              // marginTop={40}
              handlePress={()=> navigation.navigate('accountcarousel)')}
              
              />
              </View>
              
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
      flex:1,
        marginTop:40,
        paddingLeft:30,

    },
    question:{
        fontSize:45,
        paddingRight:20,
        width:300,
        color:"#E7000E",
        lineHeight:50,
        fontWeight:'bold'
    },
    instruc:{
        fontSize:17,
        paddingRight:20,
        //lineHeight:20,
        paddingTop:40,
        paddingBottom:20,
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
      phoneContainer:{
        flexDirection:"row"
      },
      keyboard:{
        flex: 1, 
        width: '100%' 
      },
      root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    fontWeight:"bold",
    borderWidth: 2,
    borderRadius:15,
    borderColor: '#00000030',
    textAlign: 'center',
    padding:5
  },
  focusCell: {
    borderColor: OFFICIAL_RED,
  },
  actionButton:{
    position:"absolute",
    bottom:40,
    marginLeft:20,
    width:"100%"
  }
})
export default PhoneVerification;