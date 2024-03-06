import axios from 'axios';
import { fetch } from "@react-native-community/netinfo";

function ErroAxios(statusCode) {
    switch (statusCode) {
        case 400:
            return "Requisição inválida. Verifique os parâmetros e tente novamente.";
        case 401:
            return "Autorização negada. Verifique suas credenciais de acesso.";
        case 403:
            return "Acesso negado. Você não possui permissão para acessar este recurso.";
        case 404:
            return "Conteúdo não encontrado. A página ou recurso solicitado não foi encontrado.";
        case 405:
            return "Método não permitido. Verifique o método de requisição utilizado.";
        case 408:
            return "Tempo limite de requisição excedido. Tente novamente mais tarde.";
        case 500:
            return "Erro interno do servidor. Houve um problema ao processar a requisição. Tente novamente mais tarde.";
        case 503:
            return "Serviço indisponível. O servidor está temporariamente indisponível. Tente novamente mais tarde.";
        case 413:
            return "Requisição muito grande. O tamanho da requisição excedeu o limite permitido.";
        case 415:
            return "Tipo de mídia não suportado. O tipo de mídia da requisição não é suportado pelo servidor.";
        default:
            return "Ocorreu um erro na requisição. Tente novamente mais tarde.";
    }
}

export async function ConsomeApi({ method, url, }) {
    var config = {
        method: method,
        url: url
    };
    const isConnected = await fetch().then(state => {
        return state.isConnected;
    });
    if (isConnected) {
        return await axios(config).then(function (response) {
            let retorno = {
                error: false,
                message: response.statusText,
                data: response.data
            }
            return retorno;
        }).catch(function (error) {
            var retorno = {
                error: true,
                message: ErroAxios(error.response.status),
                data: null
            }
            return retorno;
        });
    } else {
        return {
            error: true,
            message: 'Sem acesso à Internet',
            data: []
        }
    }
}