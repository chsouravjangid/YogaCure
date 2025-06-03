import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from '../constant/Colors';
import { useRouter } from "expo-router";
import { Marquee } from '@animatereactnative/marquee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { UserDetailContext } from "../context/UserDetailContext";

export default function Index() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const router = useRouter();
  
  const imageList = [
    require('./../assets/images/1.jpg'),
    require('./../assets/images/c1.jpg'),
    require('./../assets/images/2.jpg'),
    require('./../assets/images/c2.jpg'),
    require('./../assets/images/3.jpg'),
    require('./../assets/images/c3.jpg'),
    require('./../assets/images/4.jpg'),
    require('./../assets/images/6.jpg'),
    require('./../assets/images/5.jpg'),
  ];

  // ✅ Use useEffect to prevent infinite rendering
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User detected:", user);
        try {
          const userRef = doc(db, "users", user.email);
          const userSnap = await getDoc(userRef);
  
          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUserDetail(userData);
            await AsyncStorage.setItem("userDetail", JSON.stringify(userData));
            router.replace('/(tabs)/home');
          } else {
            console.warn("User document not found!");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      } else {
        console.log("No user found, redirecting to login...");
        router.replace("/login");
      }
    });
  
    return () => unsubscribe();
  }, []);
  


  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <View>
          <Marquee spacing={10} speed={0.7} style={{ transform: [{ rotate: '-4deg' }] }}>
            <View style={styles.imageContainer}>
              {imageList.map((image, index) => (
                <Image source={image} key={index} style={styles.image} />
              ))}
            </View>
          </Marquee>
          <Marquee spacing={10} speed={0.4} style={{ transform: [{ rotate: '-4deg' }], marginTop: 10 }}>
            <View style={styles.imageContainer}>
              {imageList.map((image, index) => (
                <Image source={image} key={index} style={styles.image} />
              ))}
            </View>
          </Marquee>
          <Marquee spacing={10} speed={0.5} style={{ transform: [{ rotate: '-4deg' }], marginTop: 10 }}>
            <View style={styles.imageContainer}>
              {imageList.map((image, index) => (
                <Image source={image} key={index} style={styles.image} />
              ))}
            </View>
          </Marquee>
        </View>

        <View style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: '100%',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'outfit-Bold'
          }}>
            Welcome to the YogaCure!!
          </Text>

          <Text style={{
            fontSize: 15,
            textAlign: 'center',
            marginTop: 20,
            color: Colors.WHITE,
            fontFamily: 'outfit'
          }}>
            The AI integrated yoga app that makes your yoga efficient!
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/signUp')}>
            <Text style={[styles.buttonText, { color: Colors.PRIMARY, fontFamily: 'outfit' }]}>Get Started</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, { backgroundColor: Colors.PRIMARY, borderWidth: 1, borderColor: Colors.WHITE }]}
            onPress={() => router.push('/auth/signIn')}>
            <Text style={[styles.buttonText, { color: Colors.WHITE, fontFamily: 'outfit' }]}>Already have an Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    borderRadius: 25
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'outfit'
  }
});
