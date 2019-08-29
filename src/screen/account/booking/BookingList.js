import React, { Component } from './node_modules/react';
import { StyleSheet, TouchableOpacity, Text, Image, View, ScrollView } from 'react-native';
import Icon from './node_modules/react-native-vector-icons/Ionicons';

const data = [
    {
        id: 1,
        imageUrl: 'https://photosrp.dotproperty.id/2.0-ID-834761-PP-3763072-17216358015cf550c17959d-0-900-600-ct/rumah-dijual-dengan-5-kamar-tidur-di-cempaka-putih-barat-jakarta.jpg',
        name: 'kost andra',
        date: '12/08/19',
        status: 'Tunggu Konfirmasi'
    },
    {
        id: 2,
        imageUrl: 'https://cdn.carro.co/jualo/zoom/13817173/kost-kostan-di-tebet-kost-dijual-13817173.jpg',
        name: 'kost dian',
        date: '16/08/19',
        status: 'Tunggu Konfirmasi'
    },
    {
        id: 3,
        imageUrl: 'https://cdn.carro.co/jualo/zoom/14565821/rumah-kost-kostan-mur-kost-dijual-14565821.jpg',
        name: 'kost nana',
        date: '29/08/19',
        status: 'Tunggu Konfirmasi'
    },
]

export default class BookingList extends Component {
    render() {
        return (
            <ScrollView>
                {data.map((house, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.card}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{ uri: house.imageUrl }} style={{ width: 90, height: 90 }} />
                                <View style={{ paddingLeft: 20 }}>
                                    <Text style={{ paddingBottom: 8, fontWeight: 'bold', fontSize: 13 }}>{house.name}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8 }}>
                                        <View>
                                            <Text style={{ fontSize: 10 }}>Booking</Text>
                                            <Text style={{ fontSize: 10 }}>{house.date}</Text>
                                        </View>
                                        <View style={{ paddingLeft: 20 }}>
                                            <Text style={{ fontSize: 10 }}>Durasi Sewa</Text>
                                            <Text style={{ fontSize: 10 }}>1 Bulan</Text>
                                        </View>
                                    </View>
                                    <View style={{ padding: 5, borderRadius: 5, borderWidth: 0.8, width: 80, borderColor: '#40739e' }}>
                                        <Text style={{ fontSize: 8, color: '#40739e' }}>{house.status}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
                )
                }
            </ScrollView>
        )
    }

    editProfile = () => {
        this.props.navigation.navigate('EditProfile')
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 15,
        paddingLeft: 10,
        alignContent: 'center'
    },
    card: {
        backgroundColor: 'white',
        padding: 8,
        height: 110,
        borderRadius: 4,
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})