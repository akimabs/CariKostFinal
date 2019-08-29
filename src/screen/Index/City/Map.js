import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Map extends Component {
    render() {

        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: -6.282206,
                        longitude: 106.727602,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.09,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: -6.282206,
                            longitude: 106.727602
                        }}

                    />
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});