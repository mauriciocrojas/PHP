const botonAgregar = document.getElementById('botonAgregar')

const formulario = document.querySelector('.form')

const ocultar = () => {
    // Capturo el elemento
    // Con el elemento capturado, acceso a style.display
    formulario.style.display = 'none'
}

const mostrar = () => {
    // Capturo el element
    // Con el elemento capturado, acceso a style.display
    formulario.style.display = 'block'
}

botonAgregar.addEventListener('click', mostrar)


const personas = [
    {
        "id": 1,
        "nombre": "Marcelo",
        "apellido": "Luque",
        "edad": 45,
        "titulo": "Ingeniero",
        "facultad": "UTN",
        "añoGraduacion": 2002
    }
];

const cantidadDePersona = personas.length
const data = document.querySelector('#data')


// const personade45 = personas.map((persona)=>{
//     if(persona.edad == 45) {
//         return persona
//     }
// })


// Identificar los thead, 
personas.forEach((persona) => {
    const tr = document.createElement('tr')

    for (const key in persona) {
        const td = document.createElement('td')
        td.innerHTML = persona[key]
        tr.appendChild(td)
    }

    data.appendChild(tr)
})




// const persona = new Persona 