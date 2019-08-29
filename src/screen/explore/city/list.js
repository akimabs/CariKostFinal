import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { Card, Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import ActionSheet from 'react-native-actionsheet'
import axios from 'axios'
import { connect } from 'react-redux'

import env from '../../../env/env'
import { getDorms } from '../../../redux/_actions/dorms'

class List extends Component {

    componentDidMount() {
        this.props.dispatch(getDorms())
    }

    loading = () => {
        return (<View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'grey'
            }}>HARAP TUNGGU...</Text>
            <ActivityIndicator size={50} color="#00a663" />
        </View>)
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <TouchableOpacity underlayColor='white' onPress={() => this.props.navigation.navigate('Detail', { rows: item })}>
                    <Card
                        image={{ uri: env.image + 'images/' + item.photo }}
                    >
                        <Text style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 5 }}>
                            <Text style={{ color: 'red', marginLeft: 5 }}>{item.type}</Text>
                            <Text style={styles.textHEader}>{item.city}</Text>
                        </View>
                        <View style={{ marginLeft: 5, marginTop: 5 }}>
                            <Text style={{ color: '#00a663', marginBottom: 5, fontSize: 18 }}>Rp.{item.price}</Text>
                            <Text>{item.address}</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View >
        )
    }
    showActionSheet = () => {
        this.ActionSheet.show()
    }
    render() {
        const extractKey = ({ id }) => id.toString()
        return (
            <View>
                <Appbar.Header style={{ backgroundColor: 'white' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <TextInput style={styles.header} placeholder="Masukan nama kota" />
                </Appbar.Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        this.props.dorms.isLoading == true &&
                        this.loading()
                    }
                    {this.props.dorms.isLoading == false &&
                        < FlatList
                            data={this.props.dorms.data}
                            renderItem={this.renderItem}
                            keyExtractor={extractKey}
                            style={{ marginBottom: 100 }}
                        />
                    }
                </ScrollView>
                {
                    this.props.dorms.isLoading == true && <View />
                }
                {
                    this.props.dorms.isLoading == false &&
                    <View style={{
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 70, backgroundColor: '#00a663', height: 50, width: 150, marginBottom: 10, justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', paddingRight: 5, paddingLeft: 5, elevation: 1, borderRadius: 5 }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Filter') }}>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='list' color='white' size={30} />
                                        <Text style={{ color: 'white', fontSize: 15, marginTop: 5 }}>Filter</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity underlayColor='white' onPress={this.showActionSheet}>
                                <View>
                                    <ActionSheet
                                        ref={o => this.ActionSheet = o}
                                        title={'Sort By'}
                                        options={['Termurah', 'Termahal', 'Terlaris',]}
                                        cancelButtonIndex={2}
                                        destructiveButtonIndex={1}
                                        onPress={(index) => { /* do something */ }}
                                    />
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='sort' color='white' size={30} />
                                        <Text style={{ color: 'white', fontSize: 15, marginTop: 5 }}>Sort</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View >
        )
    }
}

List.navigationOptions = {
    tabBarLabel: 'List'
};


const mapStateToProps = state => {
    return {
        dorms: state.dorms
    }
}


export default connect(mapStateToProps)(List)

const styles = StyleSheet.create({
    container: {
        paddingLeft: 2,
        paddingRight: 2
    }, textHEader: {
        marginLeft: 9,
    }
})