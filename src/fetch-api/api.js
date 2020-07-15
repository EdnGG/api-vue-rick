

// const URL = "https://rickandmortyapi.com/api/character/"
// function getCharacter(id) {

//   fetch(`${URL}${id}`)
//     .then((response) => response.json())
//     .then((data) =>
//       console.log(data))

// }

// export default getCharacter

function getinfo(url) {
  axios.get(url)
    .then((result) => {
      console.log(result.data)
    })
    .catch((err) => {
      console.error(err.message)
    })
}

export default getinfo