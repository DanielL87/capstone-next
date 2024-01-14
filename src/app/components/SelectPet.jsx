

export default async function SelectPet() {

  const starterArray = []

  const starterId = [1, 4, 7, 25, 147]

  for (let i = 0; i < starterId.length; i++) {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${starterId[i]}`)
    const response = await request.json()
    starterArray.push(starter)
  }

  return (

  <div>Select a Pet!</div>

  );
}
