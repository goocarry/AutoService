import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet, Picker } from 'react-native';
import Separator from '../components/Separator';

export default class PriceHelperScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [
                {
                    "name": "Японец",
                    "address": "Жорницкого, 22/4",
                    "phone": "+7(4112) 44-70-70",
                    "frontSideServices": {
                        "id": 1,
                        "amortizator": 500,
                        "amortizatornayaStoyka": 500,
                    }

                },
                {
                    "name": "Дежнев",
                    "address": "Дежнева, 15",
                    "phone": "+7(4112) 44-70-70",
                    "frontSideServices": {
                        "id": 2,
                        "amortizator": 100,
                        "amortizatornayaStoyka": 500,
                    }

                },
                {
                    "name": "Другой сервис",
                    "address": "Петра Алексеева, 10",
                    "phone": "+7(4112) 44-70-70",
                    "frontSideServices": {
                        "id": 3,
                        "amortizator": 100,
                        "amortizatornayaStoyka": 500,
                    }

                }
            ],
            //massiv: [],
            selectedService: '',
            services: [
                {
                    "id": "amortizator",
                    "name": "Амортизатор"
                },
                {
                    "id": "amortizatornayaStoyka",
                    "name": "Стойка амортизатора"
                }
            ]
        };
    }

    check = () => {
        //var min = Math.min.apply(null, this.state.response.map((v) => v.frontSideServices.amortizator));
        var massiv = [];
        var min = Math.min.apply(null, this.state.response.map((v) => v.frontSideServices[this.state.selectedService]));
        //alert(min);
        this.state.response.map((v) => {
            if (v.frontSideServices.amortizator === min) {
                //alert(v.name)
                massiv.push(v.name, min);
                alert(massiv);
            }
        })
        
        //alert(JSON.stringify(this.state.response.map((v) => v.frontSideServices.amortizator)))
    }


    render() {
        return (

            <View>
                <Text> выберите услугу </Text>
                <Picker
                    selectedValue={this.state.selectedService}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedService: itemValue })
                    }>
                    {//TODO добавить новую services_db с нормальными id в папку data и оттуда брать услуги в пикер
                        this.state.services.map((item, key) => (
                            <Picker.Item label={item.name} value={item.id} key={key} />)
                        )
                    }
                </Picker>
                <TouchableOpacity onPress={this.check}>
                    <Text>check</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.response}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) =>
                        <TouchableHighlight>
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.email}>{item.address}</Text>
                                <Separator />
                            </View>
                        </TouchableHighlight>
                    }
                    keyExtractor={item => item.name}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        marginLeft: 20,
        paddingTop: 20,
        borderRadius: 2,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    email: {
        color: 'red'
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        marginBottom: 10,
        borderRadius: 5,
    },

});