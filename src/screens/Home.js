import React, { useState, useEffect, Profiler } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Image
} from 'react-native';
import { firebase } from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth';
import { Container, Content, Form, Item, Input, Label, Header, Icon, Button, } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { GoogleSignin, } from '@react-native-community/google-signin';
GoogleSignin.configure({
    // scopes: ['email', 'profile'],
    webClientId: '654457653950-s80p07310ogbn5mst173d3a5lo2ag3qp.apps.googleusercontent.com'
})


const Home = ({ navigation }) => {
    // async function onGoogleButtonPress() {
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();
    //     console.log(idToken)
    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    //     // Sign-in the user with the credential
    //     return auth().signInWithCredential(googleCredential);
    // };
    const [Email, setemail] = useState("")
    const [Password, setpassword] = useState("")
    const SignIn = async () => {
        // console.log(Email, Password)ß
        auth()
            .signOut()
            .then(() => console.log('User signed out!'))
            .catch(error =>{
                console.log (error)
            })
        //  console.log("hello")
        await auth()
            .signInWithEmailAndPassword(Email.toLocaleLowerCase(), Password)
            .then(() => {   
                console.log('User Sign In ')
            })
            .then(() => {
                navigation.navigate("Welcome")
            })
            .catch(error => {
                console.log(error)
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!')
                }
            })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 0.1, backgroundColor: "#f5f6f7", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <MaterialIcons
                    color={"#3172f5"}
                    name={"arrow-back-ios"}
                    size={28} />
                <Text style={{ fontSize: 28, marginLeft: 35, fontWeight: "600" }}>
                    Sign In</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontWeight: '600', paddingHorizontal: 10 }}> YOUR INFORMATION</Text>
                <View style={{ flex: 0.4, justifyContent: "space-evenly", alignItems: 'center', }}>
                    <TextInput style={{ width: '90%', height: 48, backgroundColor: '#f5f6f7', fontSize: 20, paddingHorizontal: 20, borderRadius: 10 }}
                        placeholder={"Email"}
                        onChangeText={(text) => setemail(text)} />
                    <TextInput style={{ width: '90%', height: 48, backgroundColor: '#f5f6f7', fontSize: 20, paddingHorizontal: 20, borderRadius: 10 }}
                        placeholder={"Password"}
                        onChangeText={(text) => setpassword(text)}
                        autoCorrect={false}
                        secureTextEntry />
                    <Button
                        block style={{ width: '90%', height: 48, alignSelf: 'center' }}
                        onPress={() => SignIn()}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>
                            Sign In
                    </Text>
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                    <Text style={{ fontWeight: '500' }}> Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("RealtimeDB")}>
                        <Text style={{ color: '#3172f5', fontWeight: '500' }}> SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}
export default Home