import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Separator from '../components/Separator';

export default class FrontSideServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        title: 'Ремонт передней подвески'
    }

    showFrontSideServices = () => {
        //const item = this.props.navigation.getParam(item);
        const { params } = this.props.navigation.state;
        //alert(params.item.name);
        alert(JSON.stringify(params.item));
        //this.props.navigation.navigate('FrontSideServices', { item: params.item.frontSideServices });
    }

    render() {
        //TODO не лучшим образом сделано :\
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container} >
                <FlatList
                    data={params.item}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) =>
                        <View style={styles.flatview}>
                            <Text style={styles.name}>Амортизатор: {item.amortizator}</Text>
                            <Separator />
                            <Text style={styles.name}>Амортизаторная стойка: {item.amortizatornayaStoyka}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник ступичный: {item.podshipnikStupichniy}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.podshipnikPoluosi}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.salnikPoluosi}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.tormoznieKolodkiDisk}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.tormoznieKolodkiBaraban}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.tormoznoiShlang}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sailentblockPeredniyNijnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sailentblockZadniyNijnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sailentblockPeredniyVerhnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sailentblockZadniyVerhnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sharovayaOporaVerhnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sharovayaOporaVerhnegoRichagaPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sharovayaOporaNijnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.sharovayaOporaNijnegoRichagaPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.vtulkiStabilizatora}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.stoikiStabilizatoraLink}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.vtulkiStoikiStabilizatoraLink}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.shrusNarujniy}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.shrusNarujniyPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.shrusVnutrenniy}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.shrusVnutrenniyPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.salnikBokovoyReduktora}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник полуоси: {item.salnikHvostovikaReduktora}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник Вискомуфты: {item.podshipnikViskomuftiReduktora}</Text>
                            <Separator />
                        </View>
                    }
                    keyExtractor={item => item.id}
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
        marginRight: 20,
        paddingTop: 20,
        borderRadius: 2,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    email: {
        color: 'red'
    }

});