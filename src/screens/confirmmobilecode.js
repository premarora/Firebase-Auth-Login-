import React, { useState, useEffect, Profiler } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Image, Alert
} from 'react-native';
import { firebase } from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth';
import { Container, Content, Form, Item, Input, Label, Header, Button } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
const confirmcode = ({navigation,route}) => {
    const [code, setcode] = useState("")
    const confirmCode = async () => {
    const { data } = route.params;
    //data.confirm
        try {
         const  confirm = await data.confirm(code)
            console.log(confirm)
        navigation.navigate("Home")
        } catch (error) {
            console.log('Invalid code.');
        }

    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: "space-evenly" }}>
                <TextInput style={{
                    borderBottomWidth: 0.7,
                    height: 50, fontSize: 23,
                    paddingHorizontal: 20,
                    width: 250
                }}

                    placeholder={" Enter OTP Code"}
                    dataDetectorTypes="phoneNumber"
                    maxLength={13}
                    onChangeText={(text) => setcode(text)}
                />
                <TouchableOpacity style={{
                    width: "50%",
                    height: 50,
                    backgroundColor: '#5c7aff',
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                    onPress={() => confirmCode()}>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: 'bold' }}>
                        Confirm
                        </Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}
export default confirmcode