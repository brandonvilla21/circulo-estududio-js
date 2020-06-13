export async function getAllRockets() {
  // Llamar a la API de SpaceX: https://api.spacexdata.com/v3/rockets
  try {
    const result = await fetch("https://api.spacexdata.com/v3/rockets")
    const data = await result.json()
    return data
  } catch (error) {
    console.error(error)
  }

}
