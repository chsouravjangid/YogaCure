import { UserDetailContext } from '../context/UserDetailContext';
import { useState } from "react";
import { Stack } from "expo-router";
import {useFonts} from "expo-font";

export default function RootLayout() {
  const [userDetail, setUserDetail] = useState(null);

  useFonts({
    'outfit':require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Bold':require('../assets/fonts/Outfit-Bold.ttf'),
    'tektur':require('./../assets/fonts/Tektur.ttf')
  })


  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <Stack screenOptions={{ headerShown: false }} />
    </UserDetailContext.Provider>
  );
}
