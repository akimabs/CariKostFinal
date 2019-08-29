import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDate: null
        }
        // Masih belum tau apa
        this.onDateChange = this.onDateChange.bind(this)
    }

    onDateChange(date) {
        this.setState({
            selectedDate: date,
        })
    }

    render() {
        const { selectedDate } = this.state
        const selectDate = selectedDate ? selectedDate.toString() : ''
        const splitDate = selectDate.split(" ")

        return (
            <View style={styles.container}>
                <View style={{ marginLeft: 10, paddingBottom: 20 }}>
                    <Text style={{ color: '#00a663', fontSize: 20, fontWeight: 'bold' }}>Mulai Kost Kapan?</Text>
                    <Text style={{ color: '#95a5a6', paddingLeft: 10, paddingTop: 10, fontSize: 15, fontWeight: 'bold', }}>{splitDate[0]}, {splitDate[1]} {splitDate[2]} {splitDate[3]}</Text>
                </View>
                <View>
                    <CalendarPicker onDateChange={this.onDateChange} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    }
})
