import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Separator from '../components/Separator';

export default class BackSideServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        title: 'Ремонт задней подвески'
    }

    showBackSideServices = () => {
        //const item = this.props.navigation.getParam(item);
        const { params } = this.props.navigation.state;
        //alert(params.item.name);
        alert(JSON.stringify(params.item));
        //this.props.navigation.navigate('BackSideServices', { item: params.item.backSideServices });
    }

    render() {
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
                            <Text style={styles.name}>Сальник полуоси: {item.salnikPoluosi}</Text>
                            <Separator />
                            <Text style={styles.name}>Тормозные колодки (Диск): {item.tormoznieKolodkiDisk}</Text>
                            <Separator />
                            <Text style={styles.name}>Тормозные колодки (Барабан): {item.tormoznieKolodkiBaraban}</Text>
                            <Separator />
                            <Text style={styles.name}>Тормозной шланг: {item.tormoznoiShlang}</Text>
                            <Separator />
                            <Text style={styles.name}>Сайлентблок передний нижнего рычага: {item.sailentblockPeredniyNijnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Сайлентблок задний нижнего рычага: {item.sailentblockZadniyNijnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Сайлентблок передний верхнего рычага: {item.sailentblockPeredniyVerhnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Сайлентблок задний верхнего рычага: {item.sailentblockZadniyVerhnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Шаровая опора верхнего рычага: {item.sharovayaOporaVerhnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Шаровая опора верхнего рычага (Пыльник): {item.sharovayaOporaVerhnegoRichagaPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>Шаровая опора нижнего рычага: {item.sharovayaOporaNijnegoRichaga}</Text>
                            <Separator />
                            <Text style={styles.name}>Шаровая опора нижнего рычага (Пыльник): {item.sharovayaOporaNijnegoRichagaPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>Втулки стабилизатора: {item.vtulkiStabilizatora}</Text>
                            <Separator />
                            <Text style={styles.name}>Стойки стабилизатора (Линк): {item.stoikiStabilizatoraLink}</Text>
                            <Separator />
                            <Text style={styles.name}>Втулки стойки стабилизатора (Линк): {item.vtulkiStoikiStabilizatoraLink}</Text>
                            <Separator />
                            <Text style={styles.name}>ШРУС наружний: {item.shrusNarujniy}</Text>
                            <Separator />
                            <Text style={styles.name}>ШРУС наружний (Пыльник): {item.shrusNarujniyPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>ШРУС внутренний: {item.shrusVnutrenniy}</Text>
                            <Separator />
                            <Text style={styles.name}>ШРУС внутренний (Пыльник): {item.shrusVnutrenniyPilnik}</Text>
                            <Separator />
                            <Text style={styles.name}>Сальник боковой редуктора: {item.salnikBokovoyReduktora}</Text>
                            <Separator />
                            <Text style={styles.name}>Сальник хвостовой редуктора: {item.salnikHvostovikaReduktora}</Text>
                            <Separator />
                            <Text style={styles.name}>Подшипник вискомуфты редуктора: {item.podshipnikViskomuftiReduktora}</Text>
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