import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from '../../constant/Colors'
import { useRouter } from 'expo-router';
import { auth, db } from '../../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function SignIn() {
    const router=useRouter();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const {userDetail,setUserDetail}=useContext(UserDetailContext)
    const [loading,setLoading]=useState(false);
    const onSignInClick=()=>{
        setLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        
        .then(async(resp)=>{
            const user=resp.user
            console.log(user)
            await getUserDetails();
            setLoading(false);
            router.replace('/(tabs)/home')

        }).catch(e=>{
            console.log(e)
            setLoading(false);
            ToastAndroid.show('Incorrect Email & Password',ToastAndroid.BOTTOM)
        })
    }

    const getUserDetails=async()=>{
        const result=await getDoc(doc(db,'users',email));
        console.log(result.data())
        setUserDetail(result.data())
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
            paddingTop:100,
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
                fontSize:30,
                fontFamily:'tektur'
            }}>Welcome Again!</Text>
    
            <TextInput placeholder='Email' 
            onChangeText={(value)=>setEmail(value)}
            style={styles.textInput}/>
            <TextInput placeholder='Password'
            onChangeText={(value)=>setPassword(value)}
            secureTextEntry={true} style={styles.textInput}/>
    
            <TouchableOpacity 
            onPress={onSignInClick}
            disabled={loading}
            style={{
                padding:15,
                backgroundColor:Colors.PRIMARY,
                width:'100%',
                marginTop:25,
                borderRadius:10
            }}>
                {!loading? <Text style={{
                    fontFamily:'outfit',
                    fontSize:20,
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit'
                }}>Sign In</Text>:
                <ActivityIndicator size={'large'} color={Colors.WHITE}/>
                }
            </TouchableOpacity>
    
            <View style={{
                display:'flex',
                flexDirection:'row', 
                gap: 5,
                marginTop:20
            }}>
            <Text>Don't have an account?</Text>
                <Pressable
                onPress={()=>router.push('/auth/signUp')}
                >
                    <Text style={{
                        color:Colors.PRIMARY,
                        fontFamily:'outfit-Bold'
                    }}>Sign Up Here</Text>
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
