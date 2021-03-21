import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { useState } from 'react';

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

   const onSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <View style={styles.container} >
            <TextInput
                placeholder="name"
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder="email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <Button
                title="Sign Up"
                onPress={() => onSignUp()}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e9f4f5",
      padding: 10,
      margin: 10,
    },
    top: {
      flex: 0.3,
      backgroundColor: "grey",
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    middle: {
      flex: 0.3,
      backgroundColor: "beige",
      borderWidth: 5,
    },
    bottom: {
      flex: 0.3,
      backgroundColor: "pink",
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });

export default Register


// import React, { Component } from 'react';
// import { View, Text, Button, TextInput } from 'react-native';

// import firebase from 'firebase';

// class Register extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             email: '',
//             password: '',
//             name: ''
//         }

//         this.onSignUp = this.onSignUp.bind(this);
//     }

//     onSignUp = () => {
//         const { email, password, name } = this.state;
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((result)=> {
//             firebase.firestore().collection("users")
//             .doc(firebase.auth().currentUser.uid)
//             .set({
//                 name,
//                 email
//             })
//             console.log(result)
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }

//     render() {
//         return (
//             <View>
//                 <TextInput
//                     placeholder="name"
//                     onChangeText={(name) => this.setState({ name })}
//                 />
//                 <TextInput
//                     placeholder="email"
//                     onChangeText={(email) => this.setState({ email })}
//                 />
//                 <TextInput
//                     placeholder="password"
//                     secureTextEntry={true}
//                     onChangeText={(password) => this.setState({ password })}
//                 />
//                 <Button
//                     title="Sign Up"
//                     onPress={() => this.onSignUp()}
//                 />
//             </View>
//         );
//     }
// }

// export default Register;


