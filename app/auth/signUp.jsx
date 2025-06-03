import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function SignUp() {
    const router=useRouter();
    const [fullName,setFullName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
    const CreateNewAccount=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(async(resp)=>{
            const user=resp.user;
            console.log(user);
            await SaveUser(user);
            //save user to db....
        })
        .catch(e=>{
            console.log(e.message)
        })
    }

    const SaveUser=async(user)=>{
        const data={
            name:fullName,
            email:email,
            member:false,
            uid:user?.uid
        }
        await setDoc(doc(db,'users',email),data)

        setUserDetail(data);

        router.replace('/(tabs)/home');
        //navigate to new screen
    }

  return (
    <View style={{
              backgroundColor:Colors.WHITE,
              flex:1
            }}>
            <Image source={require('./../../assets/images/wave1.png')}
                  style={{
                    width:'100%',
                    height:150,
                  }}
                />
    <View style={{
        display:'flex',
        alignItems:'center',
        paddingTop:60,
        padding:25,
        flex:1,
        backgroundColor:Colors.WHITE
    }}>
        <Image source={require('./../../assets/images/yogcure-white.png')}
            style={{
                height:100,
                width:'200'
            }}
        />

        <Text style={{
            margin:20,
            fontSize:27,
            fontFamily:'tektur'
        }}>Create New Account</Text>

        <TextInput placeholder='Full Name' onChangeText={(value)=>setFullName(value)} style={styles.textInput}/>
        <TextInput placeholder='Email' onChangeText={(value)=>setEmail(value)} style={styles.textInput}/>
        <TextInput placeholder='Password' onChangeText={(value)=>setPassword(value)} secureTextEntry={true} style={styles.textInput}/>

        <TouchableOpacity onPress={CreateNewAccount} style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            width:'100%',
            marginTop:25,
            borderRadius:10
        }}>
            <Text style={{
                fontFamily:'outfit',
                fontSize:20,
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit'
            }}>Create Account</Text>
        </TouchableOpacity>

        <View style={{
            display:'flex',
            flexDirection:'row', 
            gap: 5,
            marginTop:20
        }}>
        <Text>Already have an account?</Text>
            <Pressable
            onPress={()=>router.push('/auth/signIn')}
            >
                <Text style={{
                    color:Colors.PRIMARY,
                    fontFamily:'outfit-Bold'
                }}>Sign In Here</Text>
            </Pressable>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        width:'100%',
        height:50,
        padding:15,
        fontSize:18,
        marginTop:20,
        borderRadius:8
    }
})