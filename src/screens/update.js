import React, { useState, Profiler, useReducer, useEffect } from 'react';
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
const Update = ({ navigation,route }) => {
    const {Docid} = route.params;
const [name,setname]=useState("") 
const update = async()=>{
await  firestore()
  .collection('Users')
   .doc(Docid)
    .update({
     Name:name
      })
     .then(() => {
     console.log('User updated!');
        navigation.pop()
        })}
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 0.1, backgroundColor: "#f5f6f7", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <MaterialIcons
                    color={"#3172f5"}
                    name={"arrow-back-ios"}
                    size={28}
                    onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 28, marginLeft: 35, fontWeight: "600" }}>
                    Edit Detail</Text>
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
                    onPress={() => update()}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: "bold" }}>
                        Update
                    </Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}
export default Update