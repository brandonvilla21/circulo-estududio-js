/**
 * export default => solamente debe existir uno por archivo
 * export => puede existir mas de una vez por archivo
 */
import renderRocketCard from '../views/rocket' // Export default
import { getAllRockets } from '../models/rocket' // export (unicamente a esta funcion)

// X Obtener el elemento div con el id rockets 
// Obtener los cohetes
// Iterar sobre cada objeto cohete
  // Utilizar la funcion renderRocketCard para renderizar cada cohete
  // Agregar la pieza de HTML al div que contiene todos los cohetes

const rocketDiv = document.getElementById('rockets')

export async function displayRockets() {
  try {
    const rockets =  await getAllRockets(); // [{...},  {...}, {...}, {...}]

    const elements = rockets.map((rocket)=> {
      const element = renderRocketCard(rocket);
      return element
    })

    elements.forEach(element => rocketDiv.appendChild(element))
    
  } catch (error) {
    console.error(error)
  }
}

