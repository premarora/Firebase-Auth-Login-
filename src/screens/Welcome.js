import React, { useState, Profiler, useReducer,useCallback, useEffect } from 'react';
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
import firestore from '@react-native-firebase/firestore'
import database from '@react-native-firebase/database';
import {useFocusEffect} from '@react-navigation/native'
const Welcome = ({ navigation, route }) => {

    const [userData, setUserData] = useState({ Name: "", Email: "", Contact: "" })
    const [UserDocid, setUserDocid] = useState("")
    async function loadData() {
        // console.log(user.uid)
        const user = await firebase.auth().currentUser;
        console.log('user => ', user)
        firestore().collection("Users").where('userid', '==', user.uid).get().then(documentSnapshot => {
            setUserDocid(documentSnapshot.docs[0].id)
            console.log("Idddddddd ==>>>", documentSnapshot.docs[0].id)
            console.log('Doc => ', documentSnapshot.docs)
            // console.log('User exists: ', documentSnapshot.docs[0].data())
        })
    }
    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        if(UserDocid!==""){
            firestore().collection("Users").doc(UserDocid)
            .onSnapshot(function(doc) {
                console.log("Current data: ", doc.data());
                setUserData(doc.data())
            });
        }
    }, [UserDocid])

    // useEffect(() => {
    //     database()
    //         .ref(userData)
    //         .on('value', snapshot => {
    //             console.log('User data: ', snapshot.val());
    //         });
    // }, [])







    // },[user])
    // // Handle user state changes
    // function onAuthStateChanged(user) {
    //   setUser(user);
    //   if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    //  useEffect(()=>{

    //  },[])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 28, marginLeft: 35, fontWeight: "600" }}>
                    Welcome  <Text> {userData.Name.toUpperCase()} </Text>! </Text>
            </View>
            <View style={{ flex: 0.5, backgroundColor: "#dff5e3", alignItems: 'center', justifyContent: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: '500', }}> User Details</Text>
                <Text style={{ fontSize: 18, }}>{userData.Name}</Text>
                <Text style={{ fontSize: 18, }}>{userData.Email}</Text>
                <Text style={{ fontSize: 18 }}>{userData.Contact}</Text>
                <Button
                    block style={{ width: '50%', height: 48, alignSelf: 'center', marginTop: 40 }}
                    onPress={() => navigation.navigate("Update", { Docid: UserDocid })}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>
                        Update Detail
                    </Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}
export default Welcome