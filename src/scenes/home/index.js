import React, { useCallback, useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { ComboBox } from '_molecules/input';
import { ScrollScreen } from '_organisms/screen';
import { Fipe } from '_apis';
import { IconButtonText } from '_molecules/button';
import { Colors } from '_styles';

export default HomeScreen = ({
    navigation,
    route,
}) => {

    const [tipoVeiculo, setTipoVeiculo] = useState(null);

    const [marca, setMarca] = useState(null);
    const [marcas, setMarcas] = useState([]);

    const [modelo, setModelo] = useState(null);
    const [modelos, setModelos] = useState([]);

    const [ano, setAno] = useState(null);
    const [anos, setAnos] = useState([]);


    const tipoVeiculos = [{
        'id': 'carros',
        'title': 'Carros'
    },
    {
        'id': 'motos',
        'title': 'Motos'
    },
    {
        'id': 'caminhoes',
        'title': 'Caminhões'
    }];

    const handleRetornoApi = (retorno) => {
        let array = [];
        retorno.map((item) => {
            array.push({
                'id': item.codigo,
                'title': item.nome
            });
        });
        return array;
    }

    const handleTipoVeiculo = async (value) => {
        setTipoVeiculo(value);
        refComboMarca.current.clear();
        refComboModelo.current.clear();
        refComboAno.current.clear();
        setMarca(null);
        setMarcas(null);
        setModelo(null);
        setModelos(null);
        setAno(null);
        setAnos(null);
        if (value) {
            let retorno = await Fipe.Marca(value.id);
            if (retorno.error) {
                setMarcas([]);
                Msg(retorno.message);
            } else {
                setMarcas(handleRetornoApi(retorno.data));
            }
        }
    }

    const handleMarca = async (value) => {
        setMarca(value);
        refComboModelo.current.clear();
        refComboAno.current.clear();
        setModelo(null);
        setModelos(null);
        setAno(null);
        setAnos(null);
        if (value) {
            let retorno = await Fipe.Modelo(tipoVeiculo.id, value.id);
            if (retorno.error) {
                setModelos([]);
                Msg(retorno.message);
            } else {
                setModelos(handleRetornoApi(retorno.data.modelos));
            }
        }
    }

    const handleModelo = async (value) => {
        setModelo(value);
        refComboAno.current.clear();
        setAno(null);
        setAnos(null);
        if (value) {
            let retorno = await Fipe.Ano(tipoVeiculo.id, marca.id, value.id);
            if (retorno.error) {
                setAnos([]);
                Msg(retorno.message);
            } else {
                setAnos(handleRetornoApi(retorno.data));
            }
        }
    }

    const handleBusca = async () => {
        if (tipoVeiculo && marca && modelo && ano) {
            let retorno = await Fipe.Valor(tipoVeiculo.id, marca.id, modelo.id, ano.id);
            if (retorno.error) {
                Msg(retorno.message);
            } else {
                let parametros = retorno.data;
                navigation.navigate('result', parametros);
            }
        } else {
            Msg('Todos os campos são obrigatórios para realizar a busca');
        }
    }

    const Msg = (mensagem) => {
        Alert.alert('Ops!',
            mensagem, [
            {
                text: 'Fechar',
                style: 'cancel',
            },
        ]);
    }

    const refComboTipoVeiculo = useRef();
    const refComboMarca = useRef();
    const refComboModelo = useRef();
    const refComboAno = useRef();

    const handleLimpar = async () => {
        refComboTipoVeiculo.current.clear();
        refComboMarca.current.clear();
        refComboModelo.current.clear();
        refComboAno.current.clear();
        setTipoVeiculo(null);
        setMarca(null);
        setMarcas(null);
        setModelo(null);
        setModelos(null);
        setAno(null);
        setAnos(null);
    }

    return (
        <ScrollScreen>
            <ComboBox
                useRef={refComboTipoVeiculo}
                selectedValue={tipoVeiculo}
                onSelectItem={handleTipoVeiculo}
                items={tipoVeiculos}
                placeholder={'Tipo de Veículo'}
            />
            <ComboBox
                useRef={refComboMarca}
                selectedValue={marca}
                onSelectItem={handleMarca}
                items={marcas}
                placeholder={'Marca'}
            />
            <ComboBox
                useRef={refComboModelo}
                selectedValue={modelo}
                onSelectItem={handleModelo}
                items={modelos}
                placeholder={'Modelo'}
            />
            <ComboBox
                useRef={refComboAno}
                selectedValue={ano}
                onSelectItem={setAno}
                items={anos}
                placeholder={'Ano'}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexBasis: '50%' }}>
                    <IconButtonText
                        icon={'trash'}
                        size={15}
                        color={Colors.GRAY}
                        text={"Limpar"}
                        onPress={handleLimpar}
                    />
                </View>
                <View style={{ flexBasis: '50%' }}>
                    <IconButtonText
                        icon={'search'}
                        size={15}
                        color={Colors.GRAY}
                        text={"Buscar"}
                        onPress={handleBusca}
                    />
                </View>
            </View>
        </ScrollScreen >
    );
}