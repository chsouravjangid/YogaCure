import { Image } from 'expo-image'
import React from 'react'
import Colors from '../../constant/Colors'
import { Text, View } from 'react-native'

export default function AboutUs() {
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
      justifyContent:'center',
      alignItems: 'center',
      padding:10}}>

        <Text style={{
            fontFamily:'tektur',
            fontSize:30,
            marginBottom:20
        }}>About Us</Text>
        <Text style={{
            fontFamily:'outfit',
            color:Colors.GRAY,
            fontSize:15,
            marginBottom:20,
            
        }}>YogaCure.AI is developed by Sourav Jangid </Text>
        <Text style={{
            fontFamily:'outfit',
            color:Colors.GRAY,
            marginBottom:20,
            padding:25
        }}>Our YogaCure.AI is your personalized yoga companion, 
        using AI to recommend the best yoga practices based on your age, 
        gender, and health concerns. Whether you're a beginner or an expert, 
        our app provides tailored yoga sessions with guided instructions to 
        help you achieve wellness effortlessly. 🌿🧘‍♂️</Text>

       </View>
    </View>
  )
}
