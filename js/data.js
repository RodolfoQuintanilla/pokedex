const formulario = document.querySelector(".formulario");


function inicio() {

    verApi(document.querySelector("#texto").value);
}

function verApi(x) {
    let url = 'https://pokeapi.co/api/v2/pokemon'
    let nombre = x;
    fetch(`${url}/${nombre} `)
        .then(res => res.json())
        .then(data => htmlListo(data))


}

function htmlListo(data) {
    console.log(data);
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    const imgPokemon = document.querySelector("#imgPokemon");

    imgPokemon.src = url;

    const nombrePokemon = document.querySelector(".nombrePokemon")
    nombrePokemon.innerText = data.name
}