import { View, Text} from 'react-native'
import React from 'react'
import Button from '../Shared/Button'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image';
import Colors from '../../constant/Colors';

export default function NoYoga() {
  const router=useRouter();
  return (
    <View style={{
        marginTop: 40,
        display:'flex',
        alignItems:'center'
    }}>
      <Image source={require('./../../assets/images/NoYoga.jpg')}
        style={{
            height:300,
            width:300
        }}
      />
      <Text style={{
        fontFamily:'outfit-Bold',
        fontSize:25,
        textAlign:'center'
      }}>Not Selected Yoga Plan</Text>

      <Button text={'+ Select New Yoga Plan'} onPress={()=>router.push('/addYoga')}/>
      <Button text={'Explore Existing Yoga(s)'}
        type='outline'
      />
    </View>
    
  )
}