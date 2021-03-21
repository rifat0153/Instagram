import React from 'react';
import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FeedScreen from './main/Feed';
import AddScreen from './main/Add';
import ProfileScreen from './main/Profile';

const EmptyScreen = () => {
    return(null)
}

const Main = (props) => {
    const currentUser = useSelector(state => state.userState.currentUser);
    const Tab = createMaterialBottomTabNavigator();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());

    }, [])

    console.log('inside Main useSelector: ', { currentUser });

    if (!currentUser) {
        return (
            <View>
            </View>
        )
    }
    return (
        <Tab.Navigator initialRouteName="Feed" labeled={false} > 
            <Tab.Screen name="Feed" component={FeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen name="AddContainer" component={EmptyScreen}
                listeners = {({navigation}) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Add")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="plus-box"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen name="SandboxContainer" component={EmptyScreen}
                listeners = {({navigation}) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Sandbox")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="plus-box"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account-circle"
                            color={color}
                            size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

}

export default Main


// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchUser } from '../redux/actions';

// import FeedScreen from './main/Feed';


// class Main extends Component {

//     componentDidMount() {
//         this.props.fetchUser();
//     }

//     render() {
//         const { currentUser } = this.props;

//         console.log({ currentUser });
//         if (currentUser == undefined) {
//             return (
//                 <View></View>
//             )
//         }
//         // return (
//         //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
//         //         <Text>{currentUser.name} is logged in</Text>
//         //     </View>
//         // );

//         return (
//             <Tab.Navigator>
//                 <Tab.Screen name="Feed" component={FeedScreen} />
//                 {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//             </Tab.Navigator>
//         )
//     }
// }

// const mapStateToProps = (store) => ({
//     currentUser: store.userState.currentUser
// })
// const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Main);