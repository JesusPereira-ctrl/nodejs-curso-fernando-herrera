"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const http_client_plugin_1 = require("../plugins/http-client.plugin");
const getPokemonById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http_client_plugin_1.httpClientPlugin.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
    // const resp = await fetch(url);
    // const pokemon = await resp.json();
    // throw new Error('Pokemon no existe');
    // return (
    //   fetch(url)
    //     .then((resp) => resp.json())
    //     // .then(() => {
    //     //   throw new Error('Pokemon no existe');
    //     // })
    //     .then((pokemon) => pokemon.name)
    // );
};
exports.getPokemonById = getPokemonById;
//# sourceMappingURL=06-promises.js.map