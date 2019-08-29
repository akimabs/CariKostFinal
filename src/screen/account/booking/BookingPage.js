import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'

import GreyButton from '../../../components/grey-button'


export default class BookingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: ''
        }
    }

    changeDate = (date) => {
        this.setState({
            selectedDate: date
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <View style={{ borderBottomColor: '#ecf0f1', borderBottomWidth: 2, flex: 1, flexDirection: 'row', paddingLeft: 15, marginTop: 20 }}>
                            <View style={{ flex: 1, paddingBottom: 20 }}>
                                <TouchableOpacity onChange={this.changeDate} value={this.state.selectedDate} onPress={() => this.props.navigation.navigate('Calendar')}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tanggal masuk</Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 8 }}>{this.state.selectedDate}</Text>
                            </View>
                            <View style={{ flex: 1, paddingBottom: 20 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tanggal keluar</Text>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#ecf0f1', borderBottomWidth: 2, flex: 1, flexDirection: 'row', paddingLeft: 15, paddingTop: 20 }}>
                            <View style={{ flex: 1, paddingBottom: 20 }}>
                                <Image style={{ width: 120, height: 120 }} source={require('../../../assets/undraw_Login_v483.png')} />
                            </View>
                            <View style={{ paddingBottom: 10, flex: 3, flexDirection: 'column', paddingLeft: 60, }}>
                                <Text style={{ paddingBottom: 10, fontSize: 15 }}>Kost Bang Haji</Text>
                                <View style={{ paddingBottom: 10, fontSize: 15, flexDirection: 'row' }}>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Icon name='ios-wifi' color='#00a663' size={20} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Icon name='ios-car' color='#00a663' size={20} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Icon name='ios-desktop' color='#00a663' size={20} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Icon name='ios-water' color='#00a663' size={20} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <Icon name='ios-beer' color='#00a663' size={20} />
                                    </View>
                                </View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Rp 1.750.000 /bulan</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#ecf0f1', justifyContent: 'space-between', borderBottomWidth: 2, paddingBottom: 10, flex: 1, flexDirection: 'row', paddingLeft: 15, paddingTop: 20 }}>
                            <View style={{ flex: 1, paddingTop: 10, paddingBottom: 5 }}>
                                <Text style={{ paddingBottom: 5 }}>Data Penghuni</Text>
                                <Text style={{ color: '#95a5a6', paddingBottom: 5 }}>Nama Lengkap</Text>
                                <Text style={{ color: '#95a5a6', paddingBottom: 5 }}>Jenis Kelamin</Text>
                                <Text style={{ color: '#95a5a6', paddingBottom: 5 }}>No Handphone</Text>
                                <Text style={{ color: '#95a5a6', paddingBottom: 5 }}>Pekerjaan</Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 10, paddingBottom: 20 }}>
                                <TouchableOpacity><Text style={{ paddingBottom: 5, color: '#55efc4' }}>Ubah</Text></TouchableOpacity>
                                <Text style={{ paddingBottom: 5, }}>Dyah</Text>
                                <Text style={{ paddingBottom: 5 }}>Perempuan</Text>
                                <Text style={{ paddingBottom: 5 }}>082243360906</Text>
                                <Text style={{ paddingBottom: 5 }}>Mahasiswa</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 15, paddingTop: 20, borderBottomColor: '#ecf0f1', borderBottomWidth: 2, paddingBottom: 20 }}>
                            <Text>
                                Keterangan Biaya Lain
                            </Text>
                            <Text style={{ paddingBottom: 30 }}>
                                -
                            </Text>
                            <CheckBox style={{ paddingBotton: 50 }} title='Saya menyetujui syarat ketentuan dan memastikan data di atas benar.' />
                        </View>
                    </View>
                </ScrollView>
                <GreyButton text="Book" />
            </View>
        )
    }
}

