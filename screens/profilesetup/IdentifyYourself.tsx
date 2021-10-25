import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { USE_FROM_FACEBOOK, IDENTIFY_YOURSELF, OFFICIAL_RED, OFFICIAL_WHITE, INTRODUCE_YOURSELF } from '../../utility/constants';
import ProfileIconSvg from '../../assets/profileIconSvg.svg';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonBorder from '../../components/WhiteRoundCornerButtonWithBorder'
import { TextInput } from 'react-native-gesture-handler';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';
import { NavigationStackProp } from 'react-navigation-stack';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import { createUserDetails } from '../../statemanagement/User/action';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector} from 'react-redux';

interface Ident {
    navigation?: NavigationStackProp,
    handlePress?: ()=>void,
    ran?: ()=>void
}
const IdentifyYourself: React.FC<Ident> = ({ navigation}) => {
	const dispatch = useDispatch()

    const [gender, setGender] = useState('')
    const [selectedTextColor, setselectedTextColor] = useState(OFFICIAL_WHITE)
    const [clickBgColor, setClickBgColor] = useState(OFFICIAL_RED)
    const [selectedTextColor1, setselectedTextColor1] = useState(OFFICIAL_RED)
    const [clickBgColor1, setClickBgColor1] = useState(OFFICIAL_WHITE)
    const [newDate, setNewDate] = useState([])
    const [error, setError] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [authUser, setAuthUser] = useState<string>("");

    const { userData: { loading, userDet, updateError } } = useSelector((state) => state);


	useEffect(() => {

		const check = async () => {
			let w: any = await AsyncStorage.getItem('user_details')
			setAuthUser(w)
		}
        check()

        if (userDet && Object.keys(userDet).length > 0) {
            console.log('======Oya', userDet)
			if (userDet.error === true) {
				Toast.show({
					type: `error`,
					text1: 'Status',
					text2: `${userDet.message}`
				});
			} else {
				Toast.show({
					type: 'success',
					text1: 'Status',
					text2: `${userDet.message} 👋`
				});
				setTimeout(() => {
					navigation.navigate('emailrecovery')
				}, 3000);
			}
        }
        if(updateError){
            console.log('JJJ', updateError)
        }
    },[userDet,updateError])


    const handleOnChooseGender = (index: number) => {
        if (index === 1) {
            setClickBgColor(OFFICIAL_RED)
            setselectedTextColor('#FFF')

            setClickBgColor1(OFFICIAL_WHITE)
            setselectedTextColor1(OFFICIAL_RED)
            setGender("female")
        } else {


            setClickBgColor1(OFFICIAL_RED)
            setselectedTextColor1('#FFF')

            setClickBgColor(OFFICIAL_WHITE)
            setselectedTextColor(OFFICIAL_RED)
            setGender("male")

        }

    }
    const handlePress=()=>{   
        if(!name || name.length == 0 || newDate.length < 0 || gender.length < 0){
            setError('Please fill appropriate fields')
        }else{
            setError('')
            let newBirthday = newDate[0]+"-"+newDate[1]+'-'+newDate[2]
            let data={
                name, birthday:newBirthday, gender,
                userId:authUser
            }
            dispatch (createUserDetails(data))

        }
    }
    return (
        <View style={styles.parent}>

            <DatePicker
                mode="date"
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setNewDate(moment(date).format('DD-MM-YYYY').split('-'))
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />

            <View style={styles.child1}>
                <Text style={styles.buildprofile}>{IDENTIFY_YOURSELF}</Text>
                <Text style={styles.buildprofiledesc}>{INTRODUCE_YOURSELF}</Text>
                <Text style={styles.title}>I am a</Text>
                <View style={styles.genderHolder}>
                    <WhiteRoundCornerButtonBorder color={clickBgColor} title="Female" textcolor={selectedTextColor} onPress={() => handleOnChooseGender(1)} />
                    <WhiteRoundCornerButtonBorder color={clickBgColor1} title="Male  " textcolor={selectedTextColor1} onPress={() => handleOnChooseGender(2)} />
                </View>
                <Text style={styles.title}>Birthday</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput placeholder="MM" value={newDate.length > 0 ? newDate[0] : ""} maxLength={2} onFocus={() => setOpen(true)} />
                    <RoundCornerTextInput placeholder="DD" value={newDate.length > 0 ? newDate[1] : ""} maxLength={2} />
                    <View>
                        <RoundCornerTextInput placeholder="YYYY" maxLength={4}
                            value={newDate.length > 0 ? newDate[2] : ""} />
                        <Text style={styles.optext}>optional</Text>
                    </View>
                </View>
                <Text style={styles.title}>Name</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput handleOnChange={(text:any)=> setName(text)} placeholder="Add your name here" width="90%" />
                </View>
            <Text style={styles.error}>{error}</Text>
            </View>
            <View style={styles.child2}>
               {loading ? (
                    <ActivityIndicator size={'large'} color={OFFICIAL_RED} />
               ):(<WhiteRoundCornerButton
                    color={OFFICIAL_RED}
                    title="Update"
                    textcolor="#FFF"
                    handlePress={handlePress}
                />)}
                

                {/* <TouchableOpacity onPress={pick}>
                     <Text style={styles.usefromfacebook}>{USE_FROM_FACEBOOK}</Text>
                </TouchableOpacity> */}
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />

        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50
    },
    child1: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    child2: {
        flex: 0.5,
        justifyContent: "flex-end",
        // alignItems:'center',
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%",
        marginBottom: 20
    },
    usefromfacebook: {
        textAlign: 'center',
        color: OFFICIAL_RED,
        paddingTop: 10,
        paddingBottom: 10
    },
    buildprofile: {
        fontSize: 40,
        paddingTop: 10,
        paddingBottom: 10,
        color: OFFICIAL_RED
    },
    buildprofiledesc: {
        color: "#282F39",
        textAlign: 'center'
    },
    genderHolder: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around"
    },
    roundCornerTextInput: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputholder: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    title: {
        width: "100%",
        textAlign: "left",
        padding: 20,
        color: OFFICIAL_RED
    },
    optext: {
        marginTop: -10,
        marginLeft: 20,
        position: "absolute",
        marginBottom: 20,
        color: OFFICIAL_RED,
        fontWeight: "100"
    },
    error:{
        color:"red",
        padding:10
    }
})
export default IdentifyYourself