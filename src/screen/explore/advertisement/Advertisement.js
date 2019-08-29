import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TextInput, Picker } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from 'react-native-paper'
import { Marker } from 'react-native-maps';
import axios from 'axios'
import ImagePicker from 'react-native-image-picker'
import AsyncStorage from '@react-native-community/async-storage'

import GreyButton from '../../../components/grey-button'
import env from '../../../env/env'

export default class Iklan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            latitude: '',
            longitude: '',
            photo: null,
            type: '',
            price: '',
            owner_phone: '',
            token: '',
            region: {
                latitude: -6.280229,
                longitude: 106.710818,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            markerRegion:
            {
                latitude: -6.90389,
                longitude: 107.61861,
            }
        }
    }


    handleImagePicker = () => {
        const options = {
            title: 'Pilih Gambar',
            customButtons: [],
            storageOptions: {
                skipBackup: true,
                path: '../../assets'
            },
        }
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let image = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                }
                const source = image;
                this.setState({
                    photo: source
                })
            }
        })
    }

    handleRegionChange = (region) => {
        this.setState({
            region,
            data: {
                ...this.state.data,
                region: {
                    latitude: region.latitude,
                    longitude: region.longitude,
                }
            }
        })
        if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(region, 100);
        }

    }

    onRegionChange(region) {
        this.setState({ region });
    }

    onAds = () => {
        this.actAdsAsync()
    }

    async componentWillMount() {
        const token = await AsyncStorage.getItem('userToken')
        this.setState({
            token: token
        })
    }

    actAdsAsync = async () => {
        let tempUser = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            photo: this.state.photo,
            type: this.state.type,
            price: this.state.price,
            owner_phone: this.state.owner_phone
        }

        let data = new FormData()
        data.append('name', this.state.name),
            data.append('address', this.state.address),
            data.append('city', this.state.city),
            data.append('latitude', this.state.region.latitude),
            data.append('longitude', this.state.region.longitude),
            data.append('photo', this.state.photo),
            data.append('type', this.state.type),
            data.append('price', this.state.price),
            data.append('owner_phone', this.state.owner_phone)

        await axios.post(env.host + 'dorm', data, {
            headers: {
                authorization: 'Bearer ' + await AsyncStorage.getItem('userToken'), 'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                alert('Selamat iklan anda sudah terpasang')
                this.props.navigation.navigate('PrivateNav')
            })
            .catch((error) => {
                alert(error)
            });
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <View style={styles.field}>
                            <Text style={styles.text}>Nama Kost *</Text>
                            <TextInput onChangeText={(name) => this.setState({ name })} placeholder='masukan nama kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Alamat Kost  *</Text>
                            <TextInput onChangeText={(address) => this.setState({ address })} placeholder='masukan alamat kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Nama Kota *</Text>
                            <TextInput onChangeText={(city) => this.setState({ city })} placeholder='masukan alamat kost' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Search Alamat *</Text>
                            <View style={{ marginBottom: 10, marginTop: 10, height: 200, paddingLeft: 10, paddingRight: 10 }}>
                                <View style={styles.container}>
                                    <MapView style={styles.map}
                                        region={this.state.region}
                                        onRegionChangeComplete={this.handleRegionChange}
                                    >
                                        <Marker.Animated
                                            ref={marker => {
                                                this.marker = marker;
                                            }}
                                            coordinate={this.state.markerRegion}
                                        />
                                    </MapView>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.text}>Latitude</Text>
                                    <TextInput value={this.state.region.latitude.toString()} underlineColorAndroid='#00b894' />
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.text}>Longitude</Text>
                                    <TextInput value={this.state.region.longitude.toString()} underlineColorAndroid='#00b894' />
                                </View>
                            </View>
                            <Button onPress={this.handleImagePicker} style={{ borderRadius: 10, backgroundColor: '#00a663', width: 200, marginTop: 10 }}>
                                <Text style={{ color: 'white' }}>Upload Gambar</Text>
                            </Button>
                            {
                                this.state.photo == null ? <View style={{ marginTop: 10 }} /> : <View style={{ height: 200, width: '100%', padding: 5 }}>
                                    <Image source={this.state.photo} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                                </View>
                            }
                            <Text style={styles.text}>Tipe Kost *</Text>
                            <Picker
                                selectedValue={this.state.type}
                                style={{ flex: 1 }}
                                onValueChange={(itemValue) =>
                                    this.setState({ type: itemValue })
                                } styles={{ fontSize: 18 }}>
                                <Picker.Item label="Putra" value="Putra" />
                                <Picker.Item label="Putri" value="Putri" />
                                <Picker.Item label="Campur" value="Campur" />
                            </Picker>
                            <Text style={styles.text}>Harga *</Text>
                            <TextInput keyboardType={'numeric'} onChangeText={(price) => this.setState({ price })} placeholder='masukan harga' underlineColorAndroid='#00b894' ></TextInput>
                            <Text style={styles.text}>Nomor Ponsel</Text>
                            <TextInput keyboardType={'numeric'} onChangeText={(owner_phone) => this.setState({ owner_phone })} placeholder='masukan nomor telepon pemilik kost' underlineColorAndroid='#00b894' ></TextInput>
                        </View>
                    </View>
                </ScrollView>
                <GreyButton press={this.onAds} text="Submit" />
            </View >
        )
    }

    // updateSearch = (event) => {
    //     this.setState({
    //         search: event.target.value
    //     })
    // }

    backToProfile = () => {
        this.props.navigation.navigate('Profile');
    }

    callCenter = () => {
        this.props.navigation.navigate('CallCenter');
    }
}

const styles = StyleSheet.create({
    map: {
        backgroundColor: '#dfe6e9',
        padding: 20,
        height: 95,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        height: 200,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        paddingLeft: 8,
        fontWeight: 'bold'
    },
    field: {
        marginLeft: 8,
        marginTop: 10,
        marginBottom: 50,
        marginRight: 8
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        marginBottom: 10, marginTop: 10, height: 200,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})