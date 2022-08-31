<?php

/*
Aplicación No 17 (Auto)
Realizar una clase llamada “Auto” que posea los siguientes atributos privados:

_color (String)
_precio (Double)
_marca (String).
_fecha (DateTime)

Realizar un constructor capaz de poder instanciar objetos pasándole como parámetros:

i. La marca y el color.
ii. La marca, color y el precio.
iii. La marca, color, precio y fecha.

Realizar un método de instancia llamado “AgregarImpuestos”, que recibirá un doble por
parámetro y que se sumará al precio del objeto.
Realizar un método de clase llamado “MostrarAuto”, que recibirá un objeto de tipo “Auto”
por parámetro y que mostrará todos los atributos de dicho objeto.
Crear el método de instancia “Equals” que permita comparar dos objetos de tipo “Auto”. Sólo
devolverá TRUE si ambos “Autos” son de la misma marca.
Crear un método de clase, llamado “Add” que permita sumar dos objetos “Auto” (sólo si son
de la misma marca, y del mismo color, de lo contrario informarlo) y que retorne un Double con
la suma de los precios o cero si no se pudo realizar la operación.
Ejemplo: $importeDouble = Auto::Add($autoUno, $autoDos);

En testAuto.php:
● Crear dos objetos “Auto” de la misma marca y distinto color.
● Crear dos objetos “Auto” de la misma marca, mismo color y distinto precio.
● Crear un objeto “Auto” utilizando la sobrecarga restante.
● Utilizar el método “AgregarImpuesto” en los últimos tres objetos, agregando $ 1500
al atributo precio.
● Obtener el importe sumado del primer objeto “Auto” más el segundo y mostrar el
resultado obtenido.
● Comparar el primer “Auto” con el segundo y quinto objeto e informar si son iguales o
no.
● Utilizar el método de clase “MostrarAuto” para mostrar cada los objetos impares (1, 3, 5)

Rojas Mauricio
Ej 17
*/


class Auto
{

    public $_color;
    public $_precio;
    public $_marca;
    public $_fecha;

    public function __construct($_marca, $_color, $_precio = 0, $_fecha = "Sin especificar")
    {
        $this->_marca = $_marca;
        $this->_color = $_color;
        $this->_precio = $_precio;
        $this->_fecha = $_fecha;
    }

    public function AgregarImpuestos(float $impuesto)
    {
        return $this->_precio += $impuesto;
    }

    public static function MostrarAuto(Auto $auto)
    {
        $cadena = "Marca: " . $auto->_marca . ", Color: " . $auto->_color . ", Precio: " . $auto->_precio . ", Fecha compra: " . $auto->_fecha . "<br><br>";
        return $cadena;
    }

    public function Equals(Auto $auto1, Auto $auto2)
    {
        //     if(!strcmp($auto1->_marca, $auto2->_marca)){
        //         return "Los autos poseen la misma marca <br><br>";
        //     }else{
        //         return "Los autos no son de la misma marca<br><br>";
        //     }
        return $auto1->_marca == $auto2->_marca;
    }


    public function Add(Auto $auto1, Auto $auto2)
    {
        return $this->Equals($auto1, $auto2) ? $_precioAuto1y2 = ($auto1->_precio + $auto2->_precio) : " No se puede realizar la suma ya que las marcas no son iguales<br>";
    }
}