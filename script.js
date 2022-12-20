const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) =>{
        if (res.status != "200"){
            console.log(res);
            pokeImage("./pikachuderrotado.jpg");
            let noencontrado = document.getElementById("pokemonName");
            noencontrado.innerHTML = "Pokemon no encontrado";
        }
        else{
            return res.json();
        }
    })
    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        let pokeInfo = data.abilities;
        pokeData(pokeInfo);
        let tipopokemon = data.types;
        tipos(tipopokemon);
        document.getElementById("pokemonName").textContent = data.species.name;
        document.getElementById("numero").textContent = "Número " +  data.id;
        document.getElementById("experiencia").textContent = "Experiencia base : " +  data.base_experience;
        document.getElementById("peso").textContent = "Peso " + data.weight;
        document.getElementById("altura").textContent = "Altura " + data.height;
        document.getElementById("hp").textContent = "HP " + data.stats[0].base_stat;
        document.getElementById("ataque").textContent = "ataque " + data.stats[1].base_stat;


    }
}
function reseteo() {
    document.getElementById("pokeImg").src = "./pokeball copia.png";
    document.getElementById("tipo").textContent = "";
    document.getElementById("hp").textContent = "";
    document.getElementById("ataque").textContent = "";
    document.getElementById("pokemonName").textContent = "";
    document.getElementById("numero").textContent = "";
    document.getElementById("experiencia").textContent = "";
    document.getElementById("peso").textContent = "";    
    document.getElementById("altura").textContent = "";
    document.getElementById("pokeName").value = "";
    document.getElementById("habilidades").innerHTML = "";


}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeData = (abilities) => {
    const pokehab = document.getElementById("habilidades");
    const abilitiesname = abilities.map(item  => item.ability.name)
    pokehab.innerHTML = "Habilidades : " + "<br>" + abilitiesname[0] + "<br>" + abilitiesname[1];
}
const tipos = (types) => {
    const poketipo = document.getElementById("tipo");
    const pokemontipo = types.map(item => item.type.name)
    poketipo.innerHTML = "Tipo de pokemon : " + pokemontipo;
}
