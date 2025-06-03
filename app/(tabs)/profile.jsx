import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Image } from 'expo-image'
import { ProfileMenu } from '../../constant/Option'
import Colors from '../../constant/Colors'
import { UserDetailContext } from '../../context/UserDetailContext'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { auth } from './../../config/firebaseConfig'
import { signOut } from 'firebase/auth'




export default function Profile() {

  const {userDetail,setUserDetail}=useContext(UserDetailContext)
  const router = useRouter(); 

  const onMenuClick = () => {
    signOut(auth)
      .then(() => {
        setUserDetail(null);
        router.push('/auth/signIn');
      })
      .catch((error) => {
        console.log('--------------------------->', error);
      });
  };
  
  

  const handleLogout = async () => {
    // try {
    //   await signOut(auth); // Firebase sign-out
    //   setUserDetail(null); // Clear user context
    //   router.replace('/auth/signIn'); // Redirect to login screen
    // } catch (error) {
    //   console.error("Logout failed:", error.message);
    // }
  };


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
      backgroundColor:Colors.WHITE,
      paddingHorizontal:20,
      flex:1
    }}>
    <Text style={{
      fontFamily:'outfit-Bold',
      fontSize:30,
      marginBottom:10
    }}>Profile</Text>
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      padding:10
    }}>
      <Image source={require('./../../assets/images/avatar.webp')}
        style={{
            height:100,
            width:100
        }}/>

        <Text style={{
            fontFamily:'outfit-Bold',
            fontSize: 27
        }}>{userDetail?.name}</Text>
        <Text style={{
            fontFamily:'outfit',
            fontSize: 18,
            color:Colors.GRAY
        }}>{userDetail?.email}</Text>

        <View style={{ padding: 20 }}>
          {ProfileMenu.map((item, index) => (
          <TouchableOpacity
          key={index}
          onPress={() => item.name === 'Logout' ? onMenuClick() : router.push(item.path)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#f5f5f5',
            borderRadius: 10
          }}
        >
          <Ionicons name={item.icon} size={24} color="black" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
        </TouchableOpacity>
       ))}
      </View>

      </View>
    </View>
    </View>
  )
}