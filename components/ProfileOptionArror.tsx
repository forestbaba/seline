import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch,GestureResponderEvent, TouchableOpacity } from 'react-native';
import { OFFICIAL_GRAY, OFFICIAL_RED, OFFICIAL_WHITE } from '../utility/constants';
import FIcon from 'react-native-vector-icons/Feather';

const ProfileOptionArrow: React.FC<{ title?: string, handlePress?:(event: GestureResponderEvent)=>void }> = ({ title, handlePress }) => {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
    <>
    <TouchableOpacity onPress={handlePress}>
        <View style={styles.rowcontainer}>
            <Text style={styles.title}>{title}</Text>
            <FIcon name="chevron-right" size={20} color={OFFICIAL_GRAY} />
        </View>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "left",
        width: "70%",
        padding: 10
    },
    rowcontainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "flex-start",
        width: "100%",
        marginTop: 20
    },
    switch: {
        height: 30
    }
})
export default ProfileOptionArrow;