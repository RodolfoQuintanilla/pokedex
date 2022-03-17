const formulario = document.querySelector(".formulario");


function inicio() {

    verApi(document.querySelector("#texto").value);
}

async function verApi(x) {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => console.log(data))

}