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
import { Container, Content, Form, Item, Input, Label, Header, Button } from 'native-base';
import { GoogleSignin, } from '@react-native-community/google-signin';
GoogleSignin.configure({
    // scopes: ['email', 'profile'],
    webClientId: '654457653950-s80p07310ogbn5mst173d3a5lo2ag3qp.apps.googleusercontent.com'
})


const GoogleLogin = ({ navigation }) => {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken)
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 0.8, alignItems: 'center', marginTop: 20,}}>

                <Item style={{ paddingHorizontal: 15, }} >
                    <Input
                        placeholder={"FirstName"}
                        onChangeText={(text) => setfirstname(text)} />
                </Item>
                <Item style={{ marginTop: 20, paddingHorizontal: 15 }}>
                    <Input
                        placeholder={"LastName"}
                        onChangeText={(text) => setlastname(text)}
                    />
                </Item>
                <Item style={{ marginTop: 20, paddingHorizontal: 15 }}>
                    <Input
                        placeholder={"Email"}
                        onChangeText={(text) => setemail(text)}
                    />
                </Item>
                <Item style={{ marginTop: 20, paddingHorizontal: 15 }}>
                    <Input
                        placeholder={"Password"}
                        onChangeText={(text) => setpassword(text)}
                    />
                </Item>
                <Button block style={{ marginTop: 30 }}
                    onPress={() => auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            console.log('User account created ');
                        })
                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                                console.log('That email address is already in use!');
                            }

                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                            }
                            console.error(error);
                        })}>
                    <Text>Sign Up</Text>
                </Button>
                <Button block
                    style={{ marginTop: 15 }}
                    onPress={() => navigation.navigate("Welcome")}>
                    <Text>
                        Login With Mobile Number
            </Text>
                </Button>
                <TouchableOpacity
                    onPress={() => onGoogleButtonPress().then(() => console.log("Google =>>>", 'Signed in with Google!'))}>
                    <Image source={{ uri: 'https://res.cloudinary.com/practicaldev/image/fetch/s--vnXTBSDI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/8ojcieyxpm2qj5kx3bgd.png' }}
                        style={{ width: 350, height: 40, marginTop: 30 }} />
                </TouchableOpacity>
            </View>
            <Button block onPress={()=> navigation.navigate("RealtimeDB")}>
                <Text>
                    DataBase
                </Text>
            </Button>


        </SafeAreaView>
    )
}
export default GoogleLogin
