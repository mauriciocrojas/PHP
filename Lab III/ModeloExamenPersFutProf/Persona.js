class Persona {

    constructor(id, nombre, apellido, edad) {
        if (id != null) {
            this.id = id;
        }
        if (nombre != null) {
            this.nombre = nombre;
        }
        if (apellido != null) {
            this.apellido = apellido;
        }
        if (edad > 15) {
            this.edad = edad;
        }
    }

    toString() {
    }

}

class Futbolista extends Persona {
    constructor(id, nombre, apellido, edad, equipo, posicion, cantidadGoles) {
        super(id, nombre, apellido, edad)
        this.equipo = equipo;
        this.posicion = posicion;
        this.cantidadGoles = cantidadGoles;
    }

    toString() {
    }
}
class Profesional extends Persona {
    constructor(id, nombre, apellido, edad, titulo, facultad, anioGraduacion) {
        super(id, nombre, apellido, edad)
        this.titulo = titulo;
        this.facultad = facultad;
        this.anioGraduacion = anioGraduacion;
    }

    toString() {
    }
}

var personas = [{"id":1, "nombre":"Marcelo", "apellido":"Luque", "edad":45, "titulo":"Ingeniero", "facultad":"UTN","añoGraduacion":2002},{"id":2, "nombre":"Ramiro", "apellido":"Escobar", "edad":35, "titulo":"Medico","facultad":"UBA", "añoGraduacion":20012},{"id":3, "nombre":"Facundo", "apellido":"Cairo", "edad":30,"titulo":"Abogado", "facultad":"UCA", "añoGraduacion":2017},{"id":4, "nombre":"Fernando", "apellido":"Nieto","edad":18, "equipo":"Independiente", "posicion":"Delantero", "cantidadGoles":7},{"id":5, "nombre":"Manuel","apellido":"Loza", "edad":20, "equipo":"Racing", "posicion":"Volante", "cantidadGoles":2},{"id":6, "nombre":"Nicolas","apellido":"Serrano", "edad":23, "equipo":"Boca", "posicion":"Arquero", "cantidadGoles":0}];
