import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { USE_FROM_FACEBOOK, SECURE_YOUR_ACCOUNT, OFFICIAL_RED, OFFICIAL_WHITE, ADD_A_USERNAME } from '../../utility/constants';
import ProfileIconSvg from '../../assets/profileIconSvg.svg';
import WhiteRoundCornerButton from '../../components/WhiteRoundCornerButton';
import WhiteRoundCornerButtonBorder from '../../components/WhiteRoundCornerButtonWithBorder'
import { TextInput } from 'react-native-gesture-handler';
import RoundCornerTextInput from '../../components/RoundCornerTextInput';
import { NavigationStackProp } from 'react-navigation-stack';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { updateUserPassword } from '../../statemanagement/User/action';


interface SecAcc {
    navigation: NavigationStackProp
}

const SecureYourAccount: React.FC<SecAcc> = ({ navigation }) => {

    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [localError, setlocalError] = useState<string>("")


    const dispatch = useDispatch()
    const [authUser, setAuthUser] = useState<string>("");

    const { userData: { loading, userPasswordUpdate, updatePasswordError } } = useSelector((state) => state);
    useEffect(() => {

        const check = async () => {
            let w: any = await AsyncStorage.getItem('user_details')
            setAuthUser(w)
        }
        check()

        if (userPasswordUpdate && Object.keys(userPasswordUpdate).length > 0) {
            if (userPasswordUpdate.error === true) {
                Toast.show({
                    type: `error`,
                    text1: 'Status',
                    text2: `${userPasswordUpdate.message}`
                });
            } else {
                Toast.show({
                    type: 'success',
                    text1: 'Status',
                    text2: `${userPasswordUpdate.message} 👋`
                });
                setTimeout(() => {
                    navigation.navigate('accountsetupdone')
                }, 3000);
            }
        }
        if (updatePasswordError) {
            console.log('JJJ', updatePasswordError)
        }
    }, [userPasswordUpdate, updatePasswordError])

    const handleUpdatePassword = () => {

        if (password.toLocaleLowerCase() !== confirmPassword.toLocaleLowerCase()) {
            setlocalError("Password and confirm password needs to match")
        } else {
            let data = {
                password,
                userId: authUser
            }
            setlocalError('')
            dispatch(updateUserPassword(data))
        }
        // navigation.navigate('accountsetupdone')
    }

    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={styles.buildprofile}>{SECURE_YOUR_ACCOUNT}</Text>
                <Text style={styles.buildprofiledesc}>{ADD_A_USERNAME}</Text>

                <Text style={styles.title}>Password</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput
                        isSecure
                        handleOnChange={(text: any) => setPassword(text)}
                        placeholder="************" width="90%" />

                </View>
                <Text style={styles.title}>Confirm Password</Text>
                <View style={styles.inputholder}>
                    <RoundCornerTextInput
                        isSecure
                        handleOnChange={(text: any) => setConfirmPassword(text)}
                        placeholder="*************" width="90%" />

                </View>
                <Text style={styles.error}>{localError}</Text>

            </View>
            <View style={styles.child2}>
                {loading ? (
                    <ActivityIndicator size={'large'} color={OFFICIAL_RED} />
                ):(
                        <WhiteRoundCornerButton
                            handlePress={() => handleUpdatePassword()}
                            color={OFFICIAL_RED}
                            title="Done" textcolor="#FFF" />
                )}

                {/* <TouchableOpacity>
                     <Text style={styles.skip}>Skip</Text>

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
    },
    error: {
        color: OFFICIAL_RED,
        padding: 20
    }
})
export default SecureYourAccount