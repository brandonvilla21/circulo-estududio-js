// Crear una funcion que reciba un objeto de la API con la informacion del cohete
// Crear un elemento div
// Agregar codigo HTML al elemento creado
// Agregamos la informacion del objeto de la API al template de HTML
// retornar el elemento HTML

export default function renderRocketCard(rocket) {
  // Tipo de cohete: rocket.rocket_type
  // Si esta activo: rocket.active
  // Descripción: rocket.description
  // Enlace a wikipedia: rocket.wikipedia

  const divElement = document.createElement("div")
  
  // Ternary if
  const text = rocket.active ? 'Active' : 'Inactive'

  // if (rocket.active){
  //   text = "Active"
  // } else {
  //   text = "Inactive"
  // }

  
  
  divElement.innerHTML = `
    <div class="card">
      <div class="card-header">${rocket.rocket_name}</div>

      <div class="card-body">
        <div>
          <img class="spacex-image" src="https://www.spacex.com/static/images/share.jpg" alt="Space X Image"/>
        </div>
        <div class="card-body-info">
          Type: <strong>${rocket.rocket_type}</strong><br />

          ${text}<br />
          <div class="card-body-info-description">
            ${rocket.description}
          </div>
        </div>
      </div>

      
      <div class="card-footer"><a href="${rocket.wikipedia}">Ver Más</a></div>
    </div>  
  `
  return divElement
}