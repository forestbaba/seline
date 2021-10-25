import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { USE_FROM_FACEBOOK, ADD_RECOVERY_EMAIL, OFFICIAL_RED, OFFICIAL_WHITE, USE_EMAIL_FOR_SECURITY } from '../../utility/constants';
import ProfileIconSvg from '../../assets/profileIconSvg.svg';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonBorder from '../../components/WhiteRoundCornerButtonWithBorder'
import { TextInput } from 'react-native-gesture-handler';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';
import { NavigationStackProp } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import { updateUserEmail } from '../../statemanagement/User/action';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

interface AddRec {
    navigation: NavigationStackProp
}

const AddRecoveryEmail: React.FC<AddRec> = ({ navigation }) => {
    const dispatch = useDispatch()
    const [authUser, setAuthUser] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const { userData: { loading, userEmailUpdate, updateEmailError } } = useSelector((state) => state);
    useEffect(() => {

        const check = async () => {
            let w: any = await AsyncStorage.getItem('user_details')
            setAuthUser(w)
        }
        check()

        if (userEmailUpdate && Object.keys(userEmailUpdate).length > 0) {
            console.log('≥≥≥≥≥≥≥≥≥≥.', userEmailUpdate)
            if (userEmailUpdate.error === true) {
                Toast.show({
                    type: `error`,
                    text1: 'Status',
                    text2: `${userEmailUpdate.message}`
                });
            } else {
                Toast.show({
                    type: 'success',
                    text1: 'Status',
                    text2: `${userEmailUpdate.message} 👋`
                });
                setTimeout(() => {
                    navigation.navigate('secureaccount')
                }, 3000);
            }
        }
        if (updateEmailError) {
            console.log('JJJ', updateEmailError)
        }
    }, [userEmailUpdate, updateEmailError])

    const handleUpdateEmail=()=>{
        let data={
            userId:authUser,
            email:email
        }
        dispatch(updateUserEmail(data))
        //navigation.navigate('secureaccount')
    }
    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={styles.buildprofile}>{ADD_RECOVERY_EMAIL}</Text>
                <Text style={styles.buildprofiledesc}>{USE_EMAIL_FOR_SECURITY}</Text>

                <Text style={styles.title}>Email</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput
                    handleOnChange={(text:any)=> setEmail(text)}
                     placeholder="userx@gmail.com" width="90%" />

                </View>
            </View>
            <View style={styles.child2}>
                {loading ? (
                    <ActivityIndicator size={'large'} color={OFFICIAL_RED} />
                ) : (
                        <WhiteRoundCornerButton color={OFFICIAL_RED}
                            handlePress={() => handleUpdateEmail()}
                            title="Update Email"
                            textcolor="#FFF" />
                    )
                }

                <TouchableOpacity>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
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
    skip: {
        textAlign: 'center',
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
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20

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
        justifyContent: "space-between"
    },
    title: {
        width: "100%",
        textAlign: "left",
        padding: 20,
        color: OFFICIAL_RED
    }
})
export default AddRecoveryEmail