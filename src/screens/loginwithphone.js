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
import { TextInput } from 'react-native-gesture-handler';


const Loginwithphone = ({navigation,route}) => {
const [phone,setphone]=useState("")  

  const   signInWithPhoneNumber =  async ()=> { 
    const  confirmation =  await  auth().signInWithPhoneNumber(phone) 
       console.log (confirmation)
       if (confirmation._auth._authResult)
       {
       navigation.navigate("confirmcode", { data: confirmation})
       }   
  }
  
    //  else if ( phone==("")) {
    //    alert("Enter Mobile Number ")
    //  }
    
    // if (
    //     await auth().signInWithPhoneNumber("")) 
    //   {
    //       console.log (signInWithPhoneNumber())
    //     alert("Enter Mobile Number")
    //   }
  
  
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center'}}>
            
            <View style={{ flex:0.4,alignItems: 'center',justifyContent:'space-evenly', }}>
                <TextInput style={{
                    borderBottomWidth: 0.7,
                    height: 50, fontSize: 23,
                    paddingHorizontal: 20,
                    width: 330
                }}
                  
                    placeholder={" +91  Enter Mobile Number"}
                    dataDetectorTypes="phoneNumber"
                    maxLength={13}
                 onChangeText={(text)=>setphone(text)}  
                />
                <TouchableOpacity style={{
                    width: "50%",
                    height: 50,
                    backgroundColor: '#5c7aff',
                    borderRadius:30,
                    alignItems:"center",
                    justifyContent:'center'
                }}
                onPress={()=>  signInWithPhoneNumber() }>
            {/* //  true :navigation.navigate("confirmcode"),false : alert("Enter 10 Digits Mobile Number") }> */}
                    <Text style={{color:"white",fontSize:17,fontWeight:'bold'}}>
                        Send Code
                        </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Loginwithphone