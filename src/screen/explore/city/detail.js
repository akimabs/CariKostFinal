import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Share } from 'react-native';
import { Icon, Card } from 'react-native-elements'
import { Appbar } from 'react-native-paper'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import AsyncStorage from '@react-native-community/async-storage'

import env from '../../../env/env'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        params = props.navigation.state.params.rows
        this.state = {
            isLogin: false,
            isPhoto: true,
        }
    }

    componentDidMount() {
        this.isLogin()
    }

    isLogin = async () => {
        const fetchData = await AsyncStorage.getItem('userToken')
        if (fetchData) {
            this.setState({
                isLogin: true
            })
        } else {
            this.setState({
                isLogin: false
            })
        }
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'CariKost Memang OYE',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };

    changeToPhoto(isPhoto) {
        if (isPhoto) {
            const { navigation } = this.props;
            const data = navigation.getParam('rows');
            return (
                <Image source={{ uri: env.image + 'images/' + data.photo }} style={{ height: 230 }} />
            )
        } else {
            const { navigation } = this.props;
            const data = navigation.getParam('rows');
            return (
                <View style={{
                    ...StyleSheet.absoluteFillObject,
                    height: 230,
                }}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ ...StyleSheet.absoluteFillObject }}
                        region={{
                            latitude: data.latitude,
                            longitude: data.longitude,
                            latitudeDelta: 0.09,
                            longitudeDelta: 0.09,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: data.latitude,
                                longitude: data.longitude,
                            }}
                        />
                    </MapView>
                </View>
            )
        }
    }

    changeStatePhoto(param) {
        this.setState({
            isPhoto: param
        })
    }

    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('rows');
        return (
            <View>
                <StatusBar
                    backgroundColor='#00a663'
                    barStyle='light-content'
                />
                <Appbar.Header style={{ backgroundColor: '#00a663' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                </Appbar.Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: 230 }}>
                            {this.changeToPhoto(this.state.isPhoto)}
                        </View>
                        <View style={styles.line}>
                            <TouchableOpacity onPress={() => this.changeStatePhoto(true)}>
                                <Icon name='photo-library' />
                                <Text>Foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.changeStatePhoto(false)}>
                                <Icon name='map' />
                                <Text>Peta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingLeft: 2, paddingRight: 5 }}>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>
                            {data.name}
                        </Text>
                        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Icon name='favorite-border' size={27} color='#00a663' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.onShare}>
                                <Icon name='share' size={27} color='#00a663' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 8, paddingRight: 8, marginTop: 10 }}>
                        <Text style={{ marginRight: 5, color: '#22a7f0', fontWeight: 'bold' }} >{data.type}</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}> . </Text>
                        <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{data.city}</Text>
                    </View>
                    <View style={{ marginTop: 10, paddingLeft: 8 }}>
                        <Text>
                            {data.address}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 70, marginTop: 30 }}>
                        <View style={{ backgroundColor: 'silver', height: 1 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='flash-on' />
                                <Text style={{ marginTop: 2 }}>
                                    Termasuk Listrik
                            </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='attach-money' />
                                <Text style={{ marginTop: 2 }}>
                                    Min. 1 Th
                            </Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'silver', height: 1 }} />
                    </View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 30, marginBottom: 30 }}>
                        <Text style={{ fontWeight: 'bold', color: '#00a663', marginBottom: 10 }}>Deskripsi Kost : </Text>
                        <Text style={{ textAlign: 'justify' }}>
                            Terdapat 6 kamar, tempat tidur spring bad ukuran no.1 untuk kamar no. 1,2 dan 3. Untuk kamar no. 4,5 dan 6 spring bad no 3+1 spring bad tarik/dorong, lemari pakaian, meja belajar, kursi, AC, 2 buah Kamar Mandi luar, 2 buah tempat untuk wudlu di luar kamar mandi, Free Wifi 10 Mbps Indihome, dapur untuk masak di lantai 1, kulkas di lantai 1 ruang dapur.
                        </Text>
                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', color: '#00a663', marginBottom: 10 }}>Luas Kamar :</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='zoom-out-map' size={30} />
                                <Text style={{ marginLeft: 5, fontSize: 16, marginTop: 8 }}>3x3 m</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#f2f0f0', height: 110, marginBottom: 120, justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{ borderRadius: 50, backgroundColor: '#00a663', height: 70, width: 70, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='star-border' color='white' size={50} />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 10, marginBottom: 30 }}>
                            <Text style={{ fontWeight: 'bold' }}>Data Pemilik Kost : </Text>
                            <Text>{data.name}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 55, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                    <View style={{ backgroundColor: 'silver', height: 1 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 13, color: '#00a663', marginRight: 3 }}>RP.</Text>
                            <Text style={{ marginTop: 10, fontSize: 20, color: '#00a663' }}>{data.price}</Text>
                            <Text style={{ color: '#00a663', marginTop: 16 }}>/bulan</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            if (this.state.isLogin) {
                                this.props.navigation.navigate('BookingPage')
                            } else {
                                this.props.navigation.navigate('Login')
                            }
                        }}>
                            <View style={{ backgroundColor: '#f89406', height: 50, width: 140, borderRadius: 5, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }} >
                                <Icon name='input' color='white' size={30}></Icon>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Booking</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#f2f0f0',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center'
    }
})