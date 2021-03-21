import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}> 
                <Text style={styles.boxOne} >One</Text>
                <Text style={styles.boxTwo}>Two</Text>
            </View>
            <View style={styles.container2}> 
                <Text style={styles.boxThree}>Three</Text>
                <Text style={styles.boxFour}>Four</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: 40,
        backgroundColor: '#333',
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'pink',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
        // margin: 30,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 10,
        margin: 20,
    },
});

export default Sandbox
