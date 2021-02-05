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
import firestore from '@react-native-firebase/firestore';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const RealtimeDB = ({ navigation }) => {
    const UserData = async () => {
        // Alert.alert("SignUp"
        console.log(Email, password, Name, Contact)
        await auth()
            .createUserWithEmailAndPassword(Email, password)
            .then(async () => {
                const user = await firebase.auth().currentUser;
                console.log('User account created ', user);
                firestore()
                    .collection('Users')
                    .add({
                        Name: Name,
                        Email: Email,
                        Contact: Contact,
                        userid: user.uid
                    })
                    .then(() => {                     
                        console.log('User added!');
                    }).then(async () => {
                        await                        
                            navigation.navigate("Home")
                    })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            })
        // const userdata = firestore()
        //     .collection('Users')
        //     // .get()
        //     .add({
        //         Name: Name,
        //         Email: Email,
        //         Contact: Contact,
        //         // password: password
        //     })
        //     .then(() => {
        //         console.log('User added!', data);
        //     });

    }

    const [Name, setname] = useState("")
    const [Email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [Contact, setcontact] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 0.1, backgroundColor: "#f5f6f7", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <MaterialIcons
                    color={"#3172f5"}
                    name={"arrow-back-ios"}
                    size={28}
                    onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 28, marginLeft: 35, fontWeight: "600" }}>
                    Sign Up</Text>
            </View>
            <View style={{ flex: 1, marginTop: 40 }}>
                <Text style={{ fontWeight: '600', paddingHorizontal: 10 }}> YOUR INFORMATION</Text>
                <View style={{ flex: 0.5, justifyContent: "space-evenly", alignItems: 'center', }}>
                    <TextInput style={{ width: '90%', height: 48, backgroundColor: '#f5f6f7', fontSize: 20, paddingHorizontal: 20, borderRadius: 10 }}
                        placeholder={"Name"}
                        onChangeText={(text) => setname(text)}
                        autoCorrect={false}
                    />
                    <TextInput style={{ width: '90%', height: 48, backgroundColor: '#f5f6f7', fontSize: 20, paddingHorizontal: 20, borderRadius: 10 }}
                        placeholder={"Eamil"}
                        onChangeText={(text) => setemail(text)} />
                    <TextInput style={{ width: '90%', height: 48, backgroundColor: '#f5f6f7', fontSize: 20, paddingHorizontal: 20, borderRadius: 10 }}
                        placeholder={"Password"}
                        secureTextEntry
                        onChangeText={(text) => setpassword(text)} />
                    <TextInput style={{ width: '90%', height: 48, backgroundColor: '#f5f6f7', fontSize: 20, paddingHorizontal: 20, borderRadius: 10 }}
                        placeholder={"Mobile No."}
                        onChangeText={(text) => setcontact(text)} />
                </View>
                <Button
                    block style={{ width: '90%', height: 48, alignSelf: 'center' }}
                    onPress={() => UserData()}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>
                        Create Accout
                    </Text>
                </Button>
                
            </View>
        </SafeAreaView>
    )
}
export default RealtimeDB