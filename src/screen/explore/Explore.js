import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, TouchableOpacity, Text, FlatList, ScrollView, StatusBar } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import { Card, Icon } from 'react-native-elements'
import Slideshow from 'react-native-slideshow'
import AsyncStorage from '@react-native-community/async-storage'

const data = [
    {
        id: 1,
        imageUrl: "http://saranasadaya.com/wp-content/uploads/2018/04/gedung-sate-.jpg",
        title: "Bandung",
        Latitude: -6.914744,
        Longitude: 107.609810
    },
    {
        id: 2,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuU1Z70DyK-V_zwPdVRiMDur14UhfWDGu7RQ18RM4OmxqVDJY-",
        title: "Jakarta",
        Latitude: -6.200000,
        Longitude: 106.816666
    },
    {
        id: 3,
        imageUrl: "https://assets-a1.kompasiana.com/items/album/2016/05/30/tugu-jogja-574c15cd83afbdc406776f50.jpg?t=o&v=1200",
        title: "Yogyakarta",
        Latitude: -7.797068,
        Longitude: 110.370529
    },
    {
        id: 4,
        imageUrl: "https://backpackerjakarta.com/wp-content/uploads/2016/09/lawang-sewu-semarang.jpg",
        title: "Semarang",
        Latitude: -6.966667,
        Longitude: 110.416664
    },
    {
        id: 5,
        imageUrl: "https://awsimages.detik.net.id/content/2016/05/05/1519/buaya.jpg",
        title: "Surabaya",
        Latitude: -7.275973,
        Longitude: 112.808304
    },
    {
        id: 6,
        imageUrl: "https://www.jember1tv.co.id/wp-content/uploads/2016/08/bali.jpg",
        title: "Denpasar",
        Latitude: -8.650000,
        Longitude: 115.216667
    }
]

class Index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            position: 1,
            interval: null,
            dataSource: [
                {
                    url: 'https://mamikos.com/uploads/cache/data/user/2019-01-28/I9kswUvH-360x480.jpg',
                }, {
                    url: 'https://static.mamikos.com/uploads/cache/data/user/2019-08-02/T71F3KDd-360x480.jpg',
                }, {
                    url: 'https://mamikos.com/uploads/cache/data/user/2019-02-06/tYYKBgjd-360x480.jpg',
                }, {
                    url: 'https://static.mamikos.com/uploads/cache/data/user/2019-07-31/z2algAvh-360x480.jpg',
                }
            ],
            data: data
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 5000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
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

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='white'
                    barStyle='dark-content'
                />
                <Appbar.Header style={{ backgroundColor: 'white' }}>
                    <Appbar.Content title={<Text style={styles.title}>carikost.com</Text>} />
                </Appbar.Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Hai</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mau cari kost dimana</Text>
                        <Button style={styles.button} mode="outlined" onPress={() => this.props.navigation.navigate('List')}><Text style={{ fontSize: 13, color: 'white' }}>Masukan alamat atau nama tempat</Text></Button>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.body}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginBottom: 5, marginTop: 10 }}>Promo</Text>
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })}
                            arrowSize={0}
                            height={150}
                            scollEnabled={true}

                            style={styles.slideshow}
                        />
                        <View style={{ padding: 5, borderRadius: 5, backgroundColor: '#16a085', height: 50, marginTop: 10 }}>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Anda Pemilik Kost ?</Text>
                                <Text style={{ color: 'white', fontSize: 13 }}>Masuk dan pasang iklan anda</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end', paddingTop: 5 }}>
                                <TouchableOpacity style={{ position: 'absolute', width: 90, height: 40 }} onPress={() => {
                                    if (this.state.isLogin) {
                                        this.props.navigation.navigate('Ads')
                                    } else {
                                        this.props.navigation.navigate('Login')
                                    }
                                }}>
                                    <View style={{ justifyContent: "center", alignItems: 'center' }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Pasang Iklan</Text></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', marginBottom: 5, marginTop: 10 }}>Kota Populer</Text>
                    </View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.title}
                        data={this.state.data}
                        renderItem={({ item: rowData }) => {
                            return (
                                < TouchableHighlight style={{ height: 210 }
                                } onPress={() => this.props.navigation.navigate('List', {
                                    Latitude: rowData.Latitude,
                                    Longitude: rowData.Longitude,
                                    Title: rowData.title
                                })
                                } underlayColor='white'>
                                    <Card
                                        title={null}
                                        containerStyle={{ width: 160, height: 260, marginLeft: 1, maxHeight: 190 }}
                                        image={{ uri: rowData.imageUrl }}
                                    >
                                        <Text style={{ fontWeight: 'bold' }}>
                                            {rowData.title}
                                        </Text>
                                    </Card>
                                </TouchableHighlight>
                            );
                        }}
                        style={{ paddingLeft: 15, paddingRight: 15 }}
                    />
                </ScrollView>
            </View >
        );
    }
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
    , slideshow: {
        flex: 1,
        marginBottom: 10
    },
    line: {
        padding: 0,
        backgroundColor: '#f2f0f0',
        height: 10
    },
    body: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15
    }, title: {
        fontWeight: 'bold',
        color: "#00b16a"
    }, textHeader: {
        width: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }, button: {
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'silver',
    }
})