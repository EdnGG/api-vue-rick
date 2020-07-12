const URL = "https://rickandmortyapi.com/api/character/"
function getCharacter(id) {

  fetch(`${URL}${id}`)
    .then((response) => response.json())
    .then((data) =>
      console.log(data))

}

export default getCharacter