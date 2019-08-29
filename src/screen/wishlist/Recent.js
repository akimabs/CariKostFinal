import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Wishlist extends Component {
    render() {
        return (
            <View style={styles.template}>
                <Image source={require('../../assets/undraw_online_wishes_dlmr.png')} style={{ width: 250, height: 250 }} />
                <Text>yah, kamu belum mempunyai wishlist..</Text>
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

export default Wishlist;