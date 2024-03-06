import React, { useCallback, useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { ComboBox } from '_molecules/input';
import { ScrollScreen } from '_organisms/screen';
import { Fipe } from '_apis';
import { IconButtonText } from '_molecules/button';
import { Colors } from '_styles';
import { Scale, VerticalScale } from '_functions/tela';

export default ResultScreen = ({
    navigation,
    route,
}) => {
    const data = route.params;
    const tipoVeiculo = (tipo) => {
        if (tipo == 1) {
            return 'Carro'
        }
        if (tipo == 2) {
            return 'Motos'
        }
        if (tipo == 3) {
            return 'Caminhões'
        }
    }

    return (
        <ScrollScreen>
            <View style={styles.card}>
                <View>
                    <Text style={styles.titulo}>{tipoVeiculo(data.TipoVeiculo)} </Text>
                </View>
                <View style={styles.linha}>
                    <View style={styles.celulaEsqueda}>
                        <Text style={styles.texto}>Marca</Text>
                    </View>
                    <View style={styles.celulaDireita}>
                        <Text style={styles.texto}>{data.Marca}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.celulaEsqueda}>
                        <Text style={styles.texto}>Modelo</Text>
                    </View>
                    <View style={styles.celulaDireita}>
                        <Text style={[styles.texto, { textAlign: 'right' }]}>{data.Modelo}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.celulaEsqueda}>
                        <Text style={styles.texto}>Ano</Text>
                    </View>
                    <View style={styles.celulaDireita}>
                        <Text style={styles.texto}>{data.AnoModelo}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.celulaEsqueda}>
                        <Text style={styles.texto}>Combustivel</Text>
                    </View>
                    <View style={styles.celulaDireita}>
                        <Text style={styles.texto}>{data.Combustivel} - {data.SiglaCombustivel}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.celulaEsqueda}>
                        <Text style={styles.texto}>Código Fipe</Text>
                    </View>
                    <View style={styles.celulaDireita}>
                        <Text style={styles.texto}>{data.CodigoFipe}</Text>
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.celulaEsqueda}>
                        <Text style={styles.texto}>Referência</Text>
                    </View>
                    <View style={styles.celulaDireita}>
                        <Text style={styles.texto}>{data.MesReferencia}</Text>
                    </View>
                </View>
                <View style={{ marginTop: VerticalScale(5) }}>
                    <Text style={styles.titulo}>{data.Valor} </Text>
                </View>
            </View>
        </ScrollScreen >
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: Scale(16),
    },
    titulo: {
        fontSize: Scale(18),
        fontWeight: "bold",
        textAlign: 'center',
    },
    linha: {
        flexDirection: 'row',
        marginVertical: VerticalScale(3)
    },
    celulaEsqueda: {
        flexBasis: '30%'
    },
    celulaDireita: {
        flexBasis: '70%',
        alignItems: 'flex-end',
    },
    card: {
        padding: Scale(20),
        marginLeft: Scale(20),
        marginRight: Scale(20),
        marginBottom: VerticalScale(10),
        marginTop: VerticalScale(10),
        borderRadius: Scale(20),
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: {
            height: VerticalScale(5),
            width: Scale(5)
        },
        shadowOpacity: 0.2,
        shadowRadius: Scale(6),
        elevation: Platform.OS == 'ios' ? Scale(10) : Scale(5),
    }
})