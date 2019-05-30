const POKEMON        = [];
const pokeId         = document.querySelector("#pokeid").value;
const pokeBtn        = document.querySelector("#pokeButton");
const pokeReset      = document.querySelector("#pokeReset");
const pokemonId      = document.querySelector(".pokemon-stats-id");
const pokemonName    = document.querySelector(".pokemon-stats-name");
const pokemonHp      = document.querySelector(".pokemon-stats-hp");
const pokemonAtk     = document.querySelector(".pokemon-stats-atk");
const pokemonDef     = document.querySelector(".pokemon-stats-defense");
const pokemonAb      = document.querySelector(".pokemon-stats-ability1");
const pokemonAbTwo   = document.querySelector(".pokemon-stats-ability2");
const pokemonAbThree = document.querySelector(".pokemon-stats-ability3");
const pokemonSprite  = document.querySelector(".pokemon-stats-sprite");

class Trainer {
  constructor(name, age, pokemon){
    this.name = name;
    this.age =  age;
    this.pokemon = [];
  };
};

class Pokemon {
  constructor(id, name, hp, atk, defense, abilities, sprite){
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.atk = attack;
    this.defense = defense;
    this.abilties = [];
    this.sprite = [];
  };
};

function getPokemon() {
    var idNumber = document.getElementById("pokeid").value;
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/" + idNumber;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        // console.log(data);
        {
          let pokemon = {
            id:       data.id,
            name:     data.name,
            hp:       data.stats[5].base_stat,
            atk:      data.stats[4].base_stat,
            defense:  data.stats[3].base_stat,
            ability1: data.abilities[0].ability.name,
            sprite:   data.sprites.front_default
          }
          // console.log(pokemon);
          POKEMON.push(pokemon);
          writeToScreen(pokemon);
        }
        }
      }
   xhttp.open("GET", apiUrl, true);
   xhttp.send();
 };

 function writeToScreen(pokemon) {
  pokemonId.innerHTML   = "<strong>ID:</strong> " + pokemon.id;
  pokemonName.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonHp.innerHTML   = "<strong>HP:</strong> " + pokemon.hp;
  pokemonAtk.innerHTML  = "<strong>Attack:</strong> " + pokemon.atk;
  pokemonDef.innerHTML  = "<strong>Defense:</strong> " + pokemon.defense;
  pokemonSprite.src     = pokemon.sprite;

  if (data.abilities[2] !== undefined) {
          pokemonAb.innerHTML = "<strong>Abilities</strong>: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase() + ", " + data.abilities[2].ability.name.toUpperCase();
        } else if (data.abilities[1] !== undefined) {
          pokemonAb.innerHTML = "<strong>Abilities</strong>: " + data.abilities[0].ability.name.toUpperCase() + ", " + data.abilities[1].ability.name.toUpperCase();
        } else {
          pokemonAb.innerHTML = "<strong>Abilites</strong>:  " + data.abilities[0].ability.name.toUpperCase();
        }
 };

function reset(){
  pokemonSprite.src     = "https://www.pngkit.com/png/detail/314-3140523_pokeball-master-ball-sprite-png.png";
  pokemonId.innerHTML   = "<strong>ID:</strong> ";
  pokemonName.innerHTML = "<strong>Name:</strong> ";
  pokemonHp.innerHTML   = "<strong>HP:</strong> ";
  pokemonAtk.innerHTML  = "<strong>Attack:</strong> ";
  pokemonDef.innerHTML  = "<strong>Defense:</strong> ";
  pokemonAb.innerHTML   = "<strong>Abilities:</strong> ";
};

pokeBtn.addEventListener("click", function(){
   getPokemon();
});
pokeReset.addEventListener("click", function(){
reset();
});
