import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { imageAssets } from '../../constant/Option'
import Colors from '../../constant/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'


export default function YogaList({couseList}) {

  const route=useRouter();

  return (
    <View style={{
        marginTop:15
    }}>
      <Text style={{
        fontFamily:'tektur',
        fontSize: 25,
        marginBottom:20
      }}>Breathe. Stretch. Transform. {'\n'}Your AI Yoga Guide!🧘‍♂️✨</Text>

      <FlatList
        data={couseList}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=>(
            <TouchableOpacity 
              onPress={()=> route.push({
                pathname:'/yogaView',
                params:{
                    courseParams:JSON.stringify(item)
                }
              })}
              key={index} style={styles.courseContainer}>
                <Image source={imageAssets[item.banner_image]}
                  style={{
                  height:200,
                  width:'100%',
                  borderRadius:20
                }}/>
                <Text style={{
                  fontFamily:'outfit-Bold',
                  fontSize:15,
                  marginTop:10,
                  paddingHorizontal: 10
                }}>{item?.courseTitle}</Text>
                <View style={{
                  display:'flex',
                  flexDirection:'row',
                  alignItems:'center',
                  marginHorizontal:10
                }}>
                <Ionicons name="footsteps-outline" size={24} color="black" />
                <Text style={{
                  paddingHorizontal: 10,
                  fontFamily:'outfit'
                }}>{item?.chapters?.[0]?.steps?.length} Steps</Text>
                </View>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  courseContainer:{
    padding:15,
    backgroundColor:Colors.BG_GRAY,
    margin: 6,
    borderRadius: 15,
  }
})