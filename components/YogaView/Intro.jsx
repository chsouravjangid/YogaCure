import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { imageAssets } from '../../constant/Option'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constant/Colors';
import { useRouter } from 'expo-router'

export default function Intro({course}) {

    const router=useRouter();

  return (
    <View>
    
      <Image source={imageAssets[course.banner_image]}
        style={{
        height:250,
        width:'100%',
      }}/>
      
      <Pressable style={{
        position:'absolute',
        padding:10
    }}
        onPress={()=> router.back()}
    >
        <Ionicons name="arrow-back-outline" size={34} color="black" />
    </Pressable>
    </View>
  )
}