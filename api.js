async function getAndShowPikachu() {
  const pikachuRequest = await fetch(
    "https://pokeapi.co/api/v2/pokemon/pikachu",
  );
  const pikachuData = await pikachuRequest.json();
  console.log("pikachuData :", await pikachuData);

  document.getElementById("pokemonName").innerHTML = pikachuData.name;
}

getAndShowPikachu();
