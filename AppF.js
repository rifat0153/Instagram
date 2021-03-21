// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import firebase from 'firebase';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './redux/reducers';
// import thunk from 'redux-thunk';

// import LandingScreen from './components/auth/Landing';
// import RegisterScreen from './components/auth/Register';
// import MainScreen from './components/Main';
// import OuterMainScreen from './components/OuterMain';
// import { useEffect } from 'react';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAh45FON4yih0BWLeiGTqsJdgB2K-EjPCI",
//     authDomain: "instagram-dev-6b609.firebaseapp.com",
//     projectId: "instagram-dev-6b609",
//     storageBucket: "instagram-dev-6b609.appspot.com",
//     messagingSenderId: "74067575914",
//     appId: "1:74067575914:web:d37c7c96a7649470717613",
//     measurementId: "G-8JSGHL0CJ1"
// };

// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
// }

// const Stack = createStackNavigator();

// const App = (props) => {

//     const [loaded, setLoaded] = useState(false);
//     const [loggedIn, setLoggedIn] = useState(false);


//     useEffect(() => {
//         firebase.auth().onAuthStateChanged((user) => {
//             if (!user) {
//                 console.log('user: ', user);
//                 setLoggedIn(false);
//                 setLoaded(true);
//             }
//             else {
//                 console.log('user: ', user);
//                 setLoggedIn(true);
//                 setLoaded(true);
//             }
//         })
//     }, [])

//     { console.log({ loggedIn }) }

//     if (!loaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
//                 <Text>Loading</Text>
//             </View>
//         )
//     }
//     if (!loggedIn) {
//         return (
//             <NavigationContainer>
//                 <Stack.Navigator initialRouteName="Landing">
//                     <Stack.Screen
//                         name="Landing"
//                         component={LandingScreen}
//                         options={{ headerShown: false }} />
//                     <Stack.Screen
//                         name="Register"
//                         component={RegisterScreen}
//                         options={{ headerShown: false }} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         );
//     }
//     return (
//         <Provider store={store}>
//             <OuterMainScreen />
//         </Provider>

//     )

// }

// export default App;