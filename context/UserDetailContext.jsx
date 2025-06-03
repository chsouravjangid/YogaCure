import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth, db, onAuthStateChanged } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("userDetail");
        if (storedUser) {
          setUserDetail(JSON.parse(storedUser));
          return;
        }
      } catch (error) {
        console.error("Error restoring user:", error);
      }

      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const email = firebaseUser.email; // Do NOT convert to lowercase here
          const userRef = doc(db, "users", email);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            setUserDetail(userData);
            await AsyncStorage.setItem("userDetail", JSON.stringify(userData));
          } else {
            console.warn("User document not found!");
            setUserDetail(null);
          }
        } else {
          setUserDetail(null);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    };

    restoreUser();
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {!loading && children}
    </UserDetailContext.Provider>
  );
};
