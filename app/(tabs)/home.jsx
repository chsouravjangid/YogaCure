import { View, Text, Platform, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Home/Header'
import Colors from '../../constant/Colors'
import NoYoga from '../../components/Home/NoYoga'
import {db} from './../../config/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { UserDetailContext } from '../../context/UserDetailContext'
import YogaList from '../../components/Home/YogaList'
import { Image } from 'expo-image'

export default function Home() {
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const [couseList,setCourseList]=useState([]);
  

  useEffect(()=>{
      userDetail&&GetCourseList();
  },[userDetail])

  const GetCourseList=async()=>{
    setCourseList([])
    const q=query(collection(db,'Courses'),where("createdBy",'==',userDetail?.email));
    const querySnapshot= await getDocs(q);

    querySnapshot.forEach((doc)=>{
      console.log("---->",doc.data());
      setCourseList(prev=>[...prev,doc.data()])
    })
  }

  return (
    <View style={{
      padding:25,
      paddingTop: Platform.OS == 'ios' && 45,
      flex:1,
      backgroundColor:Colors.WHITE
    }}>
   
      <Header/>
      {couseList?.length==0?
      <NoYoga/>:
      <YogaList couseList={couseList}/>}
    </View>
  )
}