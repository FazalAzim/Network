import React, { useState, createContext, useContext, useEffect } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import { appleAuth } from "@invertase/react-native-apple-authentication";
// import messaging from "@react-native-firebase/messaging";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import PushNotification from "react-native-push-notification";
// import { guideStoreRef } from "../utils/collectionRefs";
// import { Platform } from "react-native";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const userRef = firestore().collection("users");

export const AuthProvider = ({ children }) => {
  // 657947474234-gafa2g4ppccivtuu3j05m7546791095l.apps.googleusercontent.com

  const [currentAuth, setCurrentAuth] = useState(-1);
  const [currentUser, setCurrentUser] = useState(-1);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [yourGuides, setYourGuides] = useState([]);
  // const [first, setfirst] = useState(second)

  const onAuthStateChanged = (user) => {
    setCurrentAuth(user);
    if (initializing) setInitializing(false);
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "657947474234-301p6uvgsdm1ri8g25um12jkmamuuap9.apps.googleusercontent.com",
  //   });
  // }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    if (currentAuth !== -1) {
        if (currentAuth === null) {
        setCurrentUser(null);
      } else {
        getUserData();
      }
    }
  }, [currentAuth,currentUser]);
  //   METHOD TO GET USER DATA

  // REGISTER METHOD
  const register = async (fullName, email, password) => {
      if (!email || !fullName || !password) {
      Alert.alert("All fields must be filled properly!");
    } else {
      try {
        setLoading(true);
        const res = await auth().createUserWithEmailAndPassword(
          email,
          password
        );

        const currentUser = res.user;
        console.log(currentUser)

        if (currentUser) {
          await userRef.doc(currentUser.uid).set({
            id: currentUser.uid,
            email,
            fullName,
            imageUrl: "",
          });
        }
        setLoading(false);
      } catch (error) {
        Alert.alert("Error", error.message);
        setLoading(false);
      }
    }
  };

  // LOGIN METHOD
  const login = async (email, password) => {
      if (!email || !password) {
      Alert.alert("All fields must be filled");
    } else {
        try {
        setLoading(true);
        const res = await auth().signInWithEmailAndPassword(email, password);
        setLoading(false);
        return res;
      } catch (error) {
        Alert.alert("Error", error.message);
        setLoading(false);
      }
    }
  };

  //   LOGOUT METHOD
  const logout = () => {
    return auth().signOut();
  };

  const getUserData = async () => {
    try {
      const userDoc = await userRef.doc(currentAuth.uid).get();
      setCurrentUser(userDoc.data());
    } catch (error) {
        console.log(error);
      }
  };

  const signinWithGoogle = async () => {
    // Get the users ID token
     
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    setGoogleLoading(true);
    await auth()
      .signInWithCredential(googleCredential)
      .then(async (res) => {
        console.log("Response", res);
        if (res) {
          await userRef.doc(res.user.uid).set({
            id: res.user.uid,
            email: res.user.email,
            fullName: res.user.displayName,
            imageUrl: "",
          });
        
          setGoogleLoading(false)}
      })
      .catch((error) => {
        setGoogleLoading(false)
        Alert.alert("Error", error.message);
      })
    setGoogleLoading(false);
  };

  const signinWithApple = async () => {
      const appleAuthReqRes = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    if (!appleAuthReqRes.identityToken) {
      throw new Error("Apple Signin failed - no identify token returned");
    }
    const { identityToken, nonce } = appleAuthReqRes;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce
    );
    return auth()
      .signInWithCredential(appleCredential)
      .then(async (res) => {
        console.log("Response Apple", res);
        if (res)
          await userRef.doc(res.user.uid).set({
            id: res.user.uid,
            email: res.user.email,
            fullName: res.user.displayName || "",
            imageUrl: "",
          });
      });
  };

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
      getFcmToken();
    }
  };

  const getFcmToken = async () => {
    // let fcmToken = await AsyncStorage.getItem("fcmToken");
    // console.log("The old Token", fcmToken);
    // if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      await userRef.doc(currentAuth?.uid).update({
        token: fcmToken,
      });
      console.log("User updated..", fcmToken);
      // if (fcmToken) {
      //   console.log("The new token", fcmToken);
      //   await AsyncStorage.setItem("fcmToken", fcmToken);
      // }
    } catch (error) {
      console.log("Error", error);
    }
    // }
  };

  // useEffect(() => {
  //   getYourGuidesForCurrentUser();
  // }, []);

  // const getYourGuidesForCurrentUser = () => {
  //   const userId = currentAuth.uid;
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let temp = [];
  //       const yourGuidesSnap = await firestore()
  //         .collection("yourGuides")
  //         .where("userId", "==", userId)
  //         .get();
  //       yourGuidesSnap.forEach((doc) => {
  //         temp.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });

  //       console.log("Temp Guides", temp);
  //       setYourGuides(temp);
  //       return resolve(temp);
  //     } catch (error) {
  //       return reject(error);
  //     }
  //   });
  // };
  const notificationListener = async () => {
    try {
      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log(
          "Notification caused app to open from background state:",
          remoteMessage.notification
        );
        // navigation.navigate(remoteMessage.data.type);
      });
      messaging().onMessage(async (remoteMessage) => {
        console.log("Received in Foreground", remoteMessage);

        PushNotification.createChannel({
          channelId: "channel-id", // (required)
          channelName: "My channel", // (required)
        });
        PushNotification.localNotification({
          channelId: "channel-id",
          title: remoteMessage.notification.title,
          message: remoteMessage.notification.body, // (required)
          showWhen: true,
          color: "red",
        });
      });
      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            console.log(
              "Notification caused app to open from quit state:",
              remoteMessage.notification
            );
          }
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const values = {
    currentAuth,
    setCurrentAuth,
    register,
    login,
    logout,
    currentUser,
    getUserData,
    signinWithGoogle,
    loading,
    googleLoading,
    signinWithApple,
    requestUserPermission,
    notificationListener,
    yourGuides,
    setYourGuides,
  };
  if (initializing) return null;
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// export default AuthProvider;

// *********************************************************************
// import React, { createContext, useState, useContext, useEffect } from 'react';

// // Create the context
// const AuthContext = createContext();

// // Create a custom hook to use the auth context
// export const useAuth = () => useContext(AuthContext);

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(false);
//   const [loading, setLoading] = useState(true);

//   console.log("Current User ===>>", currentUser)

//   // Simulate a login function
//   const login = (email, password) => {
//     // Here you would authenticate against your backend
//     const user = { id: '123', email };
//     setCurrentUser(true);
//     setLoading(false);
//   };

//   // Simulate a logout function
//   const logout = () => {
//     setCurrentUser(false);
//   };

//   useEffect(() => {
//     // Check for current user on mount, for now, we'll just setLoading to false
//     setLoading(false);
//   }, []);

//   // The value that will be supplied to all components using this context
//   const value = {
//     currentUser,
//     setCurrentUser,
//     login,
//     logout,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };