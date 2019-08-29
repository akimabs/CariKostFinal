import React, { Component } from 'react';
import { Modal, View, ScrollView, StyleSheet, TouchableOpacity, Picker, Text, TextInput, Button } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import RadioGroup from 'react-native-radio-buttons-group'

export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            facilities: [
                {
                    label: 'AC',
                    size: 12
                },
                {
                    label: 'Almari Pakaian',
                    size: 12
                },
                {
                    label: 'TV',
                    size: 12
                },
                {
                    label: 'Internet',
                    size: 12
                },
                {
                    label: 'Kamar Mandi',
                    size: 12
                },
                {
                    label: 'Parkir Mobil',
                    size: 12
                },
            ],
            maxPrice: '',
            minPrice: ''
        }
    }

    onPress = facilities => this.setState({ facilities })


    render() {
        let selectedButton = this.state.facilities.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.facilities[0].label;

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Tipe Kost (Gender)</Text>
                    {/* Picker untuk tipe kost */}
                    <View style={styles.container}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemPosition) =>
                                this.setState({ language: itemValue, choosenIndex: itemPosition })}
                        >
                            <Picker.Item label="Cowok" value="cowok" />
                            <Picker.Item label="Cewek" value="cewek" />
                            <Picker.Item label="Campur" value="campur" />
                        </Picker>
                    </View>

                    <Text style={styles.title}>Jangka Waktu</Text>
                    {/* Picker untuk waktu */}
                    <View style={styles.container}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemPosition) =>
                                this.setState({ language: itemValue, choosenIndex: itemPosition })}
                        >
                            <Picker.Item label="Harian" value="harian" />
                            <Picker.Item label="Mingguan" value="mingguan" />
                            <Picker.Item label="Bulanan" value="bulanan" />
                            <Picker.Item label="Tahunan" value="tahunan" />
                        </Picker>
                    </View>

                    <Text style={styles.title}>Range Harga</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput underlineColorAndroid='black' style={{ width: 160, fontSize: 12 }} placeholder='tulis minimum anggaranmu' />
                        <Text style={{ paddingTop: 15, color: 'grey' }}>--</Text>
                        <TextInput underlineColorAndroid='black' style={{ width: 160, fontSize: 12 }} placeholder='tulis maksimum anggaranmu' />
                    </View>

                    <Text style={styles.title}>Fasilitas</Text>
                    <View style={{ marginBottom: 190, marginRight: 200 }}>
                        <RadioGroup radioButtons={this.state.facilities} onPress={this.onPress} />
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', bottom: 0, borderTopWidth: 2, position: 'absolute', borderColor: '#b2bec3' }}>
                    <TouchableOpacity style={styles.reset}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>RESET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reset}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CARI</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    facility: {
        borderWidth: 1,
        borderColor: '#b2bec3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 25,
    },
    reset: {
        justifyContent: 'center',
        width: 160,
        alignItems: 'center',
        borderColor: '#b2bec3',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerStyle: {
        width: "80%",
        color: '#344953',
        justifyContent: 'center',
    }
})