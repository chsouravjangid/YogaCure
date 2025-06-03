import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constant/Colors'

export default function Steps({course}) {
  return (
      <ScrollView style={{ padding: 16 }}>

    <View style={{
        paddingBottom:10
    }}>
        <Text style={{
          fontFamily:'outfit-Bold',
          fontSize:25
        }}>{course?.courseTitle}</Text>
          <View style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            marginHorizontal:10
          }}>
          <Ionicons name="footsteps-outline" size={24} color="black" />
          <Text style={{
            paddingHorizontal: 10,
            fontFamily:'outfit',
            fontSize:16
          }}>{course?.chapters?.[0]?.steps?.length} Steps</Text>
          </View>
          <Text style={{
            fontFamily: 'outfit-Bold',
            fontSize:18,
            marginTop:10
          }}>Description: </Text>
          <Text style={{
            fontFamily:'outfit',
            fontSize:13,
            color:Colors.GRAY
          }}>{course?.description}</Text>
      </View>


      {course?.chapters?.map((item, index) => (
        <View key={index} style={{ marginBottom: 40 }}>
          {/* Title */}
          <Text style={{ fontFamily:'outfit-Bold',fontSize: 20, marginBottom: 5 }}>
            {item.title}:
          </Text>

          {/* Steps */}
          {Array.isArray(item.steps) && item.steps.map((step, i) => (
            <Text  
            key={i} style={{ paddingLeft: 10, fontFamily:'outfit', marginBottom:5 }}>{step}</Text>
          ))}

          {/* Benefits */}
          {Array.isArray(item.benefits) && item.benefits.map((benefit, i) => (
            <Text key={i} style={{ paddingLeft: 10 }}>✔ {benefit}</Text>
          ))}

          {/* Cautions */}
          {Array.isArray(item.cautions) && item.cautions.map((caution, i) => (
            <Text key={i} style={{ paddingLeft: 10, color: 'red' }}>⚠ {caution}</Text>
          ))}
        </View>
      ))}
      </ScrollView>
  )
}