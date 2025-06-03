import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Image } from 'expo-image';
import { imageAssets } from '../../constant/Option';
import { Ionicons } from '@expo/vector-icons';

import Intro from '../../components/YogaView/Intro';
import Colors from '../../constant/Colors';
import Steps from '../../components/YogaView/Steps';

export default function YogaView() {

    const {courseParams}=useLocalSearchParams();
    const course=JSON.parse(courseParams);

  return (
    <View style={{
      flex:1,
      backgroundColor:Colors.WHITE
    }}>
      <Intro course={course}/>
      <Steps course={course}/>
    </View>

  )
}