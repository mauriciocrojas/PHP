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

const cabecera = [
    {
        "id": "Id",
        "nombre": "Nombre",
        "apellido": "Apellido",
        "edad": "Edad",
        "equipo": "Equipo",
        "posicion": "Posicion",
        "cantidadGoles": "Cant goles",
        "titulo": "Título",
        "facultad": "Facultad",
        "anioGraduacion": "Año graduación"
    }
];

const arrayPersonas = [
    {
        "id": 1,
        "nombre": "Marcelo",
        "apellido": "Luque",
        "edad": 45,
        "titulo": "Ingeniero",
        "facultad": "UTN",
        "anioGraduacion": 2002
    },
    {
        "id": 2,
        "nombre": "Ramiro",
        "apellido": "Escobar",
        "edad": 35,
        "titulo": "Medico",
        "facultad": "UBA",
        "anioGraduacion": 20012
    },
    {
        "id": 3,
        "nombre": "Facundo",
        "apellido": "Cairo",
        "edad": 30,
        "titulo": "Abogado",
        "facultad": "UCA",
        "anioGraduacion": 2017
    },
    {
        "id": 4,
        "nombre": "Fernando",
        "apellido": "Nieto",
        "edad": 18,
        "equipo": "Independiente",
        "posicion": "Delantero",
        "cantidadGoles": 7
    },
    {
        "id": 5,
        "nombre": "Manuel",
        "apellido": "Loza",
        "edad": 20,
        "equipo": "Racing",
        "posicion": "Volante",
        "cantidadGoles": 2
    },
    {
        "id": 6,
        "nombre": "Nicolas",
        "apellido": "Serrano",
        "edad": 23,
        "equipo": "Boca",
        "posicion": "Arquero",
        "cantidadGoles": 0
    }
];

//const cantidadDePersona = personas.length


// const personade45 = personas.map((persona)=>{
//     if(persona.edad == 45) {
//         return persona
//     }
// })


// Identificar los thead, 
// personas.forEach((persona) => {
//     const tr = document.createElement('tr')

//     for (const key in persona) {
//         const td = document.createElement('td')
//         td.innerHTML = persona[key]
//         tr.appendChild(td)
//     }

//     data.appendChild(tr)
// })



// const createTh = (cabecera) => {

//     const dataThead = document.querySelector('#dataThead')
//         let th;
//         for (const key in cabecera) {
//             const th = document.createElement('th')
//             th.innerHTML = cabecera[key]
//             th.id = key
//             dataThead.appendChild(th)

//         }

//         return th;
// }

const createTh2 = (array) => {
    const dataThead = document.querySelector('#dataThead')

    const listHead = array.map((campoCabecera) => {

        let th;
        //let thacum;

        for (const key in campoCabecera) {
            th = document.createElement('th')
            th.innerHTML = campoCabecera[key]
            th.id = key
            //thacum += key;

            // if (key === "id") {

            //     th.id = campoCabecera[key]
            // }
            dataThead.appendChild(th)

        }
        return th
    })

    return listHead
}

let listaHead = createTh2(cabecera);

listaHead.forEach(elemento => {
    console.log(elemento);
});

for (key in listaHead) {
    console.log(key);
}


const createListByArray = (array) => {
    const listCampos = array.map((persona) => {
        const tr = document.createElement('tr')
        let td;

        for (const key in persona) {
            td = document.createElement('td')
            td.innerHTML = persona[key]
            td.id = key

            if (key === "id") {

                tr.id = persona[key]
            }
            tr.appendChild(td)

            const dataTbody = document.querySelector('#dataTbody')

            dataTbody.appendChild(tr)
        }
        return tr
    })

    return listCampos
}

// UTILIZACION (DEVUELVE UN ARRAY DE ELEMENTOS)
let listCampos = createListByArray(arrayPersonas)

// DEBE RECORERSE PARA MOSTRARSE
listCampos.forEach(element => {
    console.log(element)
});


const calcularEdadPromedio = (array) => {
    let acumEdad = 0;

    array.forEach(persona => {

        for (const key in persona) {
            if (key == "edad") {
                acumEdad += persona[key];
            }
        }
    }
    )

    return (acumEdad / array.length);
}


const mostrarEdadPromedio = () => {
    document.getElementById('tbEdadPromedio').value = calcularEdadPromedio(arrayPersonas);
}

let botonCalcularEdadPromedio = document.getElementById('btnCalcularEdadPromedio');
botonCalcularEdadPromedio.addEventListener('click', mostrarEdadPromedio);

