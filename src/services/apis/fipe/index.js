import { ConsomeApi } from '_functions/api';

const url_base = "https://parallelum.com.br/fipe/api/v1/";

export async function Marca(tipo) {
    const url = url_base + tipo + "/marcas";
    const method = 'get';
    const retorno = await ConsomeApi({ method: method, url: url })
    return await retorno;
}

export async function Modelo(tipo, marca) {
    const url = url_base + tipo + "/marcas/" + marca + "/modelos";
    const method = 'get';
    const retorno = await ConsomeApi({ method: method, url: url })
    return await retorno;
}

export async function Ano(tipo, marca, modelo) {
    const url = url_base + tipo + "/marcas/" + marca + "/modelos/" + modelo + '/anos';
    const method = 'get';
    const retorno = await ConsomeApi({ method: method, url: url })
    return await retorno;
}

export async function Valor(tipo, marca, modelo, ano) {
    const url = url_base + tipo + "/marcas/" + marca + "/modelos/" + modelo + '/anos/' + ano;
    const method = 'get';
    const retorno = await ConsomeApi({ method: method, url: url })
    return await retorno;
}