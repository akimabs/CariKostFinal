import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Chat extends Component {
    render() {
        return (
            <View style={styles.template}>
                <Image source={require('../../assets/undraw_chatting_2yvo.png')} style={{ width: 250, height: 250 }} />
                <Text>yuk, coba chat sama pemilik atau teman kamu!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    template: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Chat;