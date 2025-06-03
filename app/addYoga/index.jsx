import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import Colors from '../../constant/Colors';
import Button from '../../components/Shared/Button';
import {GenerateCourseAiModel, GenerateTopicsAiModel} from '../../config/AiModel';
import Prompt from '../../constant/Prompt';
import {db} from './../../config/firebaseConfig'
import { UserDetailContext }  from './../../context/UserDetailContext'
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';


export default function AddYoga() {
     const [loading,setLoading]=useState(false);
     const [userInput,setUserInput]=useState();
     const [topics,setTopics]=useState([]);
     const [selectedTopics,setSelectedTopics]=useState([]);
     const {userDetail,setUserDetail}=useContext(UserDetailContext)
     const router=useRouter();
     // onGenerateTopic -->>>
     const onGenerateYoga=async()=>{
        setLoading(true);
        //get by ai model...
        const PROMPT=userInput + Prompt.IDEA;
        const aiResp=await GenerateTopicsAiModel.sendMessage(PROMPT)
        const topicIdea=JSON.parse(aiResp.response.text());
        console.log(topicIdea);
        setTopics(topicIdea?.yoga_suggestions);
        setLoading(false);
     }

     const onTopicSelect=(topic)=>{
       const isAlreadyExist=selectedTopics.find((item)=>item==topic);
       if(!isAlreadyExist){
        setSelectedTopics(prev=>[...prev,topic]);
       }
       else{
        const topics=selectedTopics.filter(item=>item!==topic);
        setSelectedTopics(topics);
       }
     }

     const isTopicSelected=(topic)=>{
      const selection=selectedTopics.find(item=>item==topic);
      return selection?true:false
     }

     //onGenerateCourse -->>
     const onGenerateCourse = async()=>{
        setLoading(true);

        const PROMPT = selectedTopics+Prompt.COURSE;

        try{
        const aiResp=await GenerateCourseAiModel.sendMessage(PROMPT)

        const resp=JSON.parse(aiResp.response.text());
        const courses=resp.courses;
        console.log(courses);

        // save course info to database

        courses?.forEach(async(course) => {
          const docId= Date.now().toString()
          await setDoc(doc(db, 'Courses',docId),{
            ...course,
            createdOn:new Date(),
            createdBy:userDetail?.email,
            docId:docId
          })
        })
        router.push('/(tabs)/home')
        setLoading(false);
      }
      catch(e)
      {
        setLoading(false);
      }
        
        
     }

  return (
    <View style={{
        padding:25,
        backgroundColor:Colors.WHITE,
        flex:1
    }}>
      <Text style={{
        fontFamily:'outfit-Bold',
        fontSize: 27,
      }}>Create New Yoga Plan</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:24
      }}>Which problem are you facing?</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:15,
        marginTop:10,
        color:Colors.GRAY
      }}>Tell us about your body concern to get personalized yoga recommendations!</Text>

      <TextInput placeholder='(e.g., back pain, stress relief)'
        style={styles.textInput}
        numberOfLines={3}
        multiline={true}
        onChangeText={(value)=>setUserInput(value)}
      />

      <Button text={'Generate Yoga'} type='outline' 
      onPress={()=>onGenerateYoga()} loading={loading}/> 
      
      <View style={{
        margin:15
      }}>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 15
        }}>Select all yoga which you want to add in your Yoga plan.</Text>
      </View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap',
          gap:10,
          marginTop:6,
          marginBottom:10
        }}>
          {topics.map((item,index)=>(
            <Pressable key={index} onPress={()=>onTopicSelect(item)}>
            <Text style={{
              padding:7,
              borderWidth:0.4,
              borderRadius:99,
              paddingHorizontal:15,
              backgroundColor:isTopicSelected(item)?Colors.PRIMARY:null,
              color:isTopicSelected(item)?Colors.WHITE:Colors.PRIMARY
            }}>{item}</Text>
            </Pressable>
          ))}
        </View>

        {selectedTopics?.length>0 && <Button text='Generate Yoga Plan'
          onPress={()=>onGenerateCourse()}
          loading={loading}
        />}
      </View>
  )
}
const styles = StyleSheet.create({
    textInput:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        height:100,
        marginTop:10,
        alignItems:'flex-start',
        fontSize:15
    }
})