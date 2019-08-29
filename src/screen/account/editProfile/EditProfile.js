import React, { Component } from './node_modules/react';
import { View, ScrollView, StyleSheet, Image, Text, TextInput, StatusBar } from 'react-native';

import GreyButton from '../../../components/grey-button'

export default class EditProfile extends Component {

    static navigationOptions = {
        tabBarVisible: false
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <StatusBar
                        backgroundColor='#00a663'
                        barStyle='light-content'
                    />
                    <View style={{ backgroundColor: '#00a663', height: 60 }}>
                        <Image source={require('../../../assets/undraw_profile_pic_ic5t.png')} style={{ marginTop: 30, height: 60, width: 60, borderRadius: 50, marginLeft: '40%' }} />
                    </View>
                    <View>
                        <View style={styles.field}>
                            <Text style={styles.text}>Nama Lengkap</Text>
                            <TextInput placeholder='masukan nama lengkap' underlineColorAndroid='#00b894' style={styles.text}></TextInput>
                            <Text style={styles.text}>Jenis Kelamin</Text>
                            <TextInput placeholder='jenis kelamin' underlineColorAndroid='#00b894' style={styles.text}></TextInput>
                            <Text style={styles.text}>Tanggal Lahir</Text>
                            <TextInput placeholder='masukkan tanggal lahir' underlineColorAndroid='#00b894' style={styles.text}></TextInput>
                            <Text style={styles.text}>Kota Asal</Text>
                            <TextInput placeholder='pilih kota asal' underlineColorAndroid='#00b894' style={styles.text}></TextInput>
                            <Text style={styles.text}>Status</Text>
                            <TextInput placeholder='pilih status' underlineColorAndroid='#00b894' style={styles.text}></TextInput>
                            <Text style={styles.text}>Pendidikan Terakhir</Text>
                            <TextInput placeholder='pilih pendidikan terakhir' underlineColorAndroid='#00b894' style={styles.text}></TextInput>
                            <Text style={styles.text}>No. Handphone Darurat</Text>
                            <TextInput placeholder='+62 XXXX XXXX' underlineColorAndroid='#00b894' style={styles.text}></TextInput>
                        </View>
                    </View>
                </ScrollView>
                <GreyButton text="Save" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        paddingLeft: 8,
        fontWeight: 'bold'
    },
    field: {
        marginLeft: 8,
        marginTop: 30,
        marginBottom: 50,
        marginRight: 8
    },
})