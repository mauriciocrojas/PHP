class Persona {
    constructor(id, nombre, apellido, edad){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    toString(){
    }

}

class Futbolista extends Persona{
    constructor(id, nombre, apellido, edad, equipo, posicion, cantidadGoles){
        super(id, nombre, apellido, edad)
        this.equipo = equipo;
        this.posicion = posicion;
        this.cantidadGoles = cantidadGoles;
    }

    toString(){
    }
}
class Profesional extends Persona{
    constructor(id, nombre, apellido, edad, titulo, facultad, anioGraduacion){
        super(id, nombre, apellido, edad)
        this.titulo = titulo;
        this.facultad = facultad;
        this.anioGraduacion = anioGraduacion;
    }

    toString(){
    }
}