import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native'
import { Appbar } from 'react-native-paper'

export default class MyComponent extends Component {

    _onSearch = () => this.props.navigation.navigate('City');

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={() => this.props.navigation.navigate('Explore')}
                />
                <TextInput style={styles.header} placeholder="Masukan nama kota" />
                <Appbar.Action icon='search' onPress={this._onSearch} />
            </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: 250,
        borderColor: 'black',
    }
})